import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <p>© {new Date().getFullYear()} Nawaf Ahmed</p>
        <p>Resilient APIs · Transactional data · Offline-first systems</p>
        <div>
          <Link href="/about">About</Link>
          <a href="mailto:nwafawad49@gmail.com">Email</a>
          <a
            href="https://github.com/nwafawad"
            target="_blank"
            rel="noreferrer"
            aria-label="Nawaf Ahmed on GitHub (opens in a new tab)"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nawaf-ahmed-876101215/"
            target="_blank"
            rel="noreferrer"
            aria-label="Nawaf Ahmed on LinkedIn (opens in a new tab)"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/nwafawad/"
            target="_blank"
            rel="noreferrer"
            aria-label="Nawaf Ahmed on Instagram (opens in a new tab)"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
