const chooseButton = document.querySelectorAll(".choose-btn");
const contentItem = document.querySelectorAll(".content-item");

chooseButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const button = target.dataset.button;
    const activeButton = document.querySelectorAll(`.${button}`);

    chooseButton.forEach((item) => {
      item.classList.remove("choose-btn--active");
    });

    target.classList.add("choose-btn--active");

    contentItem.forEach((item) => {
      item.classList.remove("content-item--active");
    });

    activeButton.forEach((item) => {
      item.classList.add("content-item--active");
    });
  });
});
