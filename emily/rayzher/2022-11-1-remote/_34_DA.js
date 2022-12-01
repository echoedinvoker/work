let currentCrop;

// Click UI
const logoTT = await api.screen.waitFor(
  'crop-6b71ab5454b611ad8f0ccd3d13dbcc335c5844bdef82747a563f24dc73fec4ac.png',
  5000,
  { confidence: 0.97 }
);
await api.mouse.move(logoTT.left + 157, logoTT.top + 99);
await api.sleep(200);
await api.mouse.clickLeft();
await api.sleep(200);

// homepage Logo check
currentCrop = await api.screen.waitFor(
  'crop-8c5c32a33c3ac9b6e1cdd4ab30a0dc6814bdfe2a48ee7afd7e3c5b1dc09b3221.png',
  2000,
  { confidence: 0.97 }
);
// Keep press ESC untill homepage LOGO(NovaTech) appear
while (!currentCrop) {
  await api.mouse.move(logoTT.left + 157, logoTT.top + 99);
  await api.sleep(200);
  await api.mouse.clickLeft();
  await api.sleep(200);
  await api.keyboard.escape();
  await api.sleep(200);
  currentCrop = await api.screen.waitFor(
    'crop-8c5c32a33c3ac9b6e1cdd4ab30a0dc6814bdfe2a48ee7afd7e3c5b1dc09b3221.png',
    2000,
    { confidence: 0.97 }
  );
}
