let main = await api.readCSV("main.csv");
const request = api.read("row-請購單號.txt");

// 採購單號 validations
const purchase = api.read("row-apmp200.txt");

if (!purchase.startsWith("RP22-")) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "採購單號開頭非 RP22-";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

const seriesOfPurchase = purchase.replace("RP22-", "");
if (!Number.isInteger(+seriesOfPurchase)) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "採購單號錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

if (seriesOfPurchase.length !== 9) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "採購單號長度錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

// 未稅單價
const cost = api.read("row-未稅單價.txt");

if (!Number.isInteger(+cost)) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "未稅單價錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

// 原始到廠日期
const date = api.read("row-原始到廠日期.txt");

if (!Number.isInteger(+date) || date.length !== 6) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "原始到廠日期錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

// 相關文件檢查
try {
  api.read("hasPDF.txt");
} catch (err) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmt540 = "無提供正確相關文件";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

api.write("apmt540-pass.txt", "true");
