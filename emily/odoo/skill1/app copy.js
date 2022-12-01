const fs = require('fs');

const read = function (file) {
  return fs.readFileSync(file, 'utf-8');
};

const write = function (file, str) {
  return fs.writeFileSync(file, str);
};

const wait = function (s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
};

const emitEvent = function (el, event) {
  el.dispatchEvent(new Event(event, { bubbles: true, cancelable: false }));
};

const index = +read('index.txt');
const indexPlus = index + 1;
const products = JSON.parse(read('row-products.txt'));
const product = products[index];
if (indexPlus < products.length) {
  write('index.txt', indexPlus + '');
  repeat(true, 3000);
}

const sequenceNumber = document.querySelector('input[name="sequence_number"]');
const productId = document.querySelector('div[name="product_id"] input');
const productName = document.querySelector('textarea[name="name"]');
const productQty = document.querySelector('input[name="product_uom_qty"]');
const standardPrice = document.querySelector('input[name="standard_price"]');
const suggestedPrice = document.querySelector('input[name="suggested_price"]');
const discountPrice = document.querySelector('input[name="discount_price"]');
const priceUnit = document.querySelector('input[name="price_unit"]');

const addButton = [
  ...document.querySelectorAll('td.o_field_x2many_list_row_add a'),
].filter((el) => el.textContent.includes('新增產品資料'))[0];

return (async function () {
  sequenceNumber.value = read('index.txt');
  emitEvent(sequenceNumber, 'change');

  productId.value = product['商品'];
  emitEvent(productId, 'click');
  await wait(1);
  [...document.querySelectorAll('a')]
    .filter((el) => el.textContent.includes(product['商品']))[0]
    .click();

  await wait(1);

  const keyElement = new Map([
    ['說明', productName],
    ['數量', productQty],
    ['成本', standardPrice],
    ['牌價', suggestedPrice],
    ['折扣價', discountPrice],
    ['單價', priceUnit],
  ]);

  keyElement.forEach((el, i) => {
    if (product[i]) {
      el.value = product[i];
      emitEvent(el, 'change');
    }
  });

  addButton.click();
})();
