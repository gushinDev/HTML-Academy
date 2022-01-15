/* JavaScript код */
const themeBtns = document.querySelectorAll(".theme-button");
const page = document.querySelector("html");
const viewBtns = document.querySelectorAll(".card-view-button");
const cards = document.querySelector(".cards");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", changeTheme);
});

viewBtns.forEach((btn) => {
  btn.addEventListener("click", changeView);
});

function changeView() {
  changeCardsView(this);
  changeActiveButton(this);
}

function changeCardsView(currentBtn) {
  const btnValue = currentBtn.querySelector("span").textContent;
  if (btnValue === "Компактный список") {
    changeCardsClassList("compact", "standard");
  } else if (btnValue === "Список") {
    changeCardsClassList("standard", "compact");
  } else {
    changeCardsClassList();
  }
}

function changeCardsClassList(addClass = undefined, removeClass) {
  if (!addClass) {
    cards.classList.remove("compact");
    cards.classList.remove("standard");
    return;
  }
  cards.classList.add(addClass);
  cards.classList.remove(removeClass);
}

function changeTheme() {
  const btnColor = this.querySelector("span").textContent;

  changeActiveButton(this);
  changeBackground(btnColor);
}

function changeBackground(btnColor) {
  if (btnColor === "Светлая") {
    page.dataset.themeName = "";
  } else if (btnColor === "Темная") {
    page.dataset.themeName = "dark";
  } else {
    page.dataset.themeName = "texture";
  }
}

function changeActiveButton(activeBtn) {
  const changingButtons = activeBtn.classList.contains("card-view-button")
    ? viewBtns
    : themeBtns;

  changingButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}
