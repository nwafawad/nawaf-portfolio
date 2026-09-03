#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const output = process.argv[2] ?? 'output/pdf/nawaf-ahmed-resume.pdf';
const pageWidth = 595;
const pageHeight = 842;

const colors = {
  paper: [0.949, 0.933, 0.89],
  light: [0.98, 0.969, 0.933],
  ink: [0.09, 0.09, 0.078],
  soft: [0.384, 0.373, 0.341],
  red: [0.839, 0.251, 0.153],
  blue: [0.082, 0.302, 0.639],
  line: [0.722, 0.694, 0.643],
};

const commands = [];

function color([r, g, b], stroke = false) {
  commands.push(`${r} ${g} ${b} ${stroke ? 'RG' : 'rg'}`);
}

function rect(x, y, width, height, fill) {
  color(fill);
  commands.push(`${x} ${y} ${width} ${height} re f`);
}

function rule(x1, y1, x2, y2, stroke = colors.line, width = 0.7) {
  color(stroke, true);
  commands.push(`${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
}

function escapePdf(value) {
  return value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function text(value, x, y, size, options = {}) {
  const { font = 'F1', fill = colors.ink } = options;
  color(fill);
  commands.push(`BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdf(value)}) Tj ET`);
}

function lines(values, x, y, size, leading, options = {}) {
  values.forEach((value, index) => text(value, x, y - index * leading, size, options));
}

function label(value, x, y, fill = colors.soft) {
  text(value.toUpperCase(), x, y, 7, { font: 'F2', fill });
}

function bullet(values, x, y, size = 7.7, leading = 11) {
  rect(x, y + 2.5, 3, 3, colors.red);
  lines(values, x + 10, y, size, leading, { fill: colors.ink });
}

rect(0, 0, pageWidth, pageHeight, colors.paper);

const margin = 38;
const sidebarWidth = 164;
const contentX = margin + sidebarWidth + 30;
const contentRight = pageWidth - margin;

rect(margin, 48, sidebarWidth, 752, colors.ink);
text('NAWAF', margin + 16, 757, 29, { font: 'F2', fill: colors.light });
text('AHMED', margin + 16, 724, 29, { font: 'F2', fill: colors.light });
rect(margin + 16, 696, 70, 6, colors.red);
text('SOFTWARE ENGINEERING', margin + 16, 676, 7.4, { font: 'F2', fill: colors.light });
text('STUDENT', margin + 16, 664, 7.4, { font: 'F2', fill: colors.light });

label('Contact', margin + 16, 622, colors.light);
lines(
  ['Kigali, Rwanda', '+250 795 335 300', 'nwafawad49@gmail.com'],
  margin + 16,
  598,
  8.2,
  17,
  { fill: colors.light },
);

label('Technical skills', margin + 16, 526, colors.light);
lines(
  [
    'Python / FastAPI',
    'React.js / Node.js',
    'Express.js',
    'PostgreSQL / MySQL',
    'SQLAlchemy / Prisma',
    'Docker / Git',
    'Linux / Shell scripting',
    'Computer networks',
  ],
  margin + 16,
  501,
  8.2,
  17,
  { fill: colors.light },
);

label('Languages', margin + 16, 338, colors.light);
lines(['English - Fluent', 'Arabic - Fluent'], margin + 16, 314, 8.2, 17, {
  fill: colors.light,
});

label('Tools', margin + 16, 253, colors.light);
lines(['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'], margin + 16, 229, 8.2, 17, {
  fill: colors.light,
});

label('Profile', contentX, 786);
text('Full-stack systems.', contentX, 758, 19, { font: 'F2' });
text('Built end to end.', contentX, 735, 19, { font: 'F2', fill: colors.red });
lines(
  [
    'Software engineering student with hands-on experience building',
    'full-stack, data-driven applications. Comfortable designing',
    'databases, building APIs, and working across the stack in',
    'collaborative, fast-paced environments.',
  ],
  contentX,
  708,
  8.4,
  12,
);

rule(contentX, 650, contentRight, 650);
label('Education', contentX, 633);
text('African Leadership University', contentX, 612, 10, { font: 'F2' });
text('Bachelor of Software Engineering', contentX, 596, 8.6);
text('Expected May 2028  |  Academic standing: Second Upper', contentX, 582, 7.8, {
  fill: colors.soft,
});
lines(
  [
    'Coursework: Enterprise Web Development, Web Infrastructure,',
    'Linux and IT Tools, Python Programming and Databases,',
    'Foundations Project, and Skills Immersion I.',
  ],
  contentX,
  562,
  7.4,
  10,
  { fill: colors.soft },
);

rule(contentX, 520, contentRight, 520);
label('Work experience', contentX, 503);
text('Software Development Intern', contentX, 482, 10, { font: 'F2' });
text('Elevanda Ventures  |  Kigali  |  Apr 2026 - Present', contentX, 467, 7.8, {
  fill: colors.blue,
  font: 'F2',
});
bullet(
  ['Designed relational database schemas and engineered secure', 'REST APIs for accurate, consistent structured records.'],
  contentX,
  446,
);
bullet(
  ['Used Docker to maintain consistent, reliable environments', 'across projects.'],
  contentX,
  416,
);
bullet(
  ['Collaborated across teams with Git, organized documentation,', 'and clean, auditable repositories.'],
  contentX,
  386,
);

rule(contentX, 350, contentRight, 350);
label('Projects', contentX, 333);
text('RECYX', contentX, 311, 10, { font: 'F2' });
text('Digital Transaction & Circular Economy Platform  |  Mar 2026', contentX + 44, 312, 7.3, {
  fill: colors.blue,
  font: 'F2',
});
lines(
  [
    'Full-stack platform built with FastAPI, React.js, PostgreSQL,',
    'SQLAlchemy ORM, pytest, and Jest.',
  ],
  contentX,
  294,
  7.7,
  11,
);

text('Momentum', contentX, 258, 10, { font: 'F2' });
text('AI-Driven Mission Workspace  |  Apr 2026', contentX + 67, 259, 7.3, {
  fill: colors.blue,
  font: 'F2',
});
lines(
  ['AI-driven workspace application built with FastAPI, Python,', 'React.js, and Docker.'],
  contentX,
  241,
  7.7,
  11,
);

rule(contentX, 205, contentRight, 205);
label('Programs & community', contentX, 188);
text('SoCreative Entrepreneurship Program', contentX, 167, 8.8, { font: 'F2' });
lines(
  [
    'Certified graduate, British Council & ALU School of Business',
    'Entrepreneurship and business fundamentals  |  Mar 2025',
  ],
  contentX,
  153,
  7.4,
  10,
  { fill: colors.soft },
);

text('Portive Youth', contentX, 119, 8.8, { font: 'F2' });
lines(
  [
    'Community volunteer, cultural arts hub  |  Port Sudan  |  Jun 2025',
    'Planned and supported public engagement initiatives.',
  ],
  contentX,
  105,
  7.4,
  10,
  { fill: colors.soft },
);

label('Nawaf Ahmed / Resume', margin, 25);
text('2026', contentRight - 18, 25, 7, { font: 'F2', fill: colors.soft });

const stream = commands.join('\n');
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`,
  '<< /Title (Nawaf Ahmed - Software Engineering Resume) /Author (Nawaf Ahmed) /Subject (Software engineering experience, education, projects, and skills) >>',
];

let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, 'latin1'));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 7 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, Buffer.from(pdf, 'latin1'));
