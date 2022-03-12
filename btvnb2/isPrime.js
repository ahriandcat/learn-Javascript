// function primeCheck(n){
//     let check = true;
//     if (n < 2){
//         check = false;
//     }
//     else{
//         for (let i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 check = false;
//                 break;
//             }
//         }
//     }

//     if (check == true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function primeList(a, b) {
  let primeArray = new Array();
  let n = a;
  for (let i = a; i <= b; i++) {
    primeArray.add(i);
    for (let j = a; j <= b; j++) {
      if (primeArray[i] < 2) {
        primeArray.deleteAt(i);
      } else if (primeArray[i] % j) {
        primeArray.deleteAt(i);
      }
    }
  }
  console.log(primeArray);
}

primeList(1, 20);
