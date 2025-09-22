// Rustica Travel - JS extraído de index.html
// Año dinámico
document.getElementById("y").textContent = new Date().getFullYear();

// Slider simple y ligero
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".indicator .dot");
let idx = 0;
function show(i) {
  slides.forEach((s, j) => {
    s.style.opacity = j === i ? 1 : 0;
    s.style.transition = "opacity .9s ease";
    s.style.position = "absolute";
  });
  dots.forEach((d, j) => {
    d.classList.toggle("active", j === i);
  });
}
show(0);
setInterval(() => {
  idx = (idx + 1) % slides.length;
  show(idx);
}, 4500);
