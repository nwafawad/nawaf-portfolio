import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Nawaf Ahmed, a Software Engineering student at African Leadership University with full-stack development experience.',
};

const experience = [
  {
    number: '01',
    title: 'Software Development Intern',
    copy: 'Elevanda Ventures, Kigali · Apr 2026 - Present. Designing relational schemas and secure REST APIs, containerizing workflows with Docker, and collaborating through Git.',
  },
  {
    number: '02',
    title: 'Bachelor of Software Engineering',
    copy: 'African Leadership University, Kigali · Expected May 2028 · Second Upper academic standing. Coursework includes enterprise web development, web infrastructure, Linux, Python, and databases.',
  },
  {
    number: '03',
    title: 'SoCreative Certified Graduate',
    copy: 'British Council and ALU School of Business · Mar 2025. Completed a program in entrepreneurship and business fundamentals.',
  },
  {
    number: '04',
    title: 'Community Volunteer',
    copy: 'Portive Youth, Port Sudan · Jun 2025. Worked with a diverse youth community in a cultural arts hub to plan and drive public engagement initiatives.',
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
            <h1>I build across the stack.</h1>
          </div>
          <div className="about-intro">
            <p>
              I&apos;m a Software Engineering student with hands-on experience
              building full-stack, data-driven applications using modern
              frameworks and tools.
            </p>
            <p>
              I&apos;m comfortable designing databases, building APIs, and working
              across the stack in collaborative environments. I&apos;m fluent in
              English and Arabic and quick to learn new tools and technologies.
            </p>
          </div>
        </section>

        <section className="about-facts shell" aria-label="Profile details">
          <div>
            <span>Based in</span>
            <strong>Kigali, Rwanda</strong>
          </div>
          <div>
            <span>Degree</span>
            <strong>BSc Software Engineering</strong>
          </div>
          <div>
            <span>Graduation</span>
            <strong>Expected May 2028</strong>
          </div>
        </section>

        <section className="principles shell" aria-labelledby="experience-title">
          <header>
            <p className="eyebrow">Experience &amp; education</p>
            <h2 id="experience-title">Learning by building.</h2>
          </header>
          <div className="principle-list">
            {experience.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities shell" aria-labelledby="capabilities-title">
          <p className="eyebrow">Technical toolkit</p>
          <div>
            <h2 id="capabilities-title">
              FastAPI, React.js, Python, Node.js, databases, Docker, and Git.
            </h2>
            <p>
              Also experienced with Express.js, Prisma ORM, MySQL/PostgreSQL,
              SQLAlchemy, Linux and shell scripting, computer networks, and the
              Microsoft Office suite.
            </p>
          </div>
        </section>

        <section className="about-contact shell" id="contact">
          <div>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Let&apos;s build something useful.</h2>
          </div>
          <div className="about-contact-actions">
            <a href="mailto:nwafawad49@gmail.com">
              nwafawad49@gmail.com <ArrowUpRight aria-hidden="true" />
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
