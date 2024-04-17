`use strict`;

window.addEventListener("load", function () {
  start();
});
/*
const mainWrapper = document.querySelector(".main__wrapper");
const HEADER_NAV = document.querySelector("." + "header-nav");
const HEADER_BLUER = document.querySelector(".header__bluer");
const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const SLIDER = document.querySelector("." + "reviews-slider__content");
const buttonUp = document.querySelector("#up");
const BUTTONS_SLIDERL = document.querySelector("#left");
const BUTTONS_SLIDERR = document.querySelector("#right");

const formWrapper = document.querySelector(".form__wrapper");
let openW = false;
function openHeaderMenu(event) {
  if (event.target.closest("." + "header__button")) {
    openW = !openW;
    HEADER_NAV.classList.add("header-nav" + "--active");
    HEADER_BLUER.classList.add("header__bluer" + "--active");
    document.body.classList.add("body--scroll");
  }
  if (
    event.target.closest(".header__bluer") ||
    event.target.closest(".header-nav__list")
  ) {
    openW = false;
    const timer = setTimeout(() => {
      HEADER_NAV.classList.remove("header-nav" + "--active");
      HEADER_BLUER.classList.remove("header__bluer" + "--active");
      HEADER_BLUER.classList.remove("header__bluer--clouse");
      HEADER_NAV.classList.remove("header-nav--clouse");
      document.body.classList.remove("body--scroll");
    }, 300);
    HEADER_BLUER.classList.add("header__bluer--clouse");
    HEADER_NAV.classList.add("header-nav--clouse");
    return () => clearTimeout(timer);
  }
}

const init = 320;
function onClickHandler() {
  if (!BUTTONS_SLIDERL || !BUTTONS_SLIDERR) return;
  BUTTONS_SLIDERL.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += -init)
  );
  BUTTONS_SLIDERR.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += init)
  );
}

function ubButtonController() {
  if (!buttonUp) return console.log("not buttonUp");
  const scr = (p) =>
    p > 20
      ? (buttonUp.style.display = "block")
      : (buttonUp.style.display = "none");

  buttonUp.addEventListener(whatEventUse, () => window.scrollTo(0, 0));
  window.addEventListener("scroll", () =>
    scr((window.scrollY / document.body.scrollHeight) * 100)
  );
}
*/
function start() {
  /* if (mainWrapper || formWrapper) {
    mainWrapper.style.height = window.screen.availHeight - 60 + "px";
    formWrapper.style.height = window.screen.availHeight - 60 + "px";
  }

  onClickHandler();
  ubButtonController();

  window.addEventListener(whatEventUse, (event) => {
    openHeaderMenu(event);
  });*/
}
