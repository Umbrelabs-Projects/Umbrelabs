import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-outline-variant/60 bg-surface">
      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 py-20">
        {/* Top: statement + links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <img
                src="/logos/umbrelabs-high-resolution-logo-transparent.png"
                alt="Umbrelabs"
                className="w-9 h-9 object-contain"
              />
              <span className="text-2xl text-on-surface" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                Umbre<span className="text-gold">labs</span>
              </span>
            </Link>
            <p className="text-body-lg text-on-surface-variant max-w-sm leading-relaxed">
              A multi-disciplinary technology studio engineering resilient systems and
              considered design for ambitious organisations.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-on-surface-variant">Available for new partnerships</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-label-caps uppercase text-on-surface-variant mb-5">Studio</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/services" className="text-on-surface hover:text-gold transition-colors w-fit">Services</Link>
                <Link href="/portfolio" className="text-on-surface hover:text-gold transition-colors w-fit">Work</Link>
                <Link href="/about" className="text-on-surface hover:text-gold transition-colors w-fit">About</Link>
                <Link href="/contact" className="text-on-surface hover:text-gold transition-colors w-fit">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-label-caps uppercase text-on-surface-variant mb-5">Capabilities</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/services" className="text-on-surface hover:text-gold transition-colors w-fit">Technology</Link>
                <Link href="/services" className="text-on-surface hover:text-gold transition-colors w-fit">Design</Link>
                <Link href="/services" className="text-on-surface hover:text-gold transition-colors w-fit">Data & AI</Link>
                <Link href="/services" className="text-on-surface hover:text-gold transition-colors w-fit">Consulting</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-label-caps uppercase text-on-surface-variant mb-5">Connect</h4>
              <nav className="flex flex-col gap-3">
              <a href="mailto:contact@umbrelabs.com" className="text-on-surface hover:text-gold transition-colors w-fit break-all">contact@umbrelabs.com</a>
                <a href="tel:+233243528501" className="text-on-surface hover:text-gold transition-colors w-fit">+233 243 528 501</a>
                <span className="text-on-surface-variant">Ghana · Worldwide</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-outline-variant/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-surface-variant">© 2025 Umbrelabs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
