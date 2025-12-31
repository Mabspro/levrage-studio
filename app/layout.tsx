import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LevrAge Innovation Studios',
  description: 'The studio that builds the first real version of your product for non-technical founders and operators.',
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
