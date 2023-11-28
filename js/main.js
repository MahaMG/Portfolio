
function menuToggle() {
  const menuToggle = document.querySelector(".menuToggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");

  document.querySelector(".nav-links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      menuToggle.classList.remove("active");
      sidebar.classList.remove("active");
    }
  });
}

// ********************************

document.querySelector(".cards").onmousemove = e => {
  for (const card of document.querySelectorAll(".card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
}

// ********************************

const toTop = document.querySelector(".top-btn");

toTop.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

    