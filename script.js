document.querySelectorAll(".image-wrap img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoom");
    });
  });
  