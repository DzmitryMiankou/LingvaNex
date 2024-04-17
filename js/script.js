`use strict`;

window.addEventListener("load", function () {
  start();
});
const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const buttons = [...document.querySelectorAll(".buttons__button")];
const cardsAll = [...document.querySelectorAll(".product-card")];

function cards() {
  function dd(params) {
    cardsAll.forEach((el) => {
      if (params.trim() === el.children[0].textContent.trim())
        return console.log(params.trim());
    });
  }

  buttons.forEach((el) =>
    el.addEventListener(whatEventUse, () => dd(el.textContent))
  );
}

function start() {
  cards();
}
