// JavaScript Document
console.log("hi");


let menu = document.querySelector("header > button:nth-of-type(1)");
let navigatie = document.querySelector("nav");
// let menuSluiten = document.querySelector("nav > button");
let zoekenKnop = document.querySelector("header > button:nth-of-type(2)")
let winkelMandjeKnop = document.querySelector("header > button:nth-of-type(3)");

let zoekScherm = document.querySelector("header > section:nth-of-type(1)");
let winkelMandje = document.querySelector("header > section:nth-of-type(2)");

let storeHoover = document.querySelector("header nav li:nth-of-type(1)")
let storeNavigatie = document.querySelector("header nav li:nth-of-type(1) section");


// openen van menu
menu.addEventListener("click", function() {
    let zoekSchermOpen = zoekScherm.classList.contains("open");
    let winkelMandjeOpen = winkelMandje.classList.contains("open");

    console.log("menu clicked");
    if (!zoekSchermOpen && !winkelMandjeOpen) {
        navigatie.classList.toggle("open");
    }
    zoekScherm.classList.remove("open");
    winkelMandje.classList.remove("open");
    
});

zoekenKnop.addEventListener("click", toggleZoeken);

function toggleZoeken() {

    console.log("open zoekbalk");
    zoekScherm.classList.toggle("open");
    menuButton.ariaExpanded = "true"
    navigatie.classList.remove("open");
    winkelMandje.classList.remove("open");
}

winkelMandjeKnop.addEventListener("click", function() {
    console.log("open winkelmandje");
    winkelMandje.classList.toggle("open");
    menuButton.ariaExpanded = "true"
    zoekScherm.classList.remove("open");
    navigatie.classList.remove("open");

});
// menuSluiten.addEventListener("click", function() {
//   console.log("sluit");
//   navigatie.classList.remove("open");
// });


// button voor nav
let menuButton = document.querySelector("header button:nth-of-type(1)");

menuButton.onclick = menuButtonClick;

function menuButtonClick() {
  if (menuButton.ariaExpanded == "true") {
    menuButton.ariaExpanded = "false"
  }
  else{
    menuButton.ariaExpanded = "true"
  }
}
//checken



storeHoover.addEventListener("mouseover", showStoreNaviagtie);

function showStoreNaviagtie(){
    console.log("hier is de store navigatie")
    storeNavigatie.classList.toggle("open")
}

