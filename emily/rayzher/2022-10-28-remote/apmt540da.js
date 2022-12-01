// 查詢
currentCrop = await api.screen.waitFor('crop-9d1a09f7ed3e5d359d8f04bb40102518bdbfca976eb013df1a1fb0cc0a710e5b.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 填入 number
await api.pasteText(api.read('row-apmp200.txt')); await api.sleep(100); await api.sleep(100);

// 確定兩次
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);
await api.mouse.move(currentCrop.left - 100, currentCrop.top); await api.sleep(100); await api.sleep(100); // move out cursor
await api.sleep(2000);
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// B 進入單身
// await api.keyboard.type(api.key.B); await api.sleep(100); await api.sleep(100);
currentCrop = await api.screen.waitFor('crop-64ce8edf4c61bbaf6d76541638bd7cf22299c699401305f3ee7abc915c603217.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 若重新預設單價視窗出現，點擊 Y:是
const symbolQ = await api.screen.waitFor('crop-2ac1811da9da938c01e49b5f1203d25368b89d009f6f12cf7a46d048f06dde5d.png', 5000, {confidence: 0.97}); await api.sleep(100); await api.sleep(100);
console.log(symbolQ)
if(symbolQ) {
  const yesBtn = await api.screen.waitFor('crop-d90e870e61a682abc561a3907a5ccbe203c421f157f786d23fdf84f2793fca1a.png', 5000, {confidence: 0.97});
  console.log(yesBtn);
  await api.mouse.move(yesBtn.left + yesBtn.width/2, yesBtn.top + yesBtn.height/2); await api.sleep(100); await api.sleep(100);
  await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);
}

// 填入未稅單價
await api.pasteText(api.read('row-未稅單價.txt')); await api.sleep(100); await api.sleep(100);
await api.keyboard.tab(); await api.sleep(100); await api.sleep(100);

// 填入日期
const date = [...api.read('row-原始到廠日期.txt')].reduce((acc,cur,i)=>{
  if(i%2===0 && i!==0) {
    return acc + `/${cur}`
  }else{
    return acc + cur
  }
},"")
await api.pasteText(date); await api.sleep(100); await api.sleep(100);
await api.keyboard.tab(); await api.sleep(100); await api.sleep(100);
await api.pasteText(date); await api.sleep(100); await api.sleep(100);
await api.keyboard.tab(); await api.sleep(100); await api.sleep(100);
await api.pasteText(date); await api.sleep(100); await api.sleep(100);
await api.keyboard.tab(); await api.sleep(100); await api.sleep(100);

currentCrop = await api.screen.waitFor('crop-6b71ab5454b611ad8f0ccd3d13dbcc335c5844bdef82747a563f24dc73fec4ac.png', 5000, {confidence: 0.97, left: 232, top: 127, width: 757, height: 448});

if(currentCrop) {
  await api.mouse.move(currentCrop.left + 149, currentCrop.top + 108); await api.sleep(100); await api.sleep(100);
  await api.mouse.clickRight(); await api.sleep(100); await api.sleep(100);

  // Copy Field
  currentCrop = await api.screen.waitFor('crop-206b0cbed67d670e05ec959174611c66714ba9c83eb84320321a9b6a82e785e0.png', 5000, {confidence: 0.97});
  await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
  await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

  // Write to main.csv
  const main = await api.readCSV("main.csv", ",", 0);
  const requestNumber = api.read("row-請購單號.txt");
  const newMain = main.map((cur) => {
    if (cur["請購單號"] === requestNumber) return { 
      ...cur, 
      apmt540: api.clipboard.readText().split(/\r|\n|:/)[0] 
    };
    return cur;
  });
  await api.writeCSV("main.csv", newMain);

  // 確定
  currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
  await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
  await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

  // 放棄
  currentCrop = await api.screen.waitFor('crop-b7291af325cb6d5a8fc894dbe717dd552bb5c9219063a6bdb9510f9eb8685acd.png', 5000, {confidence: 0.97});
  await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
  return api.mouse.clickLeft();
}

