import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Nawaf Ahmed, a systems-focused Software Engineering student building resilient APIs, data platforms, and offline-first products.',
};

const experience = [
  {
    number: '01',
    title: 'Software Development Intern',
    copy: 'Elevanda Ventures, Kigali · Apr 2026 - Present. Designing normalized PostgreSQL schemas, secure typed REST APIs, and reproducible Docker workflows in a cross-functional team.',
  },
  {
    number: '02',
    title: 'BSc (Hons) Software Engineering',
    copy: 'African Leadership University, Kigali · Expected May 2028 · Second Upper standing. 320 of 480 credits completed or in progress across software engineering, mobile development, web infrastructure, Linux, Python, and databases.',
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

const foundationCourses = [
  {
    number: '01',
    title: 'Learning Processes',
    term: 'Year 1 · Trimester 1 · 20 credits',
    summary:
      'Developed deliberate approaches to curiosity, self-directed learning, research, source evaluation, and breaking ambitious goals into manageable steps.',
    practice:
      'I use specification-first research and incremental milestones to learn unfamiliar systems such as service workers, IndexedDB, Docker networking, and asynchronous API lifecycles.',
  },
  {
    number: '02',
    title: 'Reflective Thinking',
    term: 'Year 1 · Trimester 1 · 20 credits',
    summary:
      'Built the habit of examining decisions, behavior, and outcomes so that experience becomes a repeatable source of better judgment.',
    practice:
      'That shows up in blameless root-cause analysis, architectural decision records, and code reviews that test assumptions and edge cases—not only syntax.',
  },
  {
    number: '03',
    title: 'Self Leadership & Team Dynamics',
    term: 'Year 1 · Trimester 2 · 20 credits',
    summary:
      'Explored self-awareness, empathy, feedback, collaboration, conflict management, proactivity, ethics, and the discipline of leading oneself before leading others.',
    practice:
      'I bring that into transparent Git workflows, constructive peer feedback, shared documentation, and calm ownership when a migration, environment, or deployment fails.',
  },
  {
    number: '04',
    title: 'Responsible Enterprise',
    term: 'Year 1 · Trimester 3 · 20 credits',
    summary:
      'Connected entrepreneurship with design thinking, systems thinking, and an ethical responsibility to consider equity, environmental cost, and long-term consequences.',
    practice:
      'It shaped RECYX as an auditable circular-economy ledger and Asala Hub as a resource-conscious product designed around bandwidth, battery life, and affordable access.',
  },
  {
    number: '05',
    title: 'Communicating for Impact',
    term: 'Year 2 · Trimester 1 · 20 credits',
    summary:
      'Strengthened critical thinking and the ability to organize, write, present, and adapt complex ideas for academic, professional, and public audiences.',
    practice:
      'I apply it through precise API contracts, useful READMEs, architectural documentation, and explanations that connect technical trade-offs to product and business outcomes.',
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
            <h1>I engineer for resilience.</h1>
          </div>
          <div className="about-intro">
            <p>
              I&apos;m a systems-focused Software Engineering student building
              reliable APIs, relational data platforms, and AI-enabled products
              with Python, TypeScript, PostgreSQL, and Docker.
            </p>
            <p>
              Raised in Sudan and based in Rwanda, I design for the conditions
              people actually face: unstable connectivity, costly bandwidth, and
              workflows where data integrity cannot be optional. I&apos;m fluent
              in English and Arabic.
            </p>
          </div>
        </section>

        <section className="about-facts shell" aria-label="Profile details">
          <div>
            <span>Based in</span>
            <strong>Kigali, Rwanda</strong>
          </div>
          <div>
            <span>Current level</span>
            <strong>Year 2 · Trimester 6</strong>
          </div>
          <div>
            <span>Academic progress</span>
            <strong>320 / 480 credits</strong>
          </div>
        </section>

        <section
          className="foundation-courses shell"
          aria-labelledby="foundation-title"
        >
          <header className="foundation-heading">
            <p className="eyebrow">ALU foundation courses · 100 credits</p>
            <h2 id="foundation-title">How I learn, lead, and build.</h2>
            <p>
              These courses developed the human and systems-thinking practices
              behind my technical work. Each one has a direct expression in how
              I research, make decisions, collaborate, and communicate.
            </p>
          </header>

          <div className="foundation-list">
            {foundationCourses.map((course) => (
              <article key={course.number}>
                <span className="foundation-number">{course.number}</span>
                <div className="foundation-name">
                  <p>{course.term}</p>
                  <h3>{course.title}</h3>
                </div>
                <p>{course.summary}</p>
                <p className="foundation-practice">
                  <strong>In practice</strong>
                  {course.practice}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="principles shell"
          aria-labelledby="experience-title"
        >
          <header>
            <p className="eyebrow">Experience &amp; education</p>
            <h2 id="experience-title">Practice, grounded in purpose.</h2>
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

        <section
          className="capabilities shell"
          aria-labelledby="capabilities-title"
        >
          <p className="eyebrow">Technical toolkit</p>
          <div>
            <h2 id="capabilities-title">
              Python, TypeScript, FastAPI, PostgreSQL, React, and Docker.
            </h2>
            <p>
              I also work with Express.js, Node.js, Prisma, SQLAlchemy,
              Supabase, Dexie.js, service workers, Linux, Nginx, HAProxy,
              systemd, GitHub Actions, pytest, and Jest. My focus is the
              boundary between reliable backend systems and useful product
              experiences.
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
