$(function () {
  $(window).on("scroll", function () {
    var $height_nav = $(window).scrollTop();

    /*   if ($height_nav >= 960) {
      $(".ex-nav").addClass("ex-nav--fixedtop");
    } else {
      $(".ex-nav").removeClass("ex-nav--fixedtop");
    } */
  });

  const links = document.querySelectorAll('.ex-nav a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      const targetId = this.getAttribute("href"); // Get the target ID from the href
      const targetDiv = document.querySelector(targetId); // Find the target div

      if (targetDiv) {
        // Get the div's position, including padding and margin
        const rect = targetDiv.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - rect.height;
        console.log(
          "offsetTop " + offsetTop + "  <> " + (parseInt(offsetTop) + 250)
        );
        // Scroll to the div's position, ensuring smooth behavior
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav ul li a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowScroll = window.scrollY;

      if (
        windowScroll >= sectionTop &&
        windowScroll < sectionTop + (parseInt(sectionHeight) + 20)
      ) {
        links.forEach((link) => {
          if (link.getAttribute("href") === "#" + section.id) {
            link.parentNode.classList.add("active");
          } else {
            link.parentNode.classList.remove("active");
          }
        });
      }
    });
  });
});
