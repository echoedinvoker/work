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

// 人員編號 validations
const member = api.read("row-採購人員.txt");

if (!request.startsWith("R")) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmp200 = "人員編號開頭非 R";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

const seriesOfMember = member.replace("R", "").split("(")[0];
if (!Number.isInteger(+seriesOfMember)) {
  main = main.map((cur) => {
    if (cur["請購單號"] === request) {
      cur.apmp200 = "人員編號號錯誤";
      return cur;
    } else {
      return cur;
    }
  });
  return api.writeCSV("main.csv", main);
}

api.write("apmp200-pass.txt", "true");
