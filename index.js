// menu-phone
const openList = document.querySelector(".open-list");
const closeList = document.querySelector(".close-list");
const navbar = document.querySelector(".nav-bar");
const img1 = document.querySelector(".click-1");
const img2 = document.querySelector(".click-2");
const img3 = document.querySelector(".click-3")
const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");
const intop = document.querySelector(".top");
const middel = document.querySelector(".middel");
const buttom = document.querySelector(".buttom");

openList.addEventListener("click", function () {
    navbar.classList.add("menu-hide");
    openList.classList.add("open");
    closeList.classList.add("close")
});

closeList.addEventListener("click", function () {
    navbar.classList.remove("menu-hide");
    openList.classList.remove("open");
    closeList.classList.remove("close")
    intop.classList.add("hide");
    img1.classList.remove("icon-clicked");
    product.classList.remove("after-click");
    middel.classList.add("hide");
    img2.classList.remove("icon-clicked");
    company.classList.remove("after-click");
    buttom.classList.add("hide");
    img3.classList.remove("icon-clicked");
    connect.classList.remove("after-click");
});




product.addEventListener("click", function() {
  this.classList.toggle("after-click");
  img1.classList.toggle("icon-clicked");
  intop.classList.toggle("mini-hide");
  intop.classList.toggle("hide");
  company.classList.remove("after-click");
  img2.classList.remove("icon-clicked");
  middel.classList.remove("mini-hide");
  middel.classList.add("hide");
  connect.classList.remove("after-click");
  img3.classList.remove("icon-clicked");
  buttom.classList.remove("mini-hide");
  buttom.classList.add("hide");
});

company.addEventListener("click", function() {
    this.classList.toggle("after-click");
    img2.classList.toggle("icon-clicked");
    middel.classList.toggle("mini-hide");
    middel.classList.toggle("hide");
    product.classList.remove("after-click");
    img1.classList.remove("icon-clicked");
    intop.classList.remove("mini-hide");
    intop.classList.add("hide");
    buttom.classList.remove("after-click");
    img3.classList.remove("icon-clicked");
    buttom.classList.remove("mini-hide");
    buttom.classList.add("hide");
  });

connect.addEventListener("click", function() {
    this.classList.toggle("after-click");
    img3.classList.toggle("icon-clicked");
    buttom.classList.toggle("mini-hide");
    buttom.classList.toggle("hide");
    product.classList.remove("after-click");
    img1.classList.remove("icon-clicked");
    intop.classList.remove("mini-hide");
    intop.classList.add("hide");
    company.classList.remove("after-click");
    img2.classList.remove("icon-clicked");
    middel.classList.remove("mini-hide");
    middel.classList.add("hide");
});
