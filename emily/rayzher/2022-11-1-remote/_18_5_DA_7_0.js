let currentCrop;

// Click UI
currentCrop = await api.screen.waitFor(
  'crop-6b71ab5454b611ad8f0ccd3d13dbcc335c5844bdef82747a563f24dc73fec4ac.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 157, currentCrop.top + 99);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// Q
await api.keyboard.type(api.key.Q);
await api.sleep(200);

// 請購單號
currentCrop = await api.screen.waitFor(
  'crop-9a94a28665b2f98a3615e603fb95659884e2eb0048905bdfd2662c756bc23f2d.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);
await api.pasteText(api.read('row-請購單號.txt'));
await api.sleep(200);

// ScrollRight
currentCrop = await api.screen.waitFor(
  'crop-a4b35fd2d75cd0d8ecb93ce5c798eaf7e40f962500d949b562eaf9e1f2e1b7a0.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 145, currentCrop.top + 9);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);
await api.mouse.scrollDown(3000);
await api.sleep(200);

// 確認否
currentCrop = await api.screen.waitFor(
  'crop-a55dddab124e46b76b05a51ec7a8c7d67c7dc3a0ba30ae435cbb90e9350251a3.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

await api.sleep(1000);

// 已確認
currentCrop = await api.screen.waitFor(
  'crop-316c78b56a07e2bfad390811fae36d04d5248d7d0064f9e8772a8858dec5f07d.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// 狀況碼
currentCrop = await api.screen.waitFor(
  'crop-3b0ddaf718f7922e5c1c2c34f8b38fc3f10481f03a5f776c2d03b0cae3f00242.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

//                                                                                                            drop down list animation, but no sleep

// 已核准
currentCrop = await api.screen.waitFor(
  'crop-ddde9a1e61ba3ed98bfe45503bd55c65103449a5719f9af74c5dfad3107fd2ab.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// 確定
currentCrop = await api.screen.waitFor(
  'crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft(); // Refresh next crop's target, but popup in the same place without any animation
await api.sleep(200);
await api.mouse.move(currentCrop.left - 100, currentCrop.top);
await api.sleep(200); // move out cursor

// 全選
currentCrop = await api.screen.waitFor(
  'crop-e459662b8bf657abcae8bd7b54485addafa7dbd15ea4c0f9b4fba87e68ab2196.png',
  5000,
  { confidence: 0.97 }
);

// 若無全選
// const currentCrop = undefined; // This is for testing
if (!currentCrop) {
  const main = JSON.parse(api.read('main.json'));
  const requestNumber = api.read('row-請購單號.txt');
  const newMain = main.map((cur) => {
    if (cur['請購單號'] === requestNumber) return { ...cur, apmp200: '無資料' };
    return cur;
  });
  api.write('main.json', JSON.stringify(newMain));
  return; // Exit this module
}

// 有全選
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// 拋轉採購單
currentCrop = await api.screen.waitFor(
  'crop-0a379c72b0686089ed6174a5f952b2ad4e072aed3854692d6902fedf9db9634f.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// 採購單別
currentCrop = await api.screen.waitFor(
  'crop-cc563780d0216baab687345dec0ed01f388879853da43afa188adccc2066ffcd.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 141, currentCrop.top + 11);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);
await api.ctrlA();
await api.sleep(200);
await api.keyboard.backspace();
await api.sleep(200);
await api.pasteText('RP22-');

// 採購員
currentCrop = await api.screen.waitFor(
  'crop-7fff0c668b2ec5296a988feb8252e044dca8a2ddb145ce42f7e92b7456e8dea9.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 141, currentCrop.top + 11);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);
await api.ctrlA();
await api.sleep(200);
await api.keyboard.backspace();
await api.sleep(200);
await api.pasteText(api.read('row-採購人員.txt').split('(')[0]);
await api.sleep(200);

// 確定
currentCrop = await api.screen.waitFor(
  'crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft(); // Refresh next crop's target but not any anmination and repeat
await api.sleep(200);

await api.sleep(2000); // Waiting UI expand (pass this??)

// Click Center of Warning UI
currentCrop = await api.screen.waitFor(
  'crop-5dc3c24cc808884539a10524fcfa422f4536133b33bac45d8a995e6befbbd804.png',
  5000,
  { confidence: 0.97, left: 317, top: 187, width: 782, height: 414 }
); //
await api.mouse.move(currentCrop.left + 111, currentCrop.top + 112);
await api.sleep(200);
await api.mouse.clickRight(); // Refresh next crop's target but only fade in on same place
await api.sleep(200);

// Copy Field
currentCrop = await api.screen.waitFor(
  'crop-206b0cbed67d670e05ec959174611c66714ba9c83eb84320321a9b6a82e785e0.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// Filter single number
// const number = 'RP22-220700376' // This is for testing
const number = api.clipboard.readText().split('~')[0];
const main = JSON.parse(api.read('main.json'));
const requestNumber = api.read('row-請購單號.txt');
const newMain = main.map((cur) => {
  if (cur['請購單號'] === requestNumber) return { ...cur, apmp200: number };
  return cur;
});
api.write('main.json', JSON.stringify(newMain));

// 確定
currentCrop = await api.screen.waitFor(
  'crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(100);
