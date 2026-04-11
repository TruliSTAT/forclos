import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl mb-6">🏚️</p>
        <h1 className="text-5xl font-black text-white mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-300 mb-3">Property Not Found</h2>
        <p className="text-slate-400 mb-8">
          This listing may have been sold, withdrawn, or the link is incorrect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/search"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-base transition-colors">
            Search All Listings →
          </Link>
          <Link href="/"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-6 py-3 rounded-xl text-base transition-colors">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
