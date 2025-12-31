export default function LabsExperiments() {
  return (
    <section id="labs-experiments" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Labs & experiments
        </h2>
        <p className="text-lg text-muted mb-8">
          These are fast experiments that show how the studio explores ideas and ships quickly. They are not polished products.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Afriai
            </h3>
            <p className="text-muted text-sm">
              Early concepts at the intersection of African markets and AI infrastructure; used to test patterns for data, governance, and deployment in emerging ecosystems.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Refridge-X
            </h3>
            <p className="text-muted text-sm">
              Logistics and cold-chain experiment focused on how inventory and operations data can drive better decisions.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Patry
            </h3>
            <p className="text-muted text-sm">
              A shopping assistant for busy dads that turns pictures, text, voice, and links into categorized store lists to minimize time in the aisles. Lab-grade concept in active experimentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
