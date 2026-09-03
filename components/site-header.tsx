import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Nawaf Ahmed, home">
          <span>N/A</span>
          <strong>Nawaf Ahmed</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <a href="/resume.pdf" download>
            Résumé
          </a>
          <a href="mailto:n.ahmed@alustudent.com">Email</a>
        </nav>
      </div>
    </header>
  );
}
