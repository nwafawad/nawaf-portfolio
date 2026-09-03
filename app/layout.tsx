import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const description =
  'Nawaf Ahmed is a product designer focused on clear systems, useful interactions, and work that is ready to ship.';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: {
    default: 'Nawaf Ahmed — Product Designer',
    template: '%s — Nawaf Ahmed',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nawaf Ahmed — Product Designer',
    title: 'Nawaf Ahmed — Product Designer',
    description,
    images: [
      {
        url: '/og.png',
        width: 1536,
        height: 864,
        alt: 'Nawaf — Product design, systems, and shipped work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nawaf Ahmed — Product Designer',
    description,
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2eee3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
