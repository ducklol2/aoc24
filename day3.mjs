import { log, readDay } from "./util.mjs";

const text = readDay(3);
let total1 = [...text.matchAll(/mul\((?<num1>\d+),(?<num2>\d+)\)/g)].reduce(
  (prev, match) => {
    // log(match.groups);
    return prev + match.groups.num1 * match.groups.num2;
  }, 0
);
log('part 1:', total1);

// part 2
const instructions = [...text.matchAll(
  /(?<instruction>(mul\((?<num1>\d+),(?<num2>\d+)\)|do\(\)|don't\(\)))/g)]
let enabled = true;
let total2 = 0;
for (const instruction of instructions) {
  switch (instruction.groups.instruction) {
    case 'do()':
      enabled = true;
      break;
    case 'don\'t()':
      enabled = false;
      break;
    default:
      if (enabled) total2 += instruction.groups.num1 * instruction.groups.num2;
  }
}

log('part 2', total2);