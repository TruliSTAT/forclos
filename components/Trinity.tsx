'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { X, Send, ExternalLink, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

interface Listing {
  id: string
  type: string
  address: string
  city: string
  state: string
  amount: number | null
  estimatedValue: number | null
  equityPct: number | null
  interestRate: number | null
  auctionDate: string | null
  saleDate: string | null
  status: string
  dealScore?: number
  dealGrade?: string
}

interface Message {
  role: 'user' | 'trinity'
  content: string
  listings?: Listing[]
  searchUrl?: string
  score?: { score: number; grade: string; breakdown: Record<string, number> }
  timestamp: number
  loading?: boolean
}

function fmt$(n: number | null | undefined) {
  if (n == null) return '—'
  if (n >= 1000000) return `$${(n/1000000).toFixed(1)}M`
  if (n >= 1000) return `$${(n/1000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const GRADE_COLORS: Record<string, string> = {
  hot:  'text-emerald-400',
  warm: 'text-amber-400',
  cold: 'text-red-400',
}
const GRADE_BG: Record<string, string> = {
  hot:  'bg-emerald-500/10 border-emerald-500/20',
  warm: 'bg-amber-500/10 border-amber-500/20',
  cold: 'bg-red-500/10 border-red-500/20',
}

const SUGGESTIONS = [
  'Find tax liens under $10K in Florida',
  'What\'s hot in Texas right now?',
  'How do tax liens work in Ohio?',
  'Show me foreclosures in Georgia',
]

function TrinityAvatar({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="tg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0f766e" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Halo */}
      <circle cx="20" cy="20" r="19" fill="url(#halo)" />
      {/* Head */}
      <circle cx="20" cy="15" r="8" fill="url(#tg)" />
      {/* Body silhouette */}
      <path d="M6 38 Q20 26 34 38" fill="url(#tg)" opacity="0.9" />
      {/* Eyes */}
      <circle cx="17" cy="13" r="1.5" fill="#f0fdf4" />
      <circle cx="23" cy="13" r="1.5" fill="#f0fdf4" />
      {/* Gold accent — crown mark */}
      <path d="M15 10 L17 7 L20 9 L23 7 L25 10" stroke="#f59e0b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function PropertyCard({ l }: { l: Listing }) {
  const grade = l.dealGrade || 'warm'
  const amount = l.amount
  const date = l.auctionDate || l.saleDate

  return (
    <div className={`rounded-xl border p-3 ${GRADE_BG[grade]} text-xs`}>
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold truncate text-sm">{l.address}</p>
          <p className="text-slate-400">{l.city}, {l.state} · <span className="capitalize">{l.type.replace('-', ' ')}</span></p>
        </div>
        {l.dealScore != null && (
          <div className={`shrink-0 flex flex-col items-center px-2 py-1 rounded-lg border ${GRADE_BG[grade]}`}>
            <span className={`font-black text-lg leading-none ${GRADE_COLORS[grade]}`}>{l.dealScore}</span>
            <span className={`text-[10px] ${GRADE_COLORS[grade]}`}>{grade.toUpperCase()}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div>
          <p className="text-slate-500 text-[10px]">Bid / Lien</p>
          <p className="text-emerald-400 font-bold text-sm">{fmt$(amount)}</p>
        </div>
        {l.estimatedValue && (
          <div>
            <p className="text-slate-500 text-[10px]">Est. Value</p>
            <p className="text-slate-300 font-semibold">{fmt$(l.estimatedValue)}</p>
          </div>
        )}
        {l.interestRate && (
          <div>
            <p className="text-slate-500 text-[10px]">Rate</p>
            <p className="text-sky-400 font-semibold">{l.interestRate}%</p>
          </div>
        )}
        {l.equityPct != null && (
          <div>
            <p className="text-slate-500 text-[10px]">Equity</p>
            <p className="text-violet-400 font-semibold">{l.equityPct.toFixed(0)}%</p>
          </div>
        )}
        {date && (
          <div className="ml-auto text-right">
            <p className="text-slate-500 text-[10px]">Date</p>
            <p className="text-slate-400">{new Date(date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ScoreCard({ score }: { score: { score: number; grade: string; breakdown: Record<string, number> } }) {
  const grade = score.grade as 'hot'|'warm'|'cold'
  const emoji = grade === 'hot' ? '🟢' : grade === 'warm' ? '🟡' : '🔴'
  return (
    <div className={`rounded-xl border p-3 ${GRADE_BG[grade]}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className={`font-black text-3xl ${GRADE_COLORS[grade]}`}>{score.score}</span>
        <div>
          <p className={`font-bold text-sm ${GRADE_COLORS[grade]}`}>{emoji} {grade.toUpperCase()} DEAL</p>
          <p className="text-slate-500 text-xs">Deal Score / 100</p>
        </div>
      </div>
      {score.breakdown && (
        <div className="space-y-1">
          {Object.entries({ 'Equity / ROI': [score.breakdown.equity, 40], 'Delinquency': [score.breakdown.delinquency, 20], 'Location': [score.breakdown.location, 20], 'Timing': [score.breakdown.timing, 10], 'Prop Type': [score.breakdown.propertyType, 10] }).map(([label, [pts, max]]) => (
            <div key={label} className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 w-20 shrink-0">{label}</span>
              <div className="flex-1 bg-slate-800 rounded-full h-1">
                <div className={`h-1 rounded-full ${grade === 'hot' ? 'bg-emerald-400' : grade === 'warm' ? 'bg-amber-400' : 'bg-red-400'}`}
                  style={{ width: `${((pts as number)/(max as number))*100}%` }} />
              </div>
              <span className="text-slate-500 w-8 text-right">{pts}/{max}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MessageBubble({ msg }: { msg: Message }) {
  if (msg.role === 'user') {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[85%] bg-amber-500/20 border border-amber-500/30 rounded-2xl rounded-br-sm px-4 py-2.5">
          <p className="text-amber-100 text-sm">{msg.content}</p>
        </div>
      </div>
    )
  }

  // Trinity message
  const lines = msg.content.split('\n')

  return (
    <div className="flex gap-2.5 mb-3">
      <div className="shrink-0 mt-0.5">
        <TrinityAvatar size={28} />
      </div>
      <div className="flex-1 max-w-[90%]">
        {msg.loading ? (
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-sm px-4 py-3 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="text-sm text-slate-200 leading-relaxed space-y-1">
                {lines.map((line, i) => {
                  if (!line.trim()) return <br key={i} />
                  // Bold markdown
                  const parts = line.split(/(\*\*[^*]+\*\*)/g)
                  return (
                    <p key={i}>
                      {parts.map((p, j) =>
                        p.startsWith('**') && p.endsWith('**')
                          ? <strong key={j} className="text-white font-semibold">{p.slice(2, -2)}</strong>
                          : p
                      )}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Score card */}
            {msg.score && <ScoreCard score={msg.score} />}

            {/* Property listings */}
            {msg.listings && msg.listings.length > 0 && (
              <div className="space-y-2">
                {msg.listings.map(l => <PropertyCard key={l.id} l={l} />)}
              </div>
            )}

            {/* View full results button */}
            {msg.searchUrl && (
              <Link href={msg.searchUrl}
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-xs font-semibold transition-colors group"
                target="_blank">
                <ExternalLink size={12} className="group-hover:scale-110 transition-transform" />
                View All Results →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function TrinityChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [anonCount, setAnonCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Init with greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: 'trinity',
        content: "I'm Trinity. Tell me what you're looking for and I'll find it.",
        timestamp: Date.now(),
      }])
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = useCallback(async (text?: string) => {
    const msg = (text || input).trim()
    if (!msg || loading) return

    // Anonymous rate limit
    if (anonCount >= 3) {
      setMessages(prev => [...prev, {
        role: 'trinity',
        content: 'You\'ve used your 3 free questions. Sign up for a free account to keep going, or upgrade to Pro for 20/day. — Trinity',
        timestamp: Date.now(),
      }])
      return
    }

    setInput('')
    const userMsg: Message = { role: 'user', content: msg, timestamp: Date.now() }
    const loadingMsg: Message = { role: 'trinity', content: '', timestamp: Date.now() + 1, loading: true }
    setMessages(prev => [...prev, userMsg, loadingMsg])
    setLoading(true)
    setAnonCount(n => n + 1)

    try {
      const res = await fetch('/api/trinity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      })
      const data = await res.json()
      setMessages(prev => [...prev.slice(0, -1), { ...data, timestamp: Date.now() }])
    } catch {
      setMessages(prev => [...prev.slice(0, -1), {
        role: 'trinity', content: 'Connection error. Try again. — Trinity', timestamp: Date.now(),
      }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, anonCount])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 ${
          open
            ? 'bg-slate-800 border border-slate-700 text-slate-400'
            : 'bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-teal-400 shadow-teal-900/50'
        }`}
        style={{ boxShadow: open ? undefined : '0 0 30px rgba(20,184,166,0.3)' }}
      >
        {open ? <X size={18} /> : <TrinityAvatar size={22} />}
        <span className="font-bold text-sm">{open ? 'Close' : 'Ask Trinity'}</span>
        {!open && <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />}
      </button>

      {/* Chat panel */}
      <div className={`fixed bottom-20 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-slate-950 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: 'min(600px, 80vh)' }}>
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-900/80 border-b border-slate-800 flex items-center gap-3">
            <TrinityAvatar size={32} />
            <div>
              <p className="text-white font-bold text-sm">Trinity</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-xs">Forclos AI · Always on</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide" style={{ minHeight: 300 }}>
            {messages.map((m, i) => <MessageBubble key={i} msg={m} />)}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions (show when no messages or just greeting) */}
          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)}
                  className="text-xs text-teal-400 border border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/10 px-2.5 py-1 rounded-full transition-colors text-left">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-slate-800 p-3 flex items-center gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about the market…"
              className="flex-1 bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-teal-500 placeholder:text-slate-600"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="shrink-0 w-9 h-9 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Homepage section ─────────────────────────────────────────────────────────

const DEMO_EXCHANGES = [
  {
    user: 'Find me tax liens under $10K in Florida with over 15% interest',
    trinity: 'Found **1,247** matches in Florida with 15%+ interest rates. Here are your top deals by score:',
    card: { address: '4821 Palmetto Ln', city: 'Orlando', state: 'FL', type: 'tax-lien', amount: 7850, estimatedValue: 142000, interestRate: 18, dealScore: 86, dealGrade: 'hot' as const },
  },
  {
    user: 'Is a $12K lien on a $180K home in Ohio a good deal?',
    trinity: '**Deal Analysis — OH**\n\nStrong deal. 93% equity buffer — that\'s exceptional cushion.\n\nBid/Lien: **$12,000**\nEst. Value: **$180,000**\nEquity: **93.3%**\n\nDeal Score: **89/100** 🟢',
    score: { score: 89, grade: 'hot', breakdown: { equity: 38, delinquency: 16, location: 16, timing: 10, propertyType: 9 } },
  },
  {
    user: "What's the best county in Texas for tax liens right now?",
    trinity: 'Here are the hottest counties in Texas right now:\n\n1. **Harris County** — 2,847 active, avg 25% rate\n2. **Tarrant County** — 1,203 active, avg 25% rate\n3. **Dallas County** — 987 active, avg 25% rate\n\nTexas is a redeemable deed state — 25-50% penalty if redeemed in years 1-2. — Trinity',
  },
]

export function TrinityHomepageSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <TrinityAvatar size={16} />
          Forclos AI
        </div>
        <h2 className="text-4xl font-black text-white mb-3">
          Meet <span className="text-teal-400">Trinity</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          The only AI that speaks fluent real estate investor. Natural language search, deal analysis, market intel — all in one conversation.
        </p>
      </div>

      {/* Demo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Query selector */}
        <div className="space-y-3">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">Try asking Trinity:</p>
          {DEMO_EXCHANGES.map((ex, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                active === i
                  ? 'bg-teal-500/10 border-teal-500/30 text-white'
                  : 'border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
              }`}>
              <p className="text-sm">&ldquo;{ex.user}&rdquo;</p>
            </button>
          ))}
          <div className="pt-4 flex items-center gap-3">
            <Zap size={14} className="text-teal-400" />
            <p className="text-slate-500 text-xs">3 free questions/day · Pro: 20/day · Elite: unlimited</p>
          </div>
        </div>

        {/* Chat demo */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
            <TrinityAvatar size={24} />
            <span className="text-white font-bold text-sm">Trinity</span>
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse ml-1" />
          </div>

          <div className="p-4 space-y-3">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
                <p className="text-amber-100 text-sm">{DEMO_EXCHANGES[active].user}</p>
              </div>
            </div>

            {/* Trinity response */}
            <div className="flex gap-2">
              <TrinityAvatar size={24} />
              <div className="flex-1 space-y-2">
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-sm px-3 py-2">
                  <div className="text-sm text-slate-200 space-y-0.5">
                    {DEMO_EXCHANGES[active].trinity.split('\n').map((line, i) => {
                      if (!line.trim()) return <br key={i} />
                      const parts = line.split(/(\*\*[^*]+\*\*)/g)
                      return <p key={i}>{parts.map((p, j) => p.startsWith('**') && p.endsWith('**') ? <strong key={j} className="text-white">{p.slice(2,-2)}</strong> : p)}</p>
                    })}
                  </div>
                </div>

                {/* Show property card for first example */}
                {active === 0 && DEMO_EXCHANGES[0].card && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-semibold">{DEMO_EXCHANGES[0].card.address}</p>
                        <p className="text-slate-400">{DEMO_EXCHANGES[0].card.city}, {DEMO_EXCHANGES[0].card.state}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-400 font-black text-lg">${DEMO_EXCHANGES[0].card.amount!.toLocaleString()}</p>
                        <p className="text-sky-400">{DEMO_EXCHANGES[0].card.interestRate}% rate</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-emerald-400 font-bold">🟢 {DEMO_EXCHANGES[0].card.dealScore} — HOT</span>
                      <span className="text-slate-500">est. ${(DEMO_EXCHANGES[0].card.estimatedValue!/1000).toFixed(0)}K value</span>
                    </div>
                  </div>
                )}

                {/* Score for second example */}
                {active === 1 && DEMO_EXCHANGES[1].score && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-black text-3xl">{DEMO_EXCHANGES[1].score.score}</span>
                      <div>
                        <p className="text-emerald-400 font-bold text-sm">🟢 HOT DEAL</p>
                        <p className="text-slate-500 text-xs">Deal Score / 100</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Input preview */}
          <div className="border-t border-slate-800 p-3 flex items-center gap-2">
            <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-slate-600 text-sm">
              Ask Trinity anything…
            </div>
            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center">
              <Send size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
