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

// Open apmt540
await api.keyboard.type(api.key.LeftControl, api.key.G);
await api.sleep(200);
await api.pasteText('apmt540');
await api.sleep(200);
await api.keyboard.enter();
await api.sleep(200);
