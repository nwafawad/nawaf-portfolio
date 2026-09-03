import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <p>© {new Date().getFullYear()} Nawaf Ahmed</p>
        <p>Product design · Systems · Shipped work</p>
        <div>
          <Link href="/about">About</Link>
          <a href="mailto:n.ahmed@alustudent.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
