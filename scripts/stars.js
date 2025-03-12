const paths = [//stars images
  "../img/full-star.png", //full-star
  "../img/half-star.png", //half-star
  "../img/star.png", //star
];

//adding images
function addStars(container) {
  [0, 0, 0, 1, 2].forEach((index) => {
    const img = document.createElement("img");
    img.src = paths[index];
    img.className = "cursor-pointer";
    img.alt = `${
      index === 0
        ? "Full star"
        : index === 1
        ? "Half star"
        : "Star"
    } image`;
    container.appendChild(img);
  });
}

//select all "image-container" and add the images
document.querySelectorAll(".image-container").forEach(addStars);
