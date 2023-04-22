const aboutMe = document.querySelector(".info");
const hero = document.querySelector(".hero-img");
const me = document.querySelector(".me");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
function move() {
  //this function is to move the hero image
  if (!hero.classList.contains("moved")) {
    hero.classList.add("moved");
    hero.classList.remove("back-in-place");
    me.classList.remove("hidden");
    me.classList.add("visible");

    console.log("moved");
  } else if (hero.classList.contains("moved")) {
    hero.classList.remove("moved");
    hero.classList.add("back-in-place");
    me.classList.add("hidden");
    me.classList.remove("visible");
    console.log("back in place");
  }
}
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
