// *** MENU ***
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    ajout_class.classList.toggle("noscroll");
  });

// *** CARROUSEL ***

const carousel = document.querySelector(".carrousel__container");
const prevButton = document.querySelector(".carrousel__button--prev");
const nextButton = document.querySelector(".carrousel__button--next");
const premierItem = document.querySelector(".carrousel__item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
  });


  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
  });
}