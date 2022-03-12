function calcGrade(p) {
  if (p < 4) {
    console.log("Xếp loại F");
  } else if (p >= 4 && p < 5.5) {
    console.log("Xếp loại D");
  } else if (p >= 5.5 && p < 7) {
    console.log("Xếp loại C");
  } else if (p >= 7 && p < 8.5) {
    console.log("Xếp loại B");
  } else console.log("Xếp loại A");
}

calcGrade(9);
