window.onload = function () {
  const videoThumbnails = document.querySelectorAll("#dismissible");
  const visibleCount = 1;

  videoThumbnails.forEach((thumbnail, index) => {
    if (index >= visibleCount) {
      thumbnail.style.display = "none";
    }
  });

  const showAllButton = document.createElement("button");
  showAllButton.textContent = "Show All Videos";
  showAllButton.style.position = "fixed";
  showAllButton.style.bottom = "20px";
  showAllButton.style.right = "20px";
  showAllButton.style.padding = "10px";
  showAllButton.style.backgroundColor = "#ff0000";
  showAllButton.style.color = "#fff";
  showAllButton.style.border = "none";
  showAllButton.style.cursor = "pointer";

  document.body.appendChild(showAllButton);

  showAllButton.addEventListener("click", () => {
    videoThumbnails.forEach((thumbnail) => {
      thumbnail.style.display = "block";
    });
    showAllButton.style.display = "none";
  });
};
