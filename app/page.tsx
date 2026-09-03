import Image from 'next/image';
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
              <p className="eyebrow">Product designer</p>
              <span className="availability">
                <span aria-hidden="true" /> Open to the right team
              </span>
            </div>

            <h1 id="hero-title">
              Complex products.
              <br />
              <span>Clear decisions.</span>
            </h1>

            <p className="hero-intro">
              I&apos;m Nawaf Ahmed. I shape digital products around the decisions
              people actually need to make—then carry the details through to a
              shippable system.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="action-link action-link-primary" href="#work">
                See selected work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="action-link action-link-secondary"
                href="mailto:n.ahmed@alustudent.com"
              >
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <dl className="proof-strip" aria-label="Design approach">
              <div>
                <dt>01</dt>
                <dd>Systems-minded</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>Evidence-led</dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>Built to ship</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-art">
            <Image
              src="/identity.png"
              alt="Nawaf portfolio identity: a modular editorial grid suggesting product systems"
              width={1536}
              height={864}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <figcaption>
              <span>Designing the signal</span>
              <span>Removing the noise</span>
            </figcaption>
          </figure>
        </section>

        <section className="work-section shell" id="work" aria-labelledby="work-title">
          <header className="section-heading">
            <p className="eyebrow">Selected work / 2026</p>
            <h2 id="work-title">Three studies in making complexity legible.</h2>
            <p>
              Concept work shown transparently while the final project archive is
              being assembled.
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

        <section className="about-bridge shell" aria-labelledby="approach-title">
          <p className="eyebrow">Point of view</p>
          <div>
            <h2 id="approach-title">
              Good product design is a sequence of well-framed decisions.
            </h2>
            <div className="bridge-copy">
              <p>
                I care about the connective tissue: the states between screens,
                the language inside a workflow, and the system that keeps a good
                idea coherent after launch.
              </p>
              <Link className="text-link" href="/about">
                More about my approach <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="contact-panel shell" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">A useful next step</p>
            <h2 id="contact-title">Have a complex product problem?</h2>
          </div>
          <p>
            I&apos;m interested in product teams that value clear thinking, close
            collaboration, and care in the final mile.
          </p>
          <div className="contact-actions">
            <a className="action-link action-link-light" href="mailto:n.ahmed@alustudent.com">
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
