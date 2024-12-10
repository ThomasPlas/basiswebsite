//*********************** */
// deze code was niet meer nodig vanwege de "has" die ik heb gebruikt.
//*********************** */

// const iPhoneKleuren = document.querySelectorAll('input[name="iPhoneKleuren"]');
// const welkeTelefoon = document.querySelector('main section:nth-of-type(1) p:nth-of-type(2)');

// iPhoneKleuren.forEach(radio => {
//     radio.addEventListener('change', () => {

//         const value = radio.value;
        
//         if (value === "alleKleuren") {
//             welkeTelefoon.textContent = "6,3-inch iPhone 16 Pro in vier kleuren";
//         }
//         else if (value === "zwartTitanium") {
//             welkeTelefoon.textContent = "6,9-inch iPhone 16 Pro Max1 en 6,3‑inch iPhone 16 Pro1 in zwart titanium";
//         }
//         else if (value === "witTitanium") {
//             welkeTelefoon.textContent = "6,9-inch iPhone 16 Pro Max1 en 6,3‑inch iPhone 16 Pro1 in wit titanium";
//         }
//         else if (value === "naturelTitanium") {
//             welkeTelefoon.textContent = "6,9-inch iPhone 16 Pro Max1 en 6,3‑inch iPhone 16 Pro1 in naturel titanium";
//         } 
//         else if (value === "desertTitanium") {
//             welkeTelefoon.textContent = "6,9-inch iPhone 16 Pro Max1 en 6,3‑inch iPhone 16 Pro1 in desert titanium";
//         }
//     });
// });


//*********************** */
// code voor de carousels
//*********************** */

const carousel = document.querySelector("main section:nth-of-type(3) ul");
const carouselFotos = Array.from(carousel.children);

let buttonTerug = document.querySelector("main section:nth-of-type(3) button:nth-of-type(1)");
let buttonVooruit = document.querySelector("main section:nth-of-type(3) button:nth-of-type(2)");
let currentIndex = 0;

function scrollToItem(index) {
    const huidigeFoto = carouselFotos[index];
    console.log(huidigeFoto)
    huidigeFoto.scrollIntoView({ behavior: "smooth", inline: "center" });
}

buttonTerug.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToItem(currentIndex);
    }
});

buttonVooruit.addEventListener("click", () => {
    if (currentIndex < 3) {
        currentIndex++;
        scrollToItem(currentIndex);
    }
});

