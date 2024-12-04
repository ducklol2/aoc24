import fs from 'node:fs';

export function log(...args) {
  console.log(...args.flatMap(a => [a, '\t']));
}

export function readDay(dayOrFile, fn) {
  const text = fs.readFileSync(typeof dayOrFile === 'number' ? `day${dayOrFile}.txt` : dayOrFile, 'utf8');
  if (!fn) return text;

  const lines = text.split('\n');
  console.log('Read', lines.length, 'lines');

  return lines.map(l => fn(l));
}