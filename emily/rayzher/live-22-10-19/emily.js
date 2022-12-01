let currentCrop;

// Click UI
currentCrop = await api.screen.waitFor(
  "crop-33e0afdcecb77618a0a629637ef61212aeb1306bb9645b9bedec7da671cef209.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 100, currentCrop.top + 100);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// Open apmp200
await api.keyboard.type(api.key.LeftControl, api.key.G);
await api.sleep(100);
await api.sleep(100);
await api.keyboard.type("apmp200");
await api.sleep(100);
await api.sleep(100);
await api.keyboard.enter();
await api.sleep(100);
await api.sleep(100);

// 請購單號
currentCrop = await api.screen.waitFor(
  "crop-2cc6d2f2daec258e5fb204d66a094f4a11fdacc6054cf558c5c1bc27592a5f3a.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.pasteText(api.read("row-請購單號.txt"));
await api.sleep(100);
await api.sleep(100);

// ScrollRight
currentCrop = await api.screen.waitFor(
  "crop-8ad82e14611e257096e8cdb6eff4cc0ce83bec3ab05b222946d297bfa583a663.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 145, currentCrop.top + 9);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.mouse.scrollDown(3000);
await api.sleep(100);
await api.sleep(100);

// 確認否
currentCrop = await api.screen.waitFor(
  "crop-a55dddab124e46b76b05a51ec7a8c7d67c7dc3a0ba30ae435cbb90e9350251a3.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(1000);

// 已確認
currentCrop = await api.screen.waitFor(
  "crop-bbfc70de113732d3c80da4cb4fc2d6c39a1c326ec49eecc8a213a5066ff6c197.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 狀況碼
currentCrop = await api.screen.waitFor(
  "crop-3b0ddaf718f7922e5c1c2c34f8b38fc3f10481f03a5f776c2d03b0cae3f00242.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 48, currentCrop.top + 30);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 已核准
currentCrop = await api.screen.waitFor(
  "crop-9c8a09d802865e7fcdbab1c0708959a8e3824a2c9fc4d735dbe968c45a8f5b51.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 確定
currentCrop = await api.screen.waitFor(
  "crop-18c15ded3dd38b00aefcc3f5f59a5b9a10441b5961362eff23e61aabdddc0848.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.mouse.move(currentCrop.left - 100, currentCrop.top);
await api.sleep(100);
await api.sleep(100); // move out cursor

// 全選
currentCrop = await api.screen.waitFor(
  "crop-e459662b8bf657abcae8bd7b54485addafa7dbd15ea4c0f9b4fba87e68ab2196.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 拋轉採購單
currentCrop = await api.screen.waitFor(
  "crop-0a379c72b0686089ed6174a5f952b2ad4e072aed3854692d6902fedf9db9634f.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 採購單別
currentCrop = await api.screen.waitFor(
  "crop-cc563780d0216baab687345dec0ed01f388879853da43afa188adccc2066ffcd.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 141, currentCrop.top + 11);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.pasteText("RP22-");

// 採購員
currentCrop = await api.screen.waitFor(
  "crop-7fff0c668b2ec5296a988feb8252e044dca8a2ddb145ce42f7e92b7456e8dea9.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 141, currentCrop.top + 11);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.pasteText(api.read("row-採購人員.txt").split("(")[0]);
await api.sleep(100);
await api.sleep(100);

// 確定
currentCrop = await api.screen.waitFor(
  "crop-8f68f653a68a60f738e25d19ace3925cd99a7a31d844377d52677f4c171e80a6.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(2000); // Waiting UI expand

// Click Center of Warning UI
currentCrop = await api.screen.waitFor(
  "crop-cffe79734100cfc003ba7e82cf6074c4304b68c8adcb394f5994151e43bff732.png",
  5000,
  { confidence: 0.97, left: 317, top: 187, width: 782, height: 414 }
); //
await api.mouse.move(currentCrop.left + 111, currentCrop.top + 112);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickRight();
await api.sleep(100);
await api.sleep(100);

// Copy Field
currentCrop = await api.screen.waitFor(
  "crop-2bda1eb0c12c77d3bd682240a7d3e9fa3847c1e9d62a9fb21c60e5e74906d6b1.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// Filter single number
const number = api.clipboard.readText().split("~")[0];
api.write("number.txt", number);
console.log(number);

// 確定
currentCrop = await api.screen.waitFor(
  "crop-37ea048e7c85f6286a9445a6c6194792d449fb03bc610fdd2e944733df5d5aee.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// Click UI
currentCrop = await api.screen.waitFor(
  "crop-33e0afdcecb77618a0a629637ef61212aeb1306bb9645b9bedec7da671cef209.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 157, currentCrop.top + 99);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// Open apmt540
await api.keyboard.type(api.key.LeftControl, api.key.G);
await api.sleep(100);
await api.sleep(100);
await api.keyboard.type("apmt540");
await api.sleep(100);
await api.sleep(100);
await api.keyboard.enter();
await api.sleep(100);
await api.sleep(100);

await api.sleep(3000); // Waiting ampt540 UI

// 查詢
currentCrop = await api.screen.waitFor(
  "crop-6b5df6b65aea173a781f2ca55caa43f779be511d6f26abed83a56d6d4f909248.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 填入 number
await api.pasteText(api.read("number.txt"));
await api.sleep(100);
await api.sleep(100);

// 確定兩次
currentCrop = await api.screen.waitFor(
  "crop-352f15948381a92858546898e561a06d6717b3715346a6da76f55aa19723bf53.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.mouse.move(currentCrop.left - 100, currentCrop.top);
await api.sleep(100);
await api.sleep(100); // move out cursor
await api.sleep(2000);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// B 進入單身
await api.keyboard.type(api.key.B);
await api.sleep(100);
await api.sleep(100);

// 若重新預設單價視窗出現，點擊 Y:是
const symbolQ = await api.screen.waitFor(
  "crop-2ac1811da9da938c01e49b5f1203d25368b89d009f6f12cf7a46d048f06dde5d.png",
  5000,
  { confidence: 0.97 }
);
await api.sleep(100);
await api.sleep(100);
console.log(symbolQ);
if (symbolQ) {
  const yesBtn = await api.screen.waitFor(
    "crop-d90e870e61a682abc561a3907a5ccbe203c421f157f786d23fdf84f2793fca1a.png",
    5000,
    { confidence: 0.97 }
  );
  console.log(yesBtn);
  await api.mouse.move(
    yesBtn.left + yesBtn.width / 2,
    yesBtn.top + yesBtn.height / 2
  );
  await api.sleep(100);
  await api.sleep(100);
  await api.mouse.clickLeft();
  await api.sleep(100);
  await api.sleep(100);
}

// 填入未稅單價
await api.pasteText(api.read("row-未稅單價.txt"));
await api.sleep(100);
await api.sleep(100);
await api.keyboard.tab();
await api.sleep(100);
await api.sleep(100);

// 填入日期
const date = [...api.read("row-原始到廠日期.txt")].reduce((acc, cur, i) => {
  if (i % 2 === 0 && i !== 0) {
    return acc + `/${cur}`;
  } else {
    return acc + cur;
  }
}, "");
await api.pasteText(date);
await api.sleep(100);
await api.sleep(100);
await api.keyboard.tab();
await api.sleep(100);
await api.sleep(100);
await api.pasteText(date);
await api.sleep(100);
await api.sleep(100);
await api.keyboard.tab();
await api.sleep(100);
await api.sleep(100);
await api.pasteText(date);
await api.sleep(100);
await api.sleep(100);
await api.keyboard.tab();
await api.sleep(100);
await api.sleep(100);

// 確定
currentCrop = await api.screen.waitFor(
  "crop-dee2c316f5ef0b01d466f7ecb24fe1408e4bf80905aaad04a97e239b93b1cee0.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 相關文件
currentCrop = await api.screen.waitFor(
  "crop-4bc8300388fed02b1d2c40ab53ff54b8d626be699b4b899475cfd45a98ffd123.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(3000); // Wait UI expand

// 新增
currentCrop = await api.screen.waitFor(
  "crop-2e978814f4e1a4bd224b5e8dd0af827bf075aa3892b9c64613eded935e4b13b2.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(3000);

// 文件位置
currentCrop = await api.screen.waitFor(
  "crop-dd9201c8631c8b7431c731e76c89cc8f208c856c11e68e0595e88896bc2ff869.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 輸入檔案位置
await api.pasteText(
  `C:\\Users\\publie1\\Desktop\\EMILY\\${api.read("row-請購單號.txt")}.pdf`
);

// 確定兩次
currentCrop = await api.screen.waitFor(
  "crop-6a5cec0e48762d802e2c85885c5914d14a7aceee7b9266936fcd11c4f4730d90.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.mouse.move(currentCrop.left - 100, currentCrop.top);
await api.sleep(100);
await api.sleep(100); // move out cursor
await api.sleep(2000);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 文件說明
currentCrop = await api.screen.waitFor(
  "crop-096891f4cfdde02dbf5d00613ee70ec9de6dfcdbb66f3c65b1cab93ca2c52ed3.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 117, currentCrop.top + 31);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.pasteText(api.read("row-請購單號.txt"));

// 確定
currentCrop = await api.screen.waitFor(
  "crop-770677cc9348426fb030cfa9abb6f4630333826ea9cb3ac4d44c9bc624dbbf9b.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(3000);

// 確定
currentCrop = await api.screen.waitFor(
  "crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// ESC 離開文件相關UI
await api.keyboard.escape();
await api.sleep(100);
await api.sleep(100);

// 發包價
currentCrop = await api.screen.waitFor(
  "crop-42fbd6d2436ec257da8ffa9175ebc648ebeeb72d24542f9cc337ed62bd5761d7.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 重新產生發包價
currentCrop = await api.screen.waitFor(
  "crop-cd16ba07c64bc27e2b0360ce942f8915cc6a8036fe329a0286c88501a2eb91ba.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

await api.sleep(2000); // Waiting prompt window

await api.keyboard.enter();
await api.sleep(100);
await api.sleep(100);

// 確定(右上)
currentCrop = await api.screen.waitFor(
  "crop-0f07db37f6b0dbf7a4b11d9344a2a9221e6cbc115622a6a99d5f36305356b5e3.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// 送簽
currentCrop = await api.screen.waitFor(
  "crop-3144933ce7160866fbe1451f940ca681e3eb45c4ddb60e284dee8653a67e4c6b.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
await api.sleep(3000);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);

// Warning
currentCrop = await api.screen.waitFor(
  "crop-5e84177048db7b3d1a22f081eea1ad6529d4ca7bf57f24fa8b186ceba7ee3ec5.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 149, currentCrop.top + 108);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickRight();
await api.sleep(100);
await api.sleep(100);

// Copy Field
currentCrop = await api.screen.waitFor(
  "crop-cb4acbfb56899394b754e3ab102b36c45f3467952de7d2ecbc9495b0df01f925.png",
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(
  currentCrop.left + currentCrop.width / 2,
  currentCrop.top + currentCrop.height / 2
);
await api.sleep(100);
await api.sleep(100);
await api.mouse.clickLeft();
await api.sleep(100);
await api.sleep(100);
api.write("result.txt", api.clipboard.readText());

await api.keyboard.enter();
await api.sleep(100);
await api.sleep(100);
