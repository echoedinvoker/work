const fs = require('fs');

const original = JSON.parse(fs.readFileSync('./original.json'));

const reqSeries = fs.readFileSync('./row-請購單號.txt', 'utf-8'); // this is id
const member = fs.readFileSync('./row-採購人員.txt', 'utf8');
const cost = fs.readFileSync('./row-未稅單價.txt', 'utf-8');
const date = fs.readFileSync('./row-原始到廠日期.txt', 'utf-8');

const validation = (con, note) => {
  if (con) {
    original.map((cur) => {
      if (cur.請購單號 === reqSeries) {
        cur.check = note;
        return cur;
      }
      return cur;
    });
    return true;
  }
};

validation(!reqSeries.startsWith('RP12-'), '開頭非 RP12-') ||
  validation(reqSeries.replace('RP12-', '').length !== 9, '編碼長度錯誤') ||
  validation(!/^[A-Z()]$/.test(member.at(0)), '採購人員編號開頭非大寫字母') ||
  validation(
    member.slice(1).split('(')[0].length !== 4,
    '採購人員編號長度錯誤'
  ) ||
  validation(
    !/^[0-9()]*$/.test(member.slice(1).split('(')[0]),
    '採購人員編號錯誤'
  ) ||
  validation(!+cost, '未稅單價錯誤') ||
  validation(+cost > 10000, '為稅單價過高') ||
  validation(
    date.length !== 6 ||
      !/[0-9()]*/.test(date) ||
      +date.slice(2, 4) > 12 ||
      +date.slice(4) > 31,
    '日期錯誤'
  ) ||
  fs.writeFileSync('pass.txt', 'true');
