'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()
    setLoading(false)
    if (data.error) { setError(data.error); return }
    router.push('/search')
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950">LS</div>
          <span className="font-bold text-white text-xl">LienScope</span>
        </Link>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h1 className="text-white font-bold text-2xl mb-1 text-center">Start for free</h1>
          <p className="text-slate-500 text-sm text-center mb-6">10 searches/day on the free plan</p>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-slate-400 text-sm block mb-1.5">Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                placeholder="Jane Investor" />
            </div>
            <div>
              <label className="text-slate-400 text-sm block mb-1.5">Email <span className="text-red-400">*</span></label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-slate-400 text-sm block mb-1.5">Password <span className="text-red-400">*</span></label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                placeholder="8+ characters" />
            </div>
            {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold py-3 rounded-xl transition-colors">
              {loading ? 'Creating account…' : 'Create Free Account →'}
            </button>
          </form>
          <p className="text-slate-600 text-xs text-center mt-4">By signing up you agree to our Terms of Service.</p>
          <p className="text-center text-slate-500 text-sm mt-3">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-400 hover:text-emerald-300">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
