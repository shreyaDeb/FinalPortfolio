import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="footer-inner py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Name and title */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300"
            >
              SHREYA DEB
            </Link>
            <p className="text-sm text-muted-foreground">
              Software Engineer &middot; Product Builder
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            <Link
              href="/work"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              WORK
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ABOUT
            </Link>
            <Link
              href="/experiments"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              EXPERIMENTS
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              CONTACT
            </Link>
          </nav>

          {/* Social and copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-5">
              <Link
                href="https://linkedin.com/in/shreyadeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/shreyadeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="GitHub profile"
              >
                GitHub
              </Link>
              <Link
                href="mailto:shreya.deb@icloud.com"
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Send email"
              >
                Email
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Shreya Deb
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
