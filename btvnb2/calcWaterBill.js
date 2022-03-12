function calcWaterBill(m) {
  let level0 = 0;
  let level1 = 0;
  let level2 = 0;
  let level3 = 0;
  let level4 = 0;
  let total = 0;
  for (let i = 1; i <= m; i++) {
    while (i < 5) {
      level0 = 45000;
      break;
    }
    while (i >= 5 && i <= 10) {
      level1 = level0 + 9000 * (i - 5);
      break;
    }
    while (i > 10 && i <= 20) {
      level2 = 11000 * (i - 10);
      break;
    }
    while (i > 20 && i <= 30) {
      level3 = 13000 * (i - 20);
      break;
    }
    while (i > 30) {
      level4 = 15000 * (i - 30);
      break;
    }
    if (m < 5) {
      total = level0;
    } else if (m > 5) {
      total = level1 + level2 + level3 + level4;
    }
  }
  console.log("total =",total);
}

calcWaterBill(31);
