import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
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
  if (!getProjectSlugs().includes(slug)) notFound();
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
      <figcaption>Schematic · {caption}</figcaption>
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

function renderInline(text: string) {
  return text
    .split(/(`[^`]+`)/g)
    .map((part, index) =>
      part.startsWith('`') && part.endsWith('`') ? (
        <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>
      ) : (
        part
      ),
    );
}

function ProjectContent({ source }: { source: string }) {
  // Content files format this component across multiple lines for readability.
  // Normalize only the supported artifact syntax; do not evaluate arbitrary MDX.
  const lines = source
    .replace(
      /<ProjectArtifact\s+variant="(recyx|momentum|asala)"\s+caption="([^"\r\n]+)"\s*\/>/g,
      '<ProjectArtifact variant="$1" caption="$2" />',
    )
    .trim()
    .split('\n');
  const blocks: React.ReactNode[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(<h2 key={`heading-${index}`}>{line.slice(3)}</h2>);
      index += 1;
      continue;
    }

    const artifactMatch = line.match(
      /^<ProjectArtifact variant="([^"]+)" caption="([^"]+)" \/>$/,
    );

    if (artifactMatch) {
      blocks.push(
        <ProjectArtifact
          key={`artifact-${index}`}
          variant={artifactMatch[1] as ProjectVisualVariant}
          caption={artifactMatch[2]}
        />,
      );
      index += 1;
      continue;
    }

    const decisionMatch = line.match(/^<Decision title="([^"]+)">$/);

    if (decisionMatch) {
      const body: string[] = [];
      index += 1;

      while (index < lines.length && lines[index].trim() !== '</Decision>') {
        if (lines[index].trim()) body.push(lines[index].trim());
        index += 1;
      }

      blocks.push(
        <Decision key={`decision-${index}`} title={decisionMatch[1]}>
          <p>{renderInline(body.join(' '))}</p>
        </Decision>,
      );
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;

    while (index < lines.length && lines[index].trim()) {
      const nextLine = lines[index].trim();
      if (
        nextLine.startsWith('## ') ||
        nextLine.startsWith('<ProjectArtifact') ||
        nextLine.startsWith('<Decision')
      ) {
        break;
      }
      paragraph.push(nextLine);
      index += 1;
    }

    blocks.push(
      <p key={`paragraph-${index}`}>{renderInline(paragraph.join(' '))}</p>,
    );
  }

  return blocks;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) notFound();
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
          {project.repositoryUrls.length > 0 && (
            <nav className="case-sources" aria-label={`${project.title} source code`}>
              {project.repositoryUrls.map((url) => (
                <a
                  className="text-link"
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source on GitHub${project.repositoryUrls.length > 1 ? `: ${url.split('/').pop()}` : ''} (opens in a new tab)`}
                >
                  {project.repositoryUrls.length === 1
                    ? 'View source on GitHub'
                    : url.split('/').pop()}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </nav>
          )}
        </section>

        <figure
          className="case-visual-shell shell"
        >
          <ProjectVisual variant={project.visual} />
          <figcaption>{project.title} · Workflow schematic, not a product screenshot.</figcaption>
        </figure>

        <article className="case-body shell">
          <ProjectContent source={project.content} />
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
