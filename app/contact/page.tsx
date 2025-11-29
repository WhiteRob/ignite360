export default function Contact() {
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

      {/* Contact Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Talk
            </span>
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Ready to scale your revenue through performance marketing? Get in touch with our team to discuss your growth goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-neutral-300 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select an industry</option>
                  <option value="fintech">Fintech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="travel">Travel</option>
                  <option value="saas">SaaS</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your growth goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-900/30 to-neutral-800/20 border border-neutral-800/50">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-neutral-400 text-sm">hello@ignite360.com</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-900/30 to-neutral-800/20 border border-neutral-800/50">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Chat</h3>
              <p className="text-neutral-400 text-sm">Available 9am-6pm EST</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-900/30 to-neutral-800/20 border border-neutral-800/50">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-neutral-400 text-sm">Remote-First Team</p>
            </div>
          </div>
        </div>
      </section> */}

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
