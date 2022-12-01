let emilyResult = require('./emilyResult');
const original = require('./original');

original.forEach((cur) => {
  if (!emilyResult.find((ecur) => ecur.請購單號 === cur.請購單號)) {
    emilyResult = [...emilyResult, cur];
  }
});

console.log(emilyResult);
