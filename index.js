const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const navLinks = document.querySelectorAll(".nav-list a");
const chatButton = document.querySelector(".chat-button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

chatButton.addEventListener("click", function (e) {
  e.preventDefault();
  const targetSection = document.querySelector(this.getAttribute("href"));
  targetSection.scrollIntoView({
    behavior: "smooth",
  });
});
