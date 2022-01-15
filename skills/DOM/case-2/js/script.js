"use strict";

const buttons = document.querySelectorAll("button");
const body = document.documentElement;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("theme-button")) {
      changeThemeColor(
        button.classList.contains("theme-button-light") ? "light" : "dark"
      );
    }
    if (button.classList.contains("font-button")) {
      changeFont(
        button.classList.contains("font-button-sans-serif")
          ? "sans-serif"
          : "serif"
      );
    }

    if (button.classList.contains("font-size-button")) {
      changeSize(button.classList);
    }
  });
});

function changeSize(buttonClass) {
  if (buttonClass.contains("font-size-button-s")) {
    body.dataset.themeFontSize = "";
  } else if (buttonClass.contains("font-size-button-m")) {
    body.dataset.themeFontSize = "medium";
  } else {
    body.dataset.themeFontSize = "large";
  }
}

function changeThemeColor(color) {
  body.dataset.themeName = color;
}

function changeFont(font) {
  body.dataset.themeFont = font;
}

function changeActiveButton(activeButton) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  activeButton.classList.add("active");
}
