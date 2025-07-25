import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["Tokenomics", "Roadmap", "Community", "Ape Store"].map((item) => (
            <div key={item} className="pb-6">
              <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                {item}
              </Link>
            </div>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8 mb-8">
          <a
            href="https://t.me/flokiwifhat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500 transition-colors"
          >
            <img src="/images/telegram-icon.png" alt="Telegram" className="w-6 h-6" />
            <span className="sr-only">Telegram</span>
          </a>
          <a
            href="https://x.com/FLOWIFHAT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-sky-500 transition-colors"
          >
            <img src="/images/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        {/* Simple Copyright */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">© 2025 FLOKI WIF HAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
