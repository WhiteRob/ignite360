export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-800/50 backdrop-blur-sm sticky top-0 z-50 bg-neutral-950/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Ignite360
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-neutral-300 hover:text-white transition-colors">How It Works</a>
            <a href="#industries" className="text-neutral-300 hover:text-white transition-colors">Industries</a>
            <a href="#metrics" className="text-neutral-300 hover:text-white transition-colors">Results</a>
            <a href="/contact" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-medium transition-all">
              Talk to Our Team
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drive Revenue Through{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Our Performance Marketing Network
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed">
            We own and operate the properties and systems that deliver real customers to your brand—not just clicks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto text-center">
              Talk to Our Team
            </a>
            <a href="/case-studies" className="px-8 py-4 border border-neutral-700 hover:border-neutral-500 rounded-lg font-semibold text-lg transition-all w-full sm:w-auto text-center">
              View Case Studies
            </a>
          </div>
        </div>

        {/* Company Description */}
        <div className="max-w-3xl mx-auto mt-24 p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 backdrop-blur-sm">
          <p className="text-lg text-neutral-300 leading-relaxed text-center">
            Ignite360 is a performance marketing publisher that helps brands grow through our proprietary network of media properties and traffic sources.
            We own and operate the systems that deliver real customers across industries like fintech, e-commerce, travel, and SaaS. Using advanced data,
            attribution technology, and strategic media buying, we drive measurable revenue while maintaining brand integrity and long-term profitability.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Proprietary Traffic Sources',
              description: 'We leverage our owned media properties and exclusive traffic partnerships to reach high-intent customers across multiple channels.',
            },
            {
              step: '02',
              title: 'Data-Driven Optimization',
              description: 'Advanced attribution tracking and analytics ensure every campaign delivers measurable ROI and efficient customer acquisition.',
            },
            {
              step: '03',
              title: 'Scale & Grow',
              description: 'We continuously optimize and expand our network infrastructure to deliver consistent, profitable growth for your brand.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 bg-clip-text text-transparent mb-6">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Fintech',
              description: 'Banking, payments, lending, and financial services',
              icon: '💳',
            },
            {
              name: 'E-commerce',
              description: 'Retail, DTC brands, and online marketplaces',
              icon: '🛒',
            },
            {
              name: 'Travel',
              description: 'Booking platforms, tours, and hospitality',
              icon: '✈️',
            },
            {
              name: 'SaaS',
              description: 'B2B software and subscription services',
              icon: '💻',
            },
          ].map((industry) => (
            <div
              key={industry.name}
              className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 hover:border-blue-500/30 transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="max-w-7xl mx-auto px-6 py-24">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-950/30 via-neutral-900/50 to-cyan-950/30 border border-blue-800/30">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Performance at Scale
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: '1M+', label: 'Annual Conversions' },
              { value: '$20M+', label: 'Revenue Driven' },
              { value: '100+', label: 'Active Brands' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {metric.value}
                </div>
                <div className="text-xl text-neutral-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Revenue?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Let's discuss how our performance marketing network can drive growth for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto text-center">
              Talk to Our Team
            </a>
          </div>
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
