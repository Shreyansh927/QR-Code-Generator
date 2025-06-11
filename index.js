let button = document.getElementById("button");
let check = document.getElementById("check");
let pay = document.getElementById("pay");
let state = false;

let input = document.getElementById("input");
let qrImage = document.getElementById("qrImage");

function Getqr(event) {
  if (input.value === "") {
    alert("Enter a text or URL");
    return;
  } else if (state === false) {
    button.classList.add("button-onclick");
    pay.classList.add("d-none");
    check.classList.add("check2");
    state = true;
    setTimeout(function () {
      button.classList.remove("button-onclick");
      pay.classList.remove("d-none");
      check.classList.remove("check2");
    }, 4000);

    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    qrImage.classList.add("qr");
  } else {
    button.classList.remove("button-onclick");
    pay.classList.remove("d-none");
    check.classList.remove("check2");
    state = false;
  }
}

button.addEventListener("click", Getqr);
