import { log, readDay } from './util.mjs';

let found = 0;
let chars = [];
// const text = readDay('day4mini.txt', (l) => {
const text = readDay(4, (l) => {
  if (l.length == 0) return;

  // horizontal
  let horizFound = [...l.matchAll(/XMAS/g)].length;
  // Search backwards separately, regex can't do overlapping
  horizFound += [...l.matchAll(/SAMX/g)].length;
  // log('line:', l, 'found', horizFound);
  found += horizFound;
  chars.push(l.trim().split(''));
});

log('horizontal matches:', found);

log(
  'dimensions',
  'lines:',
  chars.length,
  'chars:',
  chars[chars.length - 1].length
);

for (let x = 0; x < chars[0].length; x++) {
  for (let y = 0; y < chars.length; y++) {
    for (let word of ['XMAS'.split(''), 'SAMX'.split('')]) {
      dirLoop: for (let dir of [
        [0, 1], // down
        [1, 1], // down right
        [1, -1], // down left
      ]) {
        for (let k = 0; k < word.length; k++) {
          const xk = x + dir[0] * k;
          const yk = y + dir[1] * k;
          if (xk < 0 || xk >= chars[0].length || yk < 0 || yk >= chars.length) continue dirLoop;
          try {
            if (chars[yk][xk] != word[k]) continue dirLoop;
          } catch (err) {
            throw Error('out of bounds? ' + xk + ', ' + yk + ' @ ' + k);
          }
        }
        // log('matched:', word.join(''), x, y, dir);
        found++;
      }
    }
  }
}

log('part 1:', found);
