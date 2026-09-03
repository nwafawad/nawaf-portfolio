import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <p>© {new Date().getFullYear()} Nawaf Ahmed</p>
        <p>Software engineering · APIs · Full-stack systems</p>
        <div>
          <Link href="/about">About</Link>
          <a href="mailto:nwafawad49@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
