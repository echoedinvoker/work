let currentCrop;

// Click UI
currentCrop = await api.screen.waitFor(
  'crop-6b71ab5454b611ad8f0ccd3d13dbcc335c5844bdef82747a563f24dc73fec4ac.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(currentCrop.left + 100, currentCrop.top + 100);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// Open apmp200
await api.keyboard.type(api.key.LeftControl, api.key.G);
await api.sleep(200);
await api.pasteText('apmp200');
await api.sleep(200);
await api.keyboard.enter(); // Refreash next crop's target; check no any similar target before refreshing
await api.sleep(200);

await api.sleep(2000); // wait apmp200 UI open, but is it neccessary??

// 放棄
currentCrop = await api.screen.waitFor(
  'crop-b7291af325cb6d5a8fc894dbe717dd552bb5c9219063a6bdb9510f9eb8685acd.png',
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
