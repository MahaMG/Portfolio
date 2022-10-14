
function menuToggle(){
    const menuToggle = document.querySelector('.menuToggle');
    const sidebar = document.querySelector(".sidebar");
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
}

// ********************************

const toTop = document.querySelector("#to-top");

toTop.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
    