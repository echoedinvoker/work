const wait = function (s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
};

const emitEvent = function (element, event) {
  element.dispatchEvent(new Event(event, { bubbles: true, cancelable: false }));
};

const emitKeyboardEvent = function (element, event, key) {
  element.dispatchEvent(new KeyboardEvent(event, { key: key }));
};

return (async function () {
  let product = document.querySelector('div[name="product_id"] input');
  product.value = 'Intel';
  emitKeyboardEvent(product, 'keydown');
  wait(1);
})();
