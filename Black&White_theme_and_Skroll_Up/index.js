const skroll = document.getElementById("scrollToTop");

window.onscroll = () => {
  if (window.scrollY > 700) {
    skroll.classList.remove("hide");
  } else if (window.scrollY < 700) {
    skroll.classList.add("hide");
  }
};

skroll.addEventListener("click", clickScrollTop);

function clickScrollTop() {
  window.scrollTo(0, 0);
}

const themeToggle = document.getElementById("themeToggle");
const textAll = document.querySelectorAll(".text");

textAll.forEach((text) => {
  themeToggle.addEventListener("change", () => {
    if (text.classList.contains("black")) {
      text.classList.remove("black");
    } else {
      text.classList.add("black");
    }
  });
});
