const fs = require('fs');

fs.writeFileSync(
  'inputPath.txt',
  `${fs.readFileSync('inputFolder.txt')}\\${fs.readFileSync(
    'inputFileName.txt'
  )}`
);
// write(
//   'inputPath.txt',
//   `${read('inputFolder.txt')}\\${read('inputFileName.txt')}`
// );
