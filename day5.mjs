import { log, readDay } from './util.mjs';

const rules = [];
const reports = [];
const text = readDay(5, (l) => {
  let pages;
  if ((pages = l.split('|').map(n => Number(n))) && pages.length == 2) {
    rules.push(pages);
  } else if ((pages = l.split(',').map(n => Number(n))) && pages.length >= 3) {
    reports.push(pages);
  }
});

let middleTotal = 0;
let badReports = [];
reportLoop: for (const report of reports) {
    // log('report', report);
  for (const [before, after] of rules) {
    if (
      report.indexOf(before) >= 0 &&
      report.indexOf(after) >= 0 &&
      report.indexOf(before) > report.indexOf(after)
    ) {
    //   log('skipping because', before, after, report.indexOf(before), report.indexOf(after))
        badReports.push(report);
      continue reportLoop;
    }
  }
//   log('middle of', report, 'is', report[Math.floor(report.length / 2)]);
  middleTotal += report[Math.floor(report.length / 2)];
}

log('part 1:', middleTotal);

// part 2
let fixedTotal = 0;
for (const report of badReports) {
for (let i = 0; i < rules.length; i++) {
    
  for (const [before, after] of rules) {
    let i1 = report.indexOf(before);
    let i2 = report.indexOf(after);
    if (
      i1 >= 0 &&
      i2 >= 0 &&
      i1 > i2
    ) {
        report.splice(i1, 1);
        report.splice(i2, 0, before);
    }
  }
}
  log('middle of', report, 'is', report[Math.floor(report.length / 2)]);
  fixedTotal += report[Math.floor(report.length / 2)];
}


log('part 2:', fixedTotal);