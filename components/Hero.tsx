import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 opacity-[0.02] blur-3xl">
          <div className="w-full h-full bg-primary rounded-full" />
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
          LevrAge Innovation Studios
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto">
          Knowledge scans, AI operating systems, and custom builds for founders who need buried thinking turned into capability — or a first real version shipped.
        </p>
        
        <p className="text-lg text-muted max-w-xl mx-auto">
          Start with a Signal Scan when the value is buried in notes and docs, set up an AI layer with safe defaults when the workflow is clear, or turn the approved idea into a working POC or MVP.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="#start-a-build"
            className="px-8 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Start a build
          </Link>
          <Link
            href="#services"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-border/50 transition-colors"
          >
            How we help
          </Link>
          <Link
            href="#studio-flagships"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-border/50 transition-colors"
          >
            See live builds
          </Link>
        </div>
        
        <p className="text-sm text-muted pt-4 max-w-xl mx-auto">
          For founders who want OpenClaw-like AI setup without wiring it themselves — and for those who need working software, not just generated code or pitch decks.
        </p>
      </div>
    </section>
  )
}
