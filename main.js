/* Copied from W3 Schools: How TO - Slideshow */

// main.js
let slideIndex = 1;
let timer = null;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startAuto();
});

function startAuto() {
  // slower autoplay (Issue #2)
  timer = setInterval(() => {
    plusSlides(1);
  }, 4500);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAuto();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAuto();
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}

// Contact Modal
function openContactModal() {
  document.getElementById("contactModal").classList.add("active");
}

function closeContactModal(event) {
  const modal = document.getElementById("contactModal");
  if (!event || event.target === modal) {
    modal.classList.remove("active");
    document.getElementById("contactForm").reset();
  }
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const replyTo = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  const subject = encodeURIComponent("Message from " + name + " via Accend Website");
  const body = encodeURIComponent(message + "\n\nReply to: " + replyTo);

  window.location.href = "mailto:accendlearning@outlook.com?subject=" + subject + "&body=" + body;
  closeContactModal();
}
