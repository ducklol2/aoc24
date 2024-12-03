import fs from 'node:fs';

export function log(...args) {
  console.log(...args.flatMap(a => [a, '\t']));
}

export function readDay(day, fn) {
  const text = fs.readFileSync(`day${day}.txt`, 'utf8');
  const lines = text.split('\n');
  console.log('Read', lines.length, 'lines');

  return lines.map(l => fn(l));
}