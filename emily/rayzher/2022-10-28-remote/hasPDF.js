const fileName = `${api.read("row-請購單號.txt")}.pdf`;
const result = input.find((cur) => cur.includes(fileName));
if (result) api.write("hasPDF.txt", result);
