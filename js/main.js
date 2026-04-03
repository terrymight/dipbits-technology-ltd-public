document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

  if (!navbar || !toggle || !mobileMenu || !icon) return;

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    icon.textContent = mobileMenu.classList.contains("active") ? "✕" : "☰";
  });
});