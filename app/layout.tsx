import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TrinityChat } from '@/components/Trinity'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#10b981',
}

export const metadata: Metadata = {
  title: 'Forclos — Find the Deal. Before Anyone Else.',
  description: 'The investor command center for foreclosure auctions, tax liens, and tax deed sales. 30+ filters, AI Deal Score, deal analyzer. Nationwide coverage.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://forclos.com'),
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Forclos' },
  openGraph: {
    title: 'Forclos — Find the Deal. Before Anyone Else.',
    description: 'AI-powered investor command center for foreclosure auctions and tax liens.',
    siteName: 'Forclos',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Forclos', description: 'Find the Deal. Before Anyone Else.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen antialiased`}>
        {children}
        <TrinityChat />
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
          }
        `}} />
      </body>
    </html>
  )
}
