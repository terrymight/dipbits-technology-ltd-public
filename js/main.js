document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileToggle && mobileMenu) {
    // Toggle Mobile Menu
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.src = "/icons/x.svg";
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.src = "/icons/menu.svg";
      }
    });
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('bg-background/80', 'backdrop-blur-lg', 'border-b', 'border-border');
    } else {
      nav?.classList.remove('bg-background/80', 'backdrop-blur-lg', 'border-b', 'border-border');
    }
  });

  // Close menu when clicking a link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      if (menuIcon) menuIcon.src = "/icons/menu.svg";
    });
  });
});