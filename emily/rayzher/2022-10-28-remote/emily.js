let main = await api.readCSV("main.csv");

// 請購單號 validations
const request = api.read("row-請購單號.txt");

if (!request.startsWith("RP12-")) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmp200 = "請購單號開頭非 RP12-";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

const seriesOfRequest = request.replace("RP12-", "");
if (!Number.isInteger(+seriesOfRequest)) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmp200 = "請購單號錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

if (seriesOfRequest.length !== 9) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmp200 = "請購單號長度錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}
