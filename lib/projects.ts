export type ProjectVisualVariant = 'recyx' | 'momentum' | 'elevanda' | 'asala';

export interface Project {
  title: string;
  slug: string;
  year: string;
  role: string;
  summary: string;
  outcome: string;
  kind: string;
  tags: string[];
  heroImage: string;
  featured: boolean;
  visual: ProjectVisualVariant;
  content: string;
}

const projectSources = import.meta.glob<string>('../content/projects/*.mdx', {
  eager: true,
  import: 'default',
  query: '?raw',
});

type Frontmatter = Record<string, string | boolean | string[]>;

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error('Project content is missing frontmatter.');
  }

  const data: Frontmatter = {};
  let activeList: string | null = null;

  for (const line of match[1].split('\n')) {
    if (line.startsWith('  - ') && activeList) {
      (data[activeList] as string[]).push(line.slice(4).trim());
      continue;
    }

    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();

    if (!rawValue) {
      data[key] = [];
      activeList = key;
    } else {
      data[key] =
        rawValue === 'true' ? true : rawValue === 'false' ? false : rawValue;
      activeList = null;
    }
  }

  return { data, content: match[2] };
}

export function getProjectSlugs() {
  return Object.keys(projectSources).map((file) =>
    file.replace('../content/projects/', '').replace(/\.mdx$/, ''),
  );
}

export function getProjectBySlug(slug: string): Project {
  const source = projectSources[`../content/projects/${slug}.mdx`];

  if (!source) {
    throw new Error(`Unknown project slug: ${slug}`);
  }

  const { data, content } = parseFrontmatter(source);

  return {
    title: String(data.title),
    slug,
    year: String(data.year),
    role: String(data.role),
    summary: String(data.summary),
    outcome: String(data.outcome),
    kind: String(data.kind),
    tags: Array.isArray(data.tags) ? data.tags : [],
    heroImage: String(data.heroImage ?? ''),
    featured: Boolean(data.featured),
    visual: String(data.visual) as ProjectVisualVariant,
    content,
  };
}

export function getAllProjects() {
  return getProjectSlugs()
    .map(getProjectBySlug)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}
