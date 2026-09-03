import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProjectVisual } from '@/components/project-visual';
import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlugs,
  type ProjectVisualVariant,
} from '@/lib/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Nawaf Ahmed`,
      description: project.summary,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: `${project.title} — Nawaf Ahmed`,
      description: project.summary,
      images: [],
    },
  };
}

function ProjectArtifact({
  variant,
  caption,
}: {
  variant: ProjectVisualVariant;
  caption: string;
}) {
  return (
    <figure className="case-artifact">
      <ProjectVisual variant={variant} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Decision({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="decision-callout">
      <span>Engineering detail</span>
      <h3>{title}</h3>
      <div>{children}</div>
    </aside>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="case-page">
        <section className="case-hero shell">
          <Link className="back-link" href="/#work">
            <ArrowLeft aria-hidden="true" /> All work
          </Link>
          <div className="case-title-row">
            <div>
              <p className="eyebrow">
                {project.kind} / {project.year}
              </p>
              <h1>{project.title}</h1>
            </div>
            <p className="case-summary">{project.summary}</p>
          </div>

          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.tags.join(', ')}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
        </section>

        <section className="case-visual-shell shell" aria-label={`${project.title} project artifact`}>
          <ProjectVisual variant={project.visual} />
        </section>

        <article className="case-body shell">
          <MDXRemote
            source={project.content}
            components={{ ProjectArtifact, Decision }}
          />
        </article>

        <nav className="next-project shell" aria-label="Next project">
          <span>Next entry</span>
          <Link href={`/work/${nextProject.slug}`}>
            <span>
              {nextProject.title}
              <small>{nextProject.summary}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </nav>

        <section className="case-contact shell">
          <p>Interested in working together?</p>
          <a href="mailto:nwafawad49@gmail.com">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
