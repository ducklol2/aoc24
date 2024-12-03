import { log, readDay } from './util.mjs';

const reports = readDay(2, l => l.split(' ').map(n => Number(n)));
// log('first report', reports[0]);

let numSafe = 0;
reports.forEach((r, i) => {
  // log(i, 'safe?', safe(r), r);
  if (safe(r)) numSafe++;
});

log('part 1:', numSafe);

// log(safe(reports[983]), reports[983]);

function safe(r) {
  const ascending = r[1] > r[0];
  for (let i = 1; i < r.length; i++) {
    const diff = r[i] - r[i - 1];
    if (diff == 0) return false;
    if (ascending && diff < 0) return false;
    if (!ascending && diff > 0) return false;
    if (Math.abs(diff) > 3) return false;
  }

  return true;
}

// part 2
let numSafe2 = 0;
reports.forEach((r, i) => {
  if (safe(r)) { numSafe2++; return; }

  for (let j = 0; j < r.length; j++) {
    if (safe(r.toSpliced(j, 1))) { numSafe2++; return; }
  }
});

log('part 2:', numSafe2);