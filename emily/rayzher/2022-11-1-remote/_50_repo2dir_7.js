const date = new Date();
const finishName = `finish_${moment(date).format('YYMMDD')}.csv`;
const dstFinishName = `\\${moment(date).format('YYYY')}\\${moment(date).format(
  'MMMM'
)}\\${finishName}}`;

output.push({
  src: finishName,
  dst: dstFinishName,
});
