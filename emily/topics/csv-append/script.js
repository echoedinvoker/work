emilyResult.forEach((cur) => {
    if (original.find((ocur) => ocur.請購單號 === cur.請購單號)) {
      original = [
        ...original.filter((ocur) => ocur.請購單號 !== cur.請購單號),
        cur,
      ];
    } else {
      original = [...original, cur];
    }
  });