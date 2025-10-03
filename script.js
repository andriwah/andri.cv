document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const toggleIcon = document.getElementById("toggleIcon");
  const navbar = document.getElementById("navbar");
  const html = document.documentElement;
  const title = navbar.querySelector("h2");
  const menuItems = document.getElementById("menuItems");
  const verticalLine = document.getElementById("verticalLine");
  const branchLines = document.getElementById("branchLines");

  // Dark Mode
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    html.classList.add("dark");
    toggleIcon.textContent = "☀️";
  } else {
    html.classList.remove("dark");
    toggleIcon.textContent = "🌙";
  }

  function toggleDarkMode() {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      toggleIcon.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      toggleIcon.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  }

  darkModeToggle.addEventListener("click", toggleDarkMode);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          html.classList.add("dark");
          toggleIcon.textContent = "☀️";
        } else {
          html.classList.remove("dark");
          toggleIcon.textContent = "🌙";
        }
      }
    });

  setTimeout(() => {
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  }, 100);

  // Scroll detection
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add("border-gray-300", "dark:border-gray-700");
    } else {
      navbar.classList.remove("border-gray-300", "dark:border-gray-700");
    }
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Desktop menu hover logic dengan approach yang lebih robust
  let isMenuVisible = false;
  let hideTimeout = null;

  function showMenu() {
    if (window.innerWidth >= 768) {
      // Clear any pending hide timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      if (!isMenuVisible) {
        isMenuVisible = true;

        // Show menu items with proper height
        menuItems.style.height = "auto";
        menuItems.style.marginTop = "12px";
        menuItems.style.opacity = "1";
        menuItems.style.transform = "translateY(0)";
        menuItems.style.pointerEvents = "auto";

        // Show vertical line
        verticalLine.style.height = "10px";
        verticalLine.style.opacity = "1";
        verticalLine.style.transform = "scaleY(1)";

        // Show branch lines
        branchLines.style.height = "auto";
        branchLines.style.opacity = "1";
        branchLines.style.transform = "scaleX(1)";
      }
    }
  }

  function hideMenuWithDelay() {
    if (window.innerWidth >= 768) {
      // Clear any existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      // Set a longer delay before hiding
      hideTimeout = setTimeout(() => {
        // Double check that mouse is not hovering over any relevant element
        if (
          !title.matches(":hover") &&
          !menuItems.matches(":hover") &&
          !verticalLine.matches(":hover") &&
          !branchLines.matches(":hover")
        ) {
          hideMenuNow();
        }
      }, 200); // Increased delay to 200ms
    }
  }

  function hideMenuNow() {
    if (window.innerWidth >= 768) {
      isMenuVisible = false;

      // Hide menu items by collapsing height
      menuItems.style.height = "0px";
      menuItems.style.marginTop = "0px";
      menuItems.style.opacity = "0";
      menuItems.style.transform = "translateY(-8px)";
      menuItems.style.pointerEvents = "none";

      // Hide vertical line
      verticalLine.style.height = "0px";
      verticalLine.style.opacity = "0";
      verticalLine.style.transform = "scaleY(0)";

      // Hide branch lines
      branchLines.style.height = "0px";
      branchLines.style.opacity = "0";
      branchLines.style.transform = "scaleX(0)";
    }
  }

  // Event listeners yang lebih robust
  title.addEventListener("mouseenter", showMenu);
  title.addEventListener("mouseleave", hideMenuWithDelay);

  menuItems.addEventListener("mouseenter", showMenu);
  menuItems.addEventListener("mouseleave", hideMenuWithDelay);

  // Add hover listeners to the connecting lines as well
  verticalLine.addEventListener("mouseenter", showMenu);
  verticalLine.addEventListener("mouseleave", hideMenuWithDelay);

  branchLines.addEventListener("mouseenter", showMenu);
  branchLines.addEventListener("mouseleave", hideMenuWithDelay);

  // Reset saat resize
  window.addEventListener("resize", () => {
    // Clear any pending timeouts
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }

    if (window.innerWidth < 768) {
      // Show menu dan garis pada mobile dengan height penuh
      menuItems.style.height = "auto";
      menuItems.style.marginTop = "12px";
      menuItems.style.opacity = "1";
      menuItems.style.transform = "translateY(0)";
      menuItems.style.pointerEvents = "auto";

      verticalLine.style.height = "10px";
      verticalLine.style.opacity = "1";
      verticalLine.style.transform = "scaleY(1)";

      branchLines.style.height = "auto";
      branchLines.style.opacity = "1";
      branchLines.style.transform = "scaleX(1)";

      isMenuVisible = true;
    } else {
      // Hide menu dan garis pada desktop (akan muncul saat hover)
      hideMenuNow();
    }
  });

  // Initialize menu state
  if (window.innerWidth >= 768) {
    hideMenuNow();
  } else {
    // Show semua pada mobile dengan height penuh
    menuItems.style.height = "auto";
    menuItems.style.marginTop = "12px";
    verticalLine.style.height = "10px";
    verticalLine.style.opacity = "1";
    verticalLine.style.transform = "scaleY(1)";
    branchLines.style.height = "auto";
    branchLines.style.opacity = "1";
    branchLines.style.transform = "scaleX(1)";
    isMenuVisible = true;
  }
});
