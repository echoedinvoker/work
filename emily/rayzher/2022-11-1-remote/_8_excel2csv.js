const fs = require('fs');
const input = require('./_8_input');

fs.writeFileSync('main.json', JSON.stringify(input));
// api.write(
//   'main.json',
//   JSON.stringify(input.filter((cur) => cur['請購單號']?.startsWith('RP12-')))
// );
