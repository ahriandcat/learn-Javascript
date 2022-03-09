function c2f(c) {
  c = document.getElementById("a1").value;
  f = c * 1.8 + 32;
  document.getElementById("a2").innerHTML = "°F = " + f;
}
// let c = 20;
// console.log("c =", c);

function USD2VND(u) {
  u = document.getElementById("b1").value;
  v = u * 23500;
  document.getElementById("b2").innerHTML = "VND : " + v;
}

function findArea(a, b) {
  a = document.getElementById("c1").value;
  b = document.getElementById("c2").value;
  S = a * b;
  if (a <= 0 || b <= 0) {
    document.getElementById("c3").innerHTML = "Độ dài cạnh không hợp lệ";
  } else {
    document.getElementById("c3").innerHTML = "Diện tích : " + S;
  }
}

function compoundInterest(q, w, e, r) {
  q = document.getElementById("d1").value;

  w = document.getElementById("d2").value;

  e = document.getElementById("d3").value;

  r = document.getElementById("d4").value;

  H = q * Math.pow(1 + w / e, e * r);
    if (q <= 0 || w <= 0 || r <= 0) {
        document.getElementById("d5").innerHTML = "Số liệu không hợp lệ";
    } else {
        document.getElementById("d5").innerHTML = "Tổng số tiền : " + H;
    }
}

function findArea2(a, b, c) {
  a = document.getElementById("e1").value;
  b = document.getElementById("e2").value;
  c = document.getElementById("e3").value;
  S = a / 2 + b / 2 + c / 2;
  X = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  if (S <= 0) {
    document.getElementById("e4").innerHTML = "Độ dài cạnh không hợp lệ";
  } else {
    document.getElementById("e4").innerHTML = "Diện tích : " + X;
  }
}
