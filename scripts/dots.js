const dots = [
  "../img/black-dot.png", //black-dot
  "../img/white-dot.png", //white-dot
];

//adding images
function addDots(dotsContainer) {
  [0, 1, 1, 1, 1].forEach((index) => {
    if (index >= 0 && index < dots.length) {
      const img = document.createElement("img");
      img.src = dots[index];
      img.className = "cursor-pointer";
      img.alt = index === 0 ? "Selected" : "Not selected";
      dotsContainer.appendChild(img);
    }
  });
}

//select all "dots-container" and add the images
document.querySelectorAll(".dots-container").forEach(addDots);
