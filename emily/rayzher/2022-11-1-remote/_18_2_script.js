// const main = JSON.parse(read('main.json'));

// const reqSeries = read('row-請購單號.txt'); // this is id
// const member = read('row-採購人員.txt');

// const validation = (con, note) => {
//   if (con) {
//     main.map((cur) => {
//       if (cur['請購單號'] === reqSeries) {
//         cur.apmp200 = note;
//         return cur;
//       }
//       return cur;
//     });
//     return true;
//   }
// };

// validation(!reqSeries.startsWith('RP12-'), '開頭非 RP12-') ||
//   validation(reqSeries.replace('RP12-', '').length !== 9, '編碼長度錯誤') ||
//   validation(!/^[A-Z()]$/.test(member.at(0)), '採購人員編號開頭非大寫字母') ||
//   validation(
//     member.slice(1).split('(')[0].length !== 4,
//     '採購人員編號長度錯誤'
//   ) ||
//   validation(
//     !/^[0-9()]*$/.test(member.slice(1).split('(')[0]),
//     '採購人員編號錯誤'
//   ) ||
//   write('apmp200Pass.txt', 'true');
// write('main.json', JSON.stringify(main));
