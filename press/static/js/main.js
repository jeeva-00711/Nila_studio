// toggle

document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // 🔥 ICON CHANGE
        if (navLinks.classList.contains("active")) {
            toggle.innerHTML = "X";  // close icon
        } else {
            toggle.innerHTML = "☰";  // hamburger
        }

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    }

    // 🔥 auto slide every 3 seconds
    setInterval(nextSlide, 3000);

});
// gallery
document.addEventListener("DOMContentLoaded", function () {
  let wIndex = 0;
  const wSlides = document.querySelectorAll(".w-slide");

  function updateWSlider() {
    wSlides.forEach((slide, i) => {
      slide.className = "w-slide";

      if (i === wIndex) slide.classList.add("active");
      else if (i === wIndex - 1) slide.classList.add("prev");
      else if (i === wIndex + 1) slide.classList.add("next");
      else if (i < wIndex) slide.classList.add("hide-left");
      else slide.classList.add("hide-right");
    });
  }

  window.wNext = function () {
    wIndex = (wIndex + 1) % wSlides.length;
    updateWSlider();
  };

  window.wPrev = function () {
    wIndex = (wIndex - 1 + wSlides.length) % wSlides.length;
    updateWSlider();
  };

  updateWSlider();
});