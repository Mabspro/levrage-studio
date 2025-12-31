import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 pb-8 border-b border-border">
          <p className="text-xs text-muted mb-2">
            Built by Mabvuto Kaela — a systems-focused operator shipping real software across SaaS, healthcare, data platforms, and emerging-market infrastructure.
          </p>
          <Link
            href="https://www.linkedin.com/in/mabvuto-kaela-9b84b52b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            LinkedIn →
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} LevrAge Innovation Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
