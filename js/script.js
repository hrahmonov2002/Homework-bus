var elForm = document.querySelector(".cite-form");
var elFormAge = elForm.querySelector(".form-age");
var MIN_AGE = 7;
var MAX_AGE = 40;

console.log(`yoshingiz ${elFormAge.value}`);

var elP = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (isNaN(elFormAge.value)) {
        elP.textContent = "Iltimos yoshingizni kiriting";
    } else if (elFormAge.value <= MIN_AGE) {
        elP.textContent = "Sizga yo'l kira bepul";
    } else if (elFormAge.value < MAX_AGE) {
        elP.textContent = "Siz uchun yo'l kira 1400so'm";
    } else if (elFormAge.value > MAX_AGE) {
        elP.textContent = "Siz uchun yo'l kira 700so'm";
    }
});


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (isNaN(elFormAge.value)) {
        elP.textContent = "iltimos yoshingizni kiriting";
    }
});
