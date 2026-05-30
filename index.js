// Mobile menu toggle
function toggleMenu() {
  let nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

// Close menu when link clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("open");
  });
});

// Sticky header shadow on scroll
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Smooth fade in on scroll
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".menu-card, .location-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
