const records = JSON.parse(api.read("records.txt"));
const userfill = api.read("userfill(0).txt");

const newRecords = [...records, Date.now()];

if (userfill) {
  api.write(
    "result.txt",
    "" +
      newRecords.reduce(
        (sum, ts, i, arr) => (i % 2 ? sum + ts - arr[i - 1] : sum),
        0
      )
  );
  api.write("records.txt", "[]");
  return;
}

api.write("records.txt", JSON.stringify(newRecords));
