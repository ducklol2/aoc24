import { log, readDay } from './util.mjs';

const list1 = [];
const list2 = [];
const input = readDay(1, line => {
  const r = /(\d+)   (\d+)/.exec(line);
  list1.push(Number(r[1]));
  list2.push(Number(r[2]));
});

list1.sort();
list2.sort();

let sum = 0;
for (let i = 0; i < list1.length; i++) {
  sum += Math.abs(list1[i] - list2[i]);
}

console.log(`part 1: ${sum}`);

let similarity = 0;
for (const num1 of list1) {
  const first = list2.indexOf(num1);
  const last = list2.lastIndexOf(num1);

  // log(num1, first, last);

  if (first >= 0) {
    similarity += num1 * (last - first + 1);
  }
}

console.log(`part 2: ${similarity}`);
