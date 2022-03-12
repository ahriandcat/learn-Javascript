// const myFamily = {
//   Joel: 32,
//   Fred: 44,
//   Reginald: 65,
//   Susan: 33,
//   Julian: 13,
// };

// function afterNYears(family, year) {
//     let result = {};
//     for (let name in family) {
//         result[name] = family[name] + year;
//     }
//     return result;
// }
// console.log(afterNYears(myFamily, 5));

// const order = {
//   Shampoo: 5.99,
//   "Rubber Duck": 15.99,
// };

// function isFreeShipping(order) {
//   let sum;
//   for (let name in order) {
//     const price = order[name];
//     sum += price;
//   }
//   return sum >= 50;
// }
// console.log(isFreeShipping(order));

// const scores = {
//   A: 100,
//   B: 14,
//   C: 9,
//   D: 28,
//   E: 145,
//   F: 12,
//   G: 3,
//   H: 10,
//   I: 200,
//   J: 100,
//   K: 114,
//   L: 100,
//   M: 25,
//   N: 450,
//   O: 80,
//   P: 2,
//   Q: 12,
//   R: 400,
//   S: 113,
//   T: 405,
//   U: 11,
//   V: 10,
//   W: 10,
//   X: 3,
//   Y: 210,
//   Z: 23,
// };

// function nameScore(name) {
//   name = name.toUpperCase();
//   let total = 0;
//   for (let i = 0; i < name.length; i++) {
//     const char = name[i];
//     const score = scores[char];
//     total += score;
//   }
//   if (total <= 60) {
//     console.log("Not too good");
//   } else if (total >= 61 && total <= 300) {
//     console.log("pretty good");
//   } else if (total >= 301 && total <= 599) {
//     console.log("very good");
//   } else console.log("the best");
// }

// nameScore("aaa")

// const obj = { a: 1, b: 2, c: 3 };

// function invert(obj) {
//   let copy = {};
//     for (let char in obj) {
//         let c = inputObj[key];
//   }
// }
// invert(obj);

// const oldest = {
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29,
// };

// function findOldest(persons) {
//   let result = null;
//   let max = 0;

//   for (let name in persons) {
//     if (persons[name] > max) {
//       max = persons[name];
//       result = {
//         [name]: max,
//       };
//     }
//   }
//   return result;
// }

// console.log(findOldest(oldest));

let str = "tHE fOX iS cOMING fOR tHE cHICKEN";

function isUpper(char) {
  return char == char.toUpperCase();
}
function reverseCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isUpper(char)) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
    // const words = result.split(" "); // 'a b' => ['a', 'b']
    // const reversed = words.reverse(); //
    // result = reversed.join(' ');
  return result.split(' ').reverse().join(' ');
}

console.log(reverseCase(str));
