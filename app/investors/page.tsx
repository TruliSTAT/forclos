'use client'
import { useState, useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { useRouter } from 'next/navigation'
import { User, Globe, MapPin, TrendingUp, DollarSign, Edit2, Save, X, Plus } from 'lucide-react'

const STRATEGIES = ['tax-lien', 'tax-deed', 'foreclosure', 'reo', 'buy-and-hold', 'fix-and-flip', 'wholesale', 'notes']
const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

function fmt$(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

const inputCls = 'w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500'

export default function InvestorsPage() {
  const router = useRouter()
  const [profiles, setProfiles] = useState<any[]>([])
  const [myProfile, setMyProfile] = useState<any>(null)
  const [me, setMe] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [filterStrategy, setFilterStrategy] = useState('')
  const [filterState, setFilterState] = useState('')
  const [form, setForm] = useState({
    displayName: '', bio: '', location: '', website: '',
    strategies: [] as string[], states: [] as string[], isPublic: false,
  })
  const f = (k: string, v: any) => setForm(p => ({ ...p, [k]: v }))

  useEffect(() => {
    loadAll()
  }, [filterStrategy, filterState])

  const loadAll = async () => {
    setLoading(true)
    try {
      const [meRes, profRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch(`/api/investor-profiles?strategy=${filterStrategy}&state=${filterState}`),
      ])
      const meData = await meRes.json()
      setMe(meData.user)

      const profData = await profRes.json()
      setProfiles(profData.profiles || [])

      if (meData.user) {
        // Find my profile in the list or load separately
        const mine = profData.profiles?.find((p: any) => p.userId === meData.user.id)
        if (mine) {
          setMyProfile(mine)
          setForm({
            displayName: mine.displayName || '',
            bio: mine.bio || '',
            location: mine.location || '',
            website: mine.website || '',
            strategies: mine.strategies || [],
            states: mine.states || [],
            isPublic: mine.isPublic || false,
          })
        }
      }
    } finally {
      setLoading(false)
    }
  }

  const saveProfile = async () => {
    const res = await fetch('/api/investor-profiles', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (data.profile) {
      setMyProfile(data.profile)
      setEditing(false)
      loadAll()
    }
  }

  const toggleStrategy = (s: string) => {
    f('strategies', form.strategies.includes(s)
      ? form.strategies.filter(x => x !== s)
      : [...form.strategies, s])
  }

  const toggleState = (s: string) => {
    f('states', form.states.includes(s)
      ? form.states.filter(x => x !== s)
      : [...form.states, s])
  }

  const publicProfiles = profiles.filter(p => p.userId !== me?.id)

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setEditing(false)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setEditing(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X size={18} /></button>
            <h3 className="text-white font-bold text-lg mb-4">Edit Investor Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-xs mb-1 block">Display Name</label>
                <input value={form.displayName} onChange={e => f('displayName', e.target.value)} className={inputCls} placeholder="Jane Investor" />
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-1 block">Bio</label>
                <textarea value={form.bio} onChange={e => f('bio', e.target.value)} className={inputCls + ' resize-none h-24'} placeholder="Tell other investors about your strategy…" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 text-xs mb-1 block">Location</label>
                  <input value={form.location} onChange={e => f('location', e.target.value)} className={inputCls} placeholder="Miami, FL" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1 block">Website</label>
                  <input value={form.website} onChange={e => f('website', e.target.value)} className={inputCls} placeholder="https://…" />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-2 block">Investment Strategies</label>
                <div className="flex flex-wrap gap-2">
                  {STRATEGIES.map(s => (
                    <button key={s} onClick={() => toggleStrategy(s)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        form.strategies.includes(s) ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-2 block">Active States ({form.states.length})</label>
                <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                  {US_STATES.map(s => (
                    <button key={s} onClick={() => toggleState(s)}
                      className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                        form.states.includes(s) ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-500 hover:text-white'
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={form.isPublic} onChange={e => f('isPublic', e.target.checked)} className="sr-only peer" />
                  <div className="w-10 h-5 bg-slate-700 peer-checked:bg-emerald-500 rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
                <span className="text-slate-300 text-sm">Make profile public (visible to other investors)</span>
              </div>
              <button onClick={saveProfile}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Save size={14} /> Save Profile
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-white">👥 Investor Network</h1>
            <p className="text-slate-400 text-sm mt-1">Connect with other tax lien, deed, and foreclosure investors.</p>
          </div>
          {me ? (
            <button onClick={() => setEditing(true)}
              className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 px-4 py-2 rounded-xl text-sm transition-colors">
              <Edit2 size={14} /> {myProfile ? 'Edit My Profile' : 'Create Profile'}
            </button>
          ) : (
            <button onClick={() => router.push('/signup')}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition-colors">
              Join Free →
            </button>
          )}
        </div>

        {/* My profile preview */}
        {myProfile && (
          <div className="mb-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                {myProfile.displayName?.[0] || me?.name?.[0] || '👤'}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-white font-bold text-lg">{myProfile.displayName || me?.name || 'You'}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${myProfile.isPublic ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
                    {myProfile.isPublic ? '🌐 Public' : '🔒 Private'}
                  </span>
                </div>
                {myProfile.bio && <p className="text-slate-400 text-sm mb-2">{myProfile.bio}</p>}
                <div className="flex flex-wrap gap-2">
                  {myProfile.strategies.map((s: string) => (
                    <span key={s} className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                  {myProfile.states.slice(0, 8).map((s: string) => (
                    <span key={s} className="text-xs bg-slate-800 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                  {myProfile.states.length > 8 && <span className="text-xs text-slate-500">+{myProfile.states.length - 8} more</span>}
                </div>
              </div>
              <button onClick={() => setEditing(true)}
                className="text-slate-500 hover:text-white transition-colors shrink-0">
                <Edit2 size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select value={filterStrategy} onChange={e => setFilterStrategy(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500">
            <option value="">All Strategies</option>
            {STRATEGIES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={filterState} onChange={e => setFilterState(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500">
            <option value="">All States</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <span className="text-slate-500 text-sm self-center ml-2">{publicProfiles.length} investors</span>
        </div>

        {/* Profiles grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : publicProfiles.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <User size={40} className="text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400 text-lg font-semibold">No public profiles yet</p>
            <p className="text-slate-600 text-sm mt-1 mb-4">Be the first to create a public investor profile and connect with others.</p>
            {me ? (
              <button onClick={() => setEditing(true)}
                className="bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-xl hover:bg-emerald-400 transition-colors">
                Create My Profile →
              </button>
            ) : (
              <button onClick={() => router.push('/signup')}
                className="bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-xl hover:bg-emerald-400 transition-colors">
                Join Free →
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicProfiles.map(p => (
              <div key={p.id} className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 flex flex-col transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-xl">
                    {p.displayName?.[0] || p.user?.name?.[0] || '👤'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold truncate">{p.displayName || p.user?.name || 'Investor'}</p>
                    {p.location && (
                      <p className="text-slate-500 text-xs flex items-center gap-1">
                        <MapPin size={10} /> {p.location}
                      </p>
                    )}
                  </div>
                </div>

                {p.bio && <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-1 line-clamp-3">{p.bio}</p>}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-slate-800 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{p.dealsCount}</p>
                    <p className="text-slate-500 text-xs">Deals</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{p.totalInvested > 0 ? fmt$(p.totalInvested) : '—'}</p>
                    <p className="text-slate-500 text-xs">Invested</p>
                  </div>
                </div>

                {/* Strategies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.strategies.slice(0, 4).map((s: string) => (
                    <span key={s} className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>

                {/* States */}
                {p.states.length > 0 && (
                  <p className="text-slate-600 text-xs">
                    📍 {p.states.slice(0, 6).join(', ')}{p.states.length > 6 ? ` +${p.states.length - 6}` : ''}
                  </p>
                )}

                {/* Website */}
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                    <Globe size={12} /> {p.website.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
