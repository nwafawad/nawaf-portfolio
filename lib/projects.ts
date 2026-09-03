import fs from 'node:fs';
import path from 'node:path';

export type ProjectVisualVariant = 'relay' | 'ledger' | 'wayfinder';

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

const projectsDirectory = path.join(process.cwd(), 'content/projects');

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
      data[key] = rawValue === 'true' ? true : rawValue === 'false' ? false : rawValue;
      activeList = null;
    }
  }

  return { data, content: match[2] };
}

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): Project {
  const source = fs.readFileSync(path.join(projectsDirectory, `${slug}.mdx`), 'utf8');
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
