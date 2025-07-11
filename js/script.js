 // Initialize AOS
      AOS.init({
        duration: 1000,
        once: true,
      });

      // Smooth Scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Loader Timeout
      window.addEventListener("load", () => {
        setTimeout(() => {
          const loaderContainer = document.querySelector(".loader-container");
          loaderContainer.style.display = "none"; // Hide the loader after 20 seconds
        }, 300); // 20000 milliseconds = 20 seconds
      });

      //navbar -------------------------------------------
      const menuBtn = document.querySelector(".menu-btn");
      const navLinks = document.querySelector(".nav-links");
      const dropdowns = document.querySelectorAll(".dropdown");

      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuBtn.querySelector("i").classList.toggle("fa-bars");
        menuBtn.querySelector("i").classList.toggle("fa-times");
      });

      document.querySelectorAll(".dropdown-toggle").forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-container")) {
          navLinks.classList.remove("active");
          menuBtn.querySelector("i").classList.add("fa-bars");
          menuBtn.querySelector("i").classList.remove("fa-times");
          dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
        }
      });

      // Resize handler
      window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
          navLinks.classList.remove("active");
          menuBtn.querySelector("i").classList.add("fa-bars");
          menuBtn.querySelector("i").classList.remove("fa-times");
          dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
        }
      });

      //counter start
      // Counter Animation

      function animateCounter(element) {
        const target = parseInt(element.getAttribute("data-count"));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current);
          }
        }, 16);
      }

      // Intersection Observer for counter animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counters = entry.target.querySelectorAll(".stat-number");
              counters.forEach((counter) => animateCounter(counter));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      // Observe stats container
      observer.observe(document.querySelector(".data-container"));

      //counter animation
      //counter end