import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProjectVisual } from '@/components/project-visual';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <p className="eyebrow">
                Backend &amp; full-stack systems engineer
              </p>
              <span className="availability">
                <span aria-hidden="true" /> Kigali, Rwanda
              </span>
            </div>

            <h1 id="hero-title">
              Resilient systems.
              <br />
              <span>Built for real constraints.</span>
            </h1>

            <p className="hero-intro">
              I&apos;m Nawaf Ahmed, a Software Engineering student at African
              Leadership University. I build reliable APIs, transactional data
              systems, and AI-enabled products for environments where
              connectivity, correctness, and efficiency matter.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="action-link action-link-primary" href="#work">
                See selected work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="action-link action-link-secondary"
                href="mailto:nwafawad49@gmail.com"
              >
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <dl className="proof-strip" aria-label="Engineering strengths">
              <div>
                <dt>01</dt>
                <dd>Resilient APIs</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>Transactional data</dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>Offline-first UX</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-art hero-system">
            <div
              className="system-window"
              aria-label="Full-stack application architecture"
            >
              <div className="system-window-bar">
                <span />
                <span />
                <span />
                <strong>FULL-STACK / 2026</strong>
              </div>
              <div className="system-stack">
                <div>
                  <small>CLIENT</small>
                  <strong>React / Next.js</strong>
                  <span>Responsive and offline-capable</span>
                </div>
                <i aria-hidden="true">↓</i>
                <div>
                  <small>API</small>
                  <strong>FastAPI</strong>
                  <span>Typed, asynchronous services</span>
                </div>
                <i aria-hidden="true">↓</i>
                <div>
                  <small>DATA</small>
                  <strong>PostgreSQL</strong>
                  <span>Integrity and concurrency</span>
                </div>
              </div>
              <p>
                Dockerized workflows · Explicit failure modes · Auditable
                decisions
              </p>
            </div>
            <figcaption>
              <span>Client to infrastructure</span>
              <span>Designed for resilience</span>
            </figcaption>
          </figure>
        </section>

        <section
          className="work-section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <header className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Products and systems I&apos;ve built.</h2>
            <p>
              Three case studies in offline learning, personal learning insights,
              and a circular-economy marketplace—with source code and engineering
              decisions behind each one.
            </p>
          </header>

          <div className="project-list">
            {projects.map((project, index) => (
              <Link
                className="project-row"
                href={`/work/${project.slug}`}
                key={project.slug}
              >
                <span className="project-number">0{index + 1}</span>
                <div className="project-main">
                  <p className="project-kicker">
                    {project.kind} · {project.year}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <ul aria-label="Disciplines">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <ProjectVisual variant={project.visual} compact />
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="about-bridge shell"
          aria-labelledby="approach-title"
        >
          <p className="eyebrow">How I work</p>
          <div>
            <h2 id="approach-title">Reliability is a product decision.</h2>
            <div className="bridge-copy">
              <p>
                My mission is to build fault-tolerant digital systems for
                resource-constrained environments—treating network instability,
                concurrency, and data cost as design inputs rather than edge
                cases.
              </p>
              <Link className="text-link" href="/about">
                Experience, education &amp; skills{' '}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="contact-panel shell"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 id="contact-title">Building something useful?</h2>
          </div>
          <p>
            I&apos;m interested in backend, platform, and full-stack teams that
            care about clear architecture, dependable data, and useful software.
          </p>
          <div className="contact-actions">
            <a
              className="action-link action-link-light"
              href="mailto:nwafawad49@gmail.com"
            >
              Email Nawaf <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="resume-link" href="/resume.pdf" download>
              Résumé PDF <Download aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
