const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

/* ############################## SCROL REVEAL ############################## */
const scrollReveal = ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: 700,
  reset: true,
});
