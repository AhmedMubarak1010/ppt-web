document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const sideNav = document.getElementById("side-nav");
  const mainContent = document.getElementById("main-content");

  console.log(toggleBtn, sideNav, mainContent);

  toggleBtn.addEventListener("click", () => {
    sideNav.classList.toggle("open");
    mainContent.classList.toggle("open");
  });
});
