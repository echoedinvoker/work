const main = JSON.parse(read("main.json"));

const reqSeries = read("row-請購單號.txt"); // this is id
const purchase = read("row-apmp200.txt");
const cost = read("row-未稅單價.txt");
const date = read("row-原始到廠日期.txt");

const validation = (con, note) => {
  if (con) {
    main.map((cur) => {
      if (cur["請購單號"] === reqSeries) {
        cur.apmt540 = note;
        return cur;
      }
      return cur;
    });
    return true;
  }
};

validation(!purchase.startsWith("RP22-"), "開頭非 RP22-") ||
  validation(read("hasPDF.txt") === "false", "無相關文件") ||
  validation(!+cost, "未稅單價錯誤") ||
  validation(
    date.length !== 6 ||
      !/[0-9()]*/.test(date) ||
      +date.slice(2, 4) > 12 ||
      +date.slice(2, 4) < 1 ||
      +date.slice(4) > 31 ||
      +date.slice(4) < 1,
    "日期錯誤"
  ) ||
  write("apmt540Pass.txt", "true");
write("main.json", JSON.stringify(main));
