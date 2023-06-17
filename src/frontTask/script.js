const { error } = require("jquery");

function switchVisible_menu() {
  document.getElementsByClassName("menuScreen")[0].style.display = "flex";
}

function switchHiden_menu() {
  document.getElementsByClassName("menuScreen")[0].style.display = "none";
}

function switchVisible_form() {
  document.getElementsByClassName("contactSales_container")[0].style.display =
    "flex";
  document.getElementsByClassName("contactSales_form")[0].style.display =
    "flex";
}

function switchHiden_form() {
  document.getElementsByClassName("contactSales_container")[0].style.display =
    "none";
}

function showError() {
  document.getElementsByClassName("requiredMessage")[0].style.display =
    "inline";
}

function showThanks() {
  setTimeout(() => {
    if (document.getElementsByClassName("error")[0] == undefined) {
      document.getElementsByClassName("contactSales_form")[0].style.display =
        "none";
      document.getElementsByClassName("thanks")[0].style.display = "flex";
    }
  }, 1000);
}

function switchHideThanks() {
  document.getElementsByClassName("thanks")[0].style.display = "none";
  document.getElementsByClassName("contactSales_container")[0].style.display =
    "none";
}

function hideCookies() {
  document.getElementsByClassName("cookies_container")[0].style.display =
    "none";
}

// var inp = document.getElementById("phone");

// inp.onclick = function () {
//   inp.value = "+";
// };

// var old = 0;

// inp.onkeydown = function () {
//   var curLen = inp.value.length;

//   if (curLen < old) {
//     old--;
//     return;
//   }

//   if (curLen == 2) inp.value = inp.value + "(";

//   if (curLen == 6) inp.value = inp.value + ")-";

//   if (curLen == 11) inp.value = inp.value + "-";

//   if (curLen == 14) inp.value = inp.value + "-";

//   if (curLen > 16) inp.value = inp.value.substring(0, inp.value.length - 1);

//   old++;
// };
