import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LevrAge Innovation Studios',
  description: 'Knowledge scans, AI operating systems, and first-version builds for founders and operators who need practical systems, not generic AI noise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
