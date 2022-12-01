const fs = require('fs');

const read = function (file) {
  return fs.readFileSync(file, 'utf-8');
};

const write = function (file, str) {
  return fs.writeFileSync(file, str);
};

const output = [];

const company = read('row-公司.txt');
const date = read('row-報價日期.txt');
const currency = read('row-幣別.txt');
const contact = read('row-聯絡人.txt');

const order = JSON.parse(read('order.json'));

const result = order
  .filter(
    (el) =>
      el['公司'] === company &&
      el['報價日期'] === date &&
      el['幣別'] === currency &&
      el['聯絡人'] === contact
  )
  .map((el) => ({
    商品: el['商品'],
    說明: el['說明'],
    數量: el['數量'],
    成本: el['成本'],
    牌價: el['牌價'],
    折扣價: el['折扣價'],
    單價: el['單價'],
  }));

result.forEach((el) => {
  output.push(el);
});

write('index.txt', '0');
write('length.txt', result.length + '');

// const wait = function (s) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, s * 1000);
//   });
// };

// const fillTable = async function (el) {
//   [...document.querySelectorAll('a[role="button"]')]
//     .find((l) => l.textContent.includes('新增產品'))
//     .click();
//   await wait(3);
//   const number = document.querySelector('input[name="sequence_number"]');
//   number.value = el['項次'];
//   number.dispatchEvent(
//     new Event('change', { bubbles: true, cancelable: false })
//   );

//   try {
//     [...document.querySelectorAll('a')]
//       .filter((k) => k.textContent.includes(el['商品']))[0]
//       .click();
//   } catch (err) {
//     const product = document.querySelector('div[name="product_id"] input');
//     product.value = el['商品'];
//     product.dispatchEvent(
//       new Event('change', { bubbles: true, cancelable: false })
//     );
//   }
// };

// const loop = async function () {
//   for (const el of result) {
//     await fillTable(el);
//   }
// };

// return loop();
