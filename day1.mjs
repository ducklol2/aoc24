import fs from 'node:fs';

const text = fs.readFileSync('day1.txt', 'utf8');
const lines = text.split('\n');
console.log(lines.length);

const list1 = [];
const list2 = [];

for (const line of lines) {
  const r = /(\d+)   (\d+)/.exec(line);
  list1.push(Number(r[1]));
  list2.push(Number(r[2]));
}

list1.sort();
list2.sort();

let sum = 0;
for (let i = 0; i < list1.length; i++) {
  sum += Math.abs(list1[i] - list2[i]);
}

console.log(sum);