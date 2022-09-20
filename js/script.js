/** @format */

// AOS -->
const galleryImage = document.querySelectorAll(".gallery-img");
galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 50;
  img.dataset.aosDuration = 800;
});
AOS.init({});

// GSAP -->
gsap.from(".jumbotron img", { duration: 1, rotateY: 360, opacity: 0 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".display-4", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });

// Typed JS
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Students at SMKN 1 Kadipaten", "Class XII", "Majoring in PPLG-2"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Contact Me -->
const scriptURL = "https://script.google.com/macros/s/AKfycbwpcsAz8gpITume89F14CkNVvSxCf9XIaqbKvuOyXeXJyi8FRUAViBa1Umn8GOOIjMEsA/exec";
const form = document.forms["ifan-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Tilt JS
VanillaTilt.init(document.querySelector(".bg-logo"), {
  max: 25,
  speed: 400,
  gyroscope: true,
});
VanillaTilt.init(document.querySelector(".img-thumbnail"), {
  max: 25,
  speed: 400,
  gyroscope: true,
});
VanillaTilt.init(document.querySelectorAll(".projects-box"), {
  max: 25,
  speed: 400,
  gyroscope: true,
});
VanillaTilt.init(document.querySelectorAll(".projects-box a"), {
  max: 25,
  speed: 400,
  gyroscope: true,
  glare: true,
});
VanillaTilt.init(document.querySelectorAll(".gallery-img"), {
  reverse: true,
  max: 15,
  speed: 400,
  scale: 1.12,
  glare: true,
  reset: true,
  perspective: 500,
  transition: true,
  "max-glare": 0.75,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});
