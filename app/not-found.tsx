import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found shell">
        <p className="eyebrow">404 / Off the map</p>
        <h1>This page isn&apos;t part of the system.</h1>
        <Link className="action-link action-link-primary" href="/">
          <ArrowLeft aria-hidden="true" /> Return to selected work
        </Link>
      </main>
    </>
  );
}
