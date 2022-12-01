const finishName = `finish_${moment(new Date()).format('YYMMDD')}.csv`;

output.push({
  src: finishName,
  dst: finishName,
});
