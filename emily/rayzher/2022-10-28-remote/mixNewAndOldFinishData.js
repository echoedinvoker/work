const thisSkillFinish = JSON.parse(api.read("thisSkillFinish.txt"));

let beforeFinish;
try {
  beforeFinish = await api.readCSV("beforeFinish.csv");
  thisSkillFinish
    .map((ncur) => {
      if (beforeFinish.find((bcur) => bcur["請購單號"] === ncur["請購單號"])) {
        return { ...ncur, overlap: true };
      } else {
        return { ...ncur, overlap: false };
      }
    })
    .forEach((ncur) => {
      if (ncur.overlap) {
        beforeFinish = beforeFinish.filter(
          (bcur) => bcur["請購單號"] !== ncur["請購單號"]
        );
        beforeFinish.push(ncur);
      } else {
        beforeFinish.push(ncur);
      }
    });
} catch (err) {
  beforeFinish = thisSkillFinish;
}

await api.writeCSV(
  `finish_${moment(new Date()).format("YYMMDD")}.csv`,
  beforeFinish,
  [
    "專案號碼",
    "請購日期",
    "請購單號",
    "供應廠商",
    "採購人員",
    "採購量",
    "未稅單價",
    "含稅單價",
    "上傳文件名稱",
    "採購單號",
    "處理情況(確認碼/狀況碼)",
    "付款條件",
    "內部備註欄",
    "原始到廠日期",
    "原始交貨日期",
    "原始到貨日期",
    "apmp200",
    "apmt540",
  ]
);