// 確定
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 相關文件
currentCrop = await api.screen.waitFor('crop-4bc8300388fed02b1d2c40ab53ff54b8d626be699b4b899475cfd45a98ffd123.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

await api.sleep(3000); // Wait UI expand

// 新增
currentCrop = await api.screen.waitFor('crop-2e978814f4e1a4bd224b5e8dd0af827bf075aa3892b9c64613eded935e4b13b2.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

await api.sleep(3000);

// 文件位置
currentCrop = await api.screen.waitFor('crop-dd9201c8631c8b7431c731e76c89cc8f208c856c11e68e0595e88896bc2ff869.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 輸入檔案位置
// await api.pasteText(`C:\\Users\\publie1\\Desktop\\EMILY\\${api.read('row-請購單號.txt')}.pdf`);
await api.pasteText(`${api.read('hasPDF.txt')}`);


// 確定兩次
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);
await api.mouse.move(currentCrop.left - 100, currentCrop.top); await api.sleep(100); await api.sleep(100); // move out cursor
await api.sleep(2000);
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 文件說明
currentCrop = await api.screen.waitFor('crop-096891f4cfdde02dbf5d00613ee70ec9de6dfcdbb66f3c65b1cab93ca2c52ed3.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + 117, currentCrop.top + 31); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);
await api.pasteText(api.read('row-請購單號.txt'));

// 確定
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

await api.sleep(3000);

// 確定
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// ESC 離開文件相關UI
await api.keyboard.escape(); await api.sleep(100); await api.sleep(100);

// 發包價
currentCrop = await api.screen.waitFor('crop-42fbd6d2436ec257da8ffa9175ebc648ebeeb72d24542f9cc337ed62bd5761d7.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 重新產生發包價
currentCrop = await api.screen.waitFor('crop-cd16ba07c64bc27e2b0360ce942f8915cc6a8036fe329a0286c88501a2eb91ba.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

await api.sleep(2000); // Waiting prompt window

await api.keyboard.enter(); await api.sleep(100); await api.sleep(100);

// 確定(右上)
currentCrop = await api.screen.waitFor('crop-348c72e54eba359df8ed32e99aa94c0579d27a0a2d26952335816f58d2eb39d9.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// 送簽
currentCrop = await api.screen.waitFor('crop-3144933ce7160866fbe1451f940ca681e3eb45c4ddb60e284dee8653a67e4c6b.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);
await api.sleep(3000);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// Warning
currentCrop = await api.screen.waitFor('crop-6b71ab5454b611ad8f0ccd3d13dbcc335c5844bdef82747a563f24dc73fec4ac.png', 5000, {confidence: 0.97, left: 336, top: 116, width: 757, height: 448});
await api.mouse.move(currentCrop.left + 149, currentCrop.top + 108); await api.sleep(100); await api.sleep(100);
await api.mouse.clickRight(); await api.sleep(100); await api.sleep(100);

// Copy Field
currentCrop = await api.screen.waitFor('crop-206b0cbed67d670e05ec959174611c66714ba9c83eb84320321a9b6a82e785e0.png', 5000, {confidence: 0.97});
await api.mouse.move(currentCrop.left + currentCrop.width/2, currentCrop.top + currentCrop.height/2); await api.sleep(100); await api.sleep(100);
await api.mouse.clickLeft(); await api.sleep(100); await api.sleep(100);

// Write to main.csv
const main = await api.readCSV("main.csv", ",", 0);
const requestNumber = api.read("row-請購單號.txt");
const newMain = main.map((cur) => {
  if (cur["請購單號"] === requestNumber) return { 
    ...cur, 
    apmt540: api.clipboard.readText().split(/\r|\n|:/)[0] 
  };
  return cur;
});
await api.writeCSV("main.csv", newMain);

await api.keyboard.enter(); await api.sleep(100); await api.sleep(100);
