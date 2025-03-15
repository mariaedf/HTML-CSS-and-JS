function showSlide(slideNumber, sectionClass) {//slides
  const section = document.querySelector(`.${sectionClass}`);
  const slides = section.querySelectorAll('[id^="slide-"]');
  slides.forEach((slide) => {
    slide.classList.add("d-none");
    slide.classList.remove("visible");
  });

  const dots = section.querySelectorAll(".dots-container img");
  dots.forEach((dot) => {
    dot.src = "../img/white-dot.png";
    dot.alt = "not selected";
  });

  const selectedSlide = section.querySelector(`#slide-${slideNumber}`);
  selectedSlide.classList.remove("d-none");
  selectedSlide.classList.add("visible");

  const selectedDot = section.querySelector(`#dot-${slideNumber}`);
  selectedDot.src = "../img/black-dot.png";
  selectedDot.alt = "selected";
}
