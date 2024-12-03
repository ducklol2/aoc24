import { log, readDay } from "./util.mjs";

const text = readDay(3);
let total = [...text.matchAll(/mul\((?<num1>\d+),(?<num2>\d+)\)/g)].reduce(
  (prev, match) => {
    // log(match.groups);
    return prev + match.groups.num1 * match.groups.num2;
  }, 0
);
log('part 1:', total);