import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nawaf Ahmed’s product design approach: frame the decision, expose the system, and carry the details through.',
};

const principles = [
  {
    number: '01',
    title: 'Frame the decision',
    copy: 'A clear product direction begins with the decision a person needs to make—not the screen a team has been asked to draw.',
  },
  {
    number: '02',
    title: 'Expose the system',
    copy: 'Interfaces become trustworthy when their states, ownership, and consequences are understandable rather than merely tidy.',
  },
  {
    number: '03',
    title: 'Carry the details through',
    copy: 'The final mile matters: language, edge cases, responsive behavior, and the rules that keep a product coherent after launch.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="about-page">
        <section className="about-hero shell">
          <div className="about-title-block">
            <Link className="back-link" href="/">
              <ArrowLeft aria-hidden="true" /> Back to work
            </Link>
            <p className="eyebrow">About / Nawaf Ahmed</p>
            <h1>I design the logic people feel.</h1>
          </div>
          <div className="about-intro">
            <p>
              Product design is often described through screens. I&apos;m more
              interested in what connects them: the decisions, states, language,
              and operating rules that make a product understandable.
            </p>
            <p>
              My approach moves from framing to structure to interaction, with a
              bias toward prototypes that make tradeoffs concrete early.
            </p>
          </div>
        </section>

        <section className="about-image shell" aria-label="Portfolio identity">
          <Image
            src="/identity.png"
            alt="Nawaf’s modular portfolio identity in warm paper, black, red, and blue"
            width={1536}
            height={864}
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </section>

        <section className="principles shell" aria-labelledby="principles-title">
          <header>
            <p className="eyebrow">Working principles</p>
            <h2 id="principles-title">A practical point of view.</h2>
          </header>
          <div className="principle-list">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities shell" aria-labelledby="capabilities-title">
          <p className="eyebrow">Capabilities</p>
          <div>
            <h2 id="capabilities-title">
              Product strategy, interaction design, systems, and prototyping.
            </h2>
            <p>
              The portfolio currently uses independent concept studies while
              verified project details are prepared. No client names or outcomes
              have been invented.
            </p>
          </div>
        </section>

        <section className="about-contact shell" id="contact">
          <div>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Bring the complicated problem.</h2>
          </div>
          <div className="about-contact-actions">
            <a href="mailto:n.ahmed@alustudent.com">
              n.ahmed@alustudent.com <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/resume.pdf" download>
              Download résumé <Download aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
