// JavaScript Document
console.log("hi");


let menu = document.querySelector("header > button");
let navigatie = document.querySelector("nav");
let menuSluiten = document.querySelector("nav > button");

menu.addEventListener("click", function() {
  console.log("open");
  navigatie.classList.toggle("open");
});

menuSluiten.addEventListener("click", function() {
  console.log("sluit");
  navigatie.classList.remove("open");
});