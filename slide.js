$(function(){
  $(".slideshow-zoom li").css({"position":"relative"});
  $(".slideshow-zoom li").hide().css({"position":"absolute","top":0,"left":0});
  setInterval(function(){
    var $active = $(".slideshow-zoom li.zoom");
    var $next = $active.next("li").length?$active.next("li"):$(".slideshow-zoom li:first");
    $active.fadeOut(2000).removeClass("zoom");
    $next.fadeIn(2000).addClass("zoom");
  },2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const yearSections = document.querySelectorAll(".year-section");

  yearSections.forEach((section) => {
    const slides = section.querySelectorAll(".slide-item");
    const prevBtn = section.querySelector(".slide-btn.prev");
    const nextBtn = section.querySelector(".slide-btn.next");
    const dotsContainer = section.querySelector(".slide-dots");

    if (!slides.length) return;

    let currentIndex = 0;

    // ドットナビゲーションの動的生成
    if (dotsContainer) {
      slides.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (idx === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll(".dot") : [];

    function updateSlides() {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === currentIndex);
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlides();
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
      });
    }
  });
})