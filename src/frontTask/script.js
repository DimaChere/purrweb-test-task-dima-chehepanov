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
let inp = document.querySelector("#phone");

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll("#phone"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

inp.addEventListener("keypress", (e) => {
  // Отменяем ввод не цифр
  if (!/\d/.test(e.key)) e.preventDefault();
});
