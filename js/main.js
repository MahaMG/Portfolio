
function menuToggle(){
    const menuToggle = document.querySelector('.menuToggle');
    const sidebar = document.querySelector(".sidebar");
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
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

    