// scripts.js
document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MOBILE MENU
  ===================================================== */
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* =====================================================
     ACTIVE NAV LINK HIGHLIGHT
  ===================================================== */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a, #mobile-menu a");

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (
      link.href.includes(currentPath) ||
      (currentPath === "/" && link.href.includes("index"))
    ) {
      link.classList.add("active");
    }
  });

  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* =====================================================
     MULTIPLE SLIDERS
  ===================================================== */
  document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    const dotsContainer = slider.querySelector(".dots");

    let currentIndex = 0;
    let autoSlide;

    // Create navigation dots
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
      currentIndex = index;
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
      showSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);

    // Auto-slide functionality
    function startAuto() { autoSlide = setInterval(nextSlide, 5000); }
    function stopAuto() { clearInterval(autoSlide); }

    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);

    showSlide(0);
    startAuto();
  });

});