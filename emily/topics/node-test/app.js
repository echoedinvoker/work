const fs = require('fs');

let finish;
try {
  finish = JSON.parse(fs.readFileSync('finish.json'));
} catch (err) {
  finish = [];
}

let main = JSON.parse(fs.readFileSync('main.json'));

// main.forEach((cur) => {
//   if (cur.apmt540) {
//     if (finish.find((fcur) => fcur['請購單號'] === cur['請購單號']))
//       finish = finish.filter((ffcur) => ffcur['請購單號'] !== cur['請購單號']);
//     finish.push(cur);
//   }
// });
let fmain = main.filter((cur) => !cur.apmt540);

main.forEach((cur) => {
  if (!finish.find((fcur) => fcur['請購單號'] === cur['請購單號'])) {
    fmain = [...fmain, cur];
  }
});

console.log('main', fmain);
