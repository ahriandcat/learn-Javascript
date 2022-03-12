function calcTaxiFee(km) {
  let level1 = 0;
  let level2 = 0;
  let total = 0;

  for (let i = 1; i <= km; i++) {
    while (i <= 30) {
        level1 = 10000 + 11000 * i;
        break;
    }
    while (i > 30) {
        level2 = 9500 * (i - 30);
        break;
    }
    total = level1 + level2;
  }
  console.log(total);
}

calcTaxiFee(31);
