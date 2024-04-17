`use strict`;

window.addEventListener("load", function () {
  start();
});

const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const buttons = [...document.querySelectorAll(".buttons__button")];
const cardsAll = [...document.querySelectorAll(".product-card")];

function cards() {
  for (let i = 0; i !== cardsAll.length; i++) {
    cardsAll[i].classList.add(`product-card--${i + 1}`);
  }

  function controlStyleCards(params) {
    const activeCard = cardsAll.find(
      (el) => el.children[0].textContent.trim() === params.trim()
    );
    const oldClass = activeCard.className.split(" ")[1];

    const delActiveCard = cardsAll.find(
      (el) => el.className.split(" ")[1] === `product-card--1`
    );

    cardsAll.forEach((el) => el.classList.remove("product-card--1"));
    delActiveCard.classList.add(oldClass);
    activeCard.classList.remove(oldClass);
    activeCard.classList.add(`product-card--1`);
  }

  buttons.forEach((el) =>
    el.addEventListener(whatEventUse, (ev) =>
      controlStyleCards(ev.target.textContent)
    )
  );
}

function start() {
  cards();
}
