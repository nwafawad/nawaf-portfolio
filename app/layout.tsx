import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const description =
  'Nawaf Ahmed is a Software Engineering student building full-stack, data-driven applications with Python, FastAPI, React.js, PostgreSQL, and Docker.';
const siteUrl = new URL(
  'https://nawaf-ahmed-portfolio.n-ahmed359377.chatgpt.site',
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Nawaf Ahmed — Software Engineering Student',
    template: '%s — Nawaf Ahmed',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nawaf Ahmed — Software Engineering Student',
    title: 'Nawaf Ahmed — Software Engineering Student',
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
    title: 'Nawaf Ahmed — Software Engineering Student',
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
