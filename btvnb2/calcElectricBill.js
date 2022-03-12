function calcElectricBill(kw) {
    let level1 = 0;
    let level2 = 0;
    let level3 = 0;
    let level4 = 0;
    let level5 = 0;
    let total = 0;

    for (let i = 1; i <= kw; i++) {
        while (i < 50) {
            level1 = i * 1500;
            break;
        }
        while (i >= 50 && i <= 100) {
            level2 = (i-50) * 2000;
            break;
        }
        while (i >= 100 && i <= 200) {
            level3 = (i-100) * 2500;
            break;
        }
        while (i >= 200 && i <= 400) {
            level4 = (i-200) * 3000;
            break;
        }
        while (i > 400) {
            level5 = (i-400) * 4000
        }
        total = level1 + level2 + level3 + level4 + level5;
    }
    console.log("total =", total);
}
calcElectricBill(401)