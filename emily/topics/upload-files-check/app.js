const fs = require('fs');

const settings = JSON.parse(fs.readFileSync('settings.json'));

['input', 'output', 'test'].forEach((cur) => {
  if (!settings[cur]) throw new Error(`lack of ${cur}`);
  fs.writeFileSync(`${cur}.txt`, settings[cur]);
});
