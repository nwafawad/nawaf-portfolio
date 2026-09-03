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

function label(value, x, y, fill = colors.soft) {
  text(value.toUpperCase(), x, y, 7, { font: 'F2', fill });
}

rect(0, 0, pageWidth, pageHeight, colors.paper);

const margin = 42;
const sidebar = 154;
const contentX = margin + sidebar + 34;
const contentWidth = pageWidth - contentX - margin;

rect(margin, 640, sidebar, 160, colors.ink);
text('NAWAF', margin + 17, 750, 31, { font: 'F2', fill: colors.light });
text('AHMED', margin + 17, 714, 31, { font: 'F2', fill: colors.light });
rect(margin + 17, 676, 70, 7, colors.red);
text('PRODUCT DESIGNER', margin + 17, 655, 8, { font: 'F2', fill: colors.light });

label('Contact', margin, 600);
text('n.ahmed@alustudent.com', margin, 578, 9, { fill: colors.ink });

label('Focus', margin, 535);
const focus = ['Product strategy', 'Interaction design', 'Design systems', 'Prototyping'];
focus.forEach((item, index) => {
  const y = 510 - index * 21;
  rect(margin, y + 2, 4, 4, colors.red);
  text(item, margin + 12, y, 9, { fill: colors.ink });
});

label('Approach', margin, 388);
text('Systems-minded.', margin, 364, 9, { font: 'F2', fill: colors.ink });
text('Evidence-led.', margin, 348, 9, { font: 'F2', fill: colors.ink });
text('Built to ship.', margin, 332, 9, { font: 'F2', fill: colors.ink });

label('Profile', contentX, 781);
text('Complex products.', contentX, 744, 22, { font: 'F2', fill: colors.ink });
text('Clear decisions.', contentX, 717, 22, { font: 'F2', fill: colors.red });
text('I shape digital products around the decisions people', contentX, 685, 10, { fill: colors.ink });
text('actually need to make, then carry the details through', contentX, 670, 10, { fill: colors.ink });
text('to a coherent, shippable system.', contentX, 655, 10, { fill: colors.ink });

rule(contentX, 620, pageWidth - margin, 620);
label('Selected concept studies', contentX, 590);

const projects = [
  {
    number: '01',
    title: 'Relay',
    y: 535,
    color: colors.blue,
    tags: 'WORKFLOW DESIGN / SYSTEMS THINKING',
    lines: ['Turns scattered operational handoffs into one', 'calm, accountable workflow.'],
  },
  {
    number: '02',
    title: 'Ledger',
    y: 421,
    color: colors.red,
    tags: 'INFORMATION ARCHITECTURE / B2B PRODUCT',
    lines: ['Makes dense review queues legible before a user', 'opens a single record.'],
  },
  {
    number: '03',
    title: 'Wayfinder',
    y: 307,
    color: colors.blue,
    tags: 'SERVICE DESIGN / INCLUSIVE DESIGN',
    lines: ['Compares routes by confidence and effort, not', 'only arrival time.'],
  },
];

projects.forEach((project) => {
  rect(contentX, project.y, 30, 30, project.color);
  text(project.number, contentX + 9, project.y + 11, 8, { font: 'F2', fill: colors.light });
  text(project.title, contentX + 44, project.y + 16, 15, { font: 'F2', fill: colors.ink });
  label(project.tags, contentX + 44, project.y - 1, colors.soft);
  text(project.lines[0], contentX + 44, project.y - 24, 9, { fill: colors.ink });
  text(project.lines[1], contentX + 44, project.y - 38, 9, { fill: colors.ink });
});

rect(contentX, 71, contentWidth, 78, colors.blue);
label('Portfolio resume / content note', contentX + 16, 125, colors.light);
text('Replace this concept profile with verified experience,', contentX + 16, 104, 8, { fill: colors.light });
text('education, and dates before external use.', contentX + 16, 91, 8, { fill: colors.light });

label('Nawaf Ahmed / Portfolio overview', margin, 28);
text('2026', pageWidth - margin - 18, 28, 7, { font: 'F2', fill: colors.soft });

const stream = commands.join('\n');
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`,
  '<< /Title (Nawaf Ahmed - Product Designer) /Author (Nawaf Ahmed) /Subject (Portfolio resume placeholder) >>',
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
