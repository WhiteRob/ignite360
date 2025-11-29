export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-800/50 backdrop-blur-sm sticky top-0 z-50 bg-neutral-950/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Ignite360
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-neutral-300 hover:text-white transition-colors">How It Works</a>
            <a href="/#industries" className="text-neutral-300 hover:text-white transition-colors">Industries</a>
            <a href="/#metrics" className="text-neutral-300 hover:text-white transition-colors">Results</a>
            <a href="/contact" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-medium transition-all">
              Talk to Our Team
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Case{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Real results from brands scaling revenue through our performance marketing network.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              industry: 'Fintech',
              title: 'Leading Digital Banking Platform',
              challenge: 'Needed to acquire high-quality customers at scale while maintaining strict compliance and fraud prevention standards.',
              solution: 'Deployed targeted campaigns across our owned financial comparison sites and exclusive publisher partnerships, with real-time fraud detection and attribution tracking.',
              results: [
                { metric: '340%', label: 'Increase in Customer Acquisition' },
                { metric: '$42', label: 'Cost Per Acquisition' },
                { metric: '18%', label: 'Conversion Rate' },
              ],
              timeframe: '6 months',
            },
            {
              industry: 'E-commerce',
              title: 'Premium Home Goods Retailer',
              challenge: 'Struggling to compete with larger marketplaces and needed profitable customer acquisition channels beyond paid search.',
              solution: 'Leveraged our content network and strategic affiliate partnerships to reach high-intent shoppers through product reviews, buying guides, and comparison content.',
              results: [
                { metric: '2.8x', label: 'ROAS Improvement' },
                { metric: '125K+', label: 'New Customers' },
                { metric: '32%', label: 'Lower CAC vs. Paid Search' },
              ],
              timeframe: '9 months',
            },
            {
              industry: 'Travel',
              title: 'International Booking Platform',
              challenge: 'Seasonal demand fluctuations and need to expand into new geographic markets cost-effectively.',
              solution: 'Built custom campaigns across our travel media properties with dynamic geo-targeting and seasonal optimization strategies.',
              results: [
                { metric: '$8.2M', label: 'Revenue Driven' },
                { metric: '215%', label: 'Growth in New Markets' },
                { metric: '4.2x', label: 'Return on Ad Spend' },
              ],
              timeframe: '12 months',
            },
            {
              industry: 'SaaS',
              title: 'B2B Project Management Software',
              challenge: 'Long sales cycles and needed to generate qualified enterprise leads at predictable costs.',
              solution: 'Deployed content-driven campaigns through our B2B network, focusing on decision-maker targeting and nurture pathways.',
              results: [
                { metric: '580+', label: 'Qualified Enterprise Leads' },
                { metric: '$187', label: 'Cost Per Lead' },
                { metric: '24%', label: 'Lead-to-Customer Rate' },
              ],
              timeframe: '8 months',
            },
          ].map((study, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 hover:border-blue-500/30 transition-all"
            >
              {/* Industry Tag */}
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                {study.industry}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{study.title}</h3>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Challenge</h4>
                <p className="text-neutral-400 leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-neutral-400 leading-relaxed">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 rounded-lg bg-neutral-950/50">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-neutral-500">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeframe */}
              <div className="text-sm text-neutral-500">
                Timeframe: <span className="text-neutral-400 font-medium">{study.timeframe}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-950/30 via-neutral-900/50 to-cyan-950/30 border border-blue-800/30 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Drive Similar Results?
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how our performance marketing network can help you achieve your growth goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-blue-500/20"
          >
            Talk to Our Team
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Ignite360
            </div>
            <p className="text-neutral-500 text-sm">
              Performance marketing publisher delivering real customers at scale.
            </p>
          </div>
          <div className="pt-8 border-t border-neutral-800/50 text-center text-neutral-500 text-sm">
            © 2025 Ignite360 inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
