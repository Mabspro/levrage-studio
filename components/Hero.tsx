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
          The studio that builds the first real version of your product for non-technical founders and operators.
        </p>
        
        <p className="text-lg text-muted max-w-xl mx-auto">
          Turn your idea into a working POC or MVP with real auth, data, hosting, and a clear path to owning your own stack.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="#start-a-build"
            className="px-8 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Start a build
          </Link>
          <Link
            href="#studio-flagships"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-border/50 transition-colors"
          >
            See live builds
          </Link>
        </div>
        
        <p className="text-sm text-muted pt-4">
          Part incubator, part builder — for founders who want working software, not just generated code or pitch decks.
        </p>
      </div>
    </section>
  )
}
