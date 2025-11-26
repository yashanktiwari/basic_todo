var dynamicImage = document.getElementById("dynamicImage");
var deleteButton = document.getElementById("deleteButton");

var images = Array.from(document.getElementsByClassName("image"));

function updateDeleteButton() {
  deleteButton.style.display = dynamicImage.getAttribute("src") == "" ? "none" : "block";
}

updateDeleteButton();

images.forEach((image) => {
  image.addEventListener("click", () => {
    console.log(image.dataset.src);
    dynamicImage.src = image.dataset.src;
    updateDeleteButton();
  });
});

deleteButton.addEventListener("click", () => {
  dynamicImage.src = "";
  updateDeleteButton();
});
