var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modalEle.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modalEle) {
    modalEle.style.display = "none";
  }
};
