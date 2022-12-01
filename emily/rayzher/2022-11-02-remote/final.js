let finish;
try {
  finish = JSON.parse(read("finish.json"));
} catch (err) {
  finish = [];
}

let main = JSON.parse(read("main.json"));

main.forEach((cur) => {
  if ((cur.apmp200 && !cur.apmp200.startsWith("RP22-")) || cur.apmt540) {
    if (finish.find((fcur) => fcur["請購單號"] === cur["請購單號"]))
      finish = finish.filter((ffcur) => ffcur["請購單號"] !== cur["請購單號"]);
    finish.push(cur);
  }
});

main = main.filter(
  (cur) => !((cur.apmp200 && !cur.apmp200.startsWith("RP22-")) || cur.apmt540)
);

write("main.json", JSON.stringify(main));
write("finish.json", JSON.stringify(finish));
