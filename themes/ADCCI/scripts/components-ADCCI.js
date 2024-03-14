/***************************************************************************************************
Extension Name: \\ADCloud
File: component-ADCloud
Owner: Manikandan
Version: 1.0.0
***************************************************************************************************/
$(document).ready(function () {
  const spans = $(".counter span");

  for (const span of spans) {
    const from = Number(span.dataset.from);
    const to = Number(span.dataset.to);
    const refreshInterval = Number(span.dataset.refreshInterval);
    let speed = Number(span.dataset.speed);

    let currentValue = from;
    const updateValue = () => {
      if (currentValue < to) {
        currentValue++;
      } else if (currentValue > to) {
        currentValue--;
      } else {
        clearInterval(interval);
      }

      span.textContent = currentValue;
    };

    const interval = setInterval(updateValue, refreshInterval);
  }
  //ex - inner - header_scrolled;
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var lastScrollTop = 0;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      if (scrollTop <= 30) {
        $(".ex-inner-header").removeClass("ex-inner-header_scrolled");
      } else {
        $(".ex-inner-header").addClass("ex-inner-header_scrolled");
      }
      console.log("Scrolling Down ", scrollTop);
    } else if (scrollTop < lastScrollTop) {
      // Scrolling up
      console.log("Scrolling Up ", scrollTop);
    }

    lastScrollTop = scrollTop;
  });

  $(document).on(
    {
      mouseenter: function () {
        var whichArrow = $(this).attr("class");
        if (whichArrow.trim == " highlights-prev-arrow") {
          var imgSrc = $(".ex-image-highlights")
            .find(".slick-slide.slick-current.slick-active")
            .prev()
            .find("img")
            .attr("src");
          $(this).attr("style", "left:50px");
          $(this).find(".arrowIcon").addClass("d-none");
          $(this).find(".hover_image").removeClass("d-none");
          if (imgSrc == undefined) {
            imgSrc = $(".ex-image-highlights .slick-slide:last-child")
              .next()
              .find("img")
              .attr("src");
          }
          $(this).find(".hover_image img").attr("src", imgSrc);
        } else {
          var imgSrc = $(".ex-image-highlights")
            .find(".slick-slide.slick-current.slick-active")
            .next()
            .find("img")
            .attr("src");
          $(this).attr("style", "right:50px");
          $(this).find(".arrowIcon").addClass("d-none");
          $(this).find(".hover_image").removeClass("d-none");
          if (imgSrc == undefined) {
            imgSrc = $(".ex-image-highlights .slick-slide:first-child")
              .next()
              .find("img")
              .attr("src");
          }
          $(this).find(".hover_image img").attr("src", imgSrc);
          console.log("imgSrc  " + imgSrc);
        }
      },
      mouseleave: function () {
        $(this).removeAttr("style");
        $(".arrowIcon").removeClass("d-none");
        $(".hover_image").addClass("d-none");
        $(".hover_image img").removeAttr("src", "");
      },
    },
    ".ex-image-highlights__navigation .icon"
  );
  /* function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".ex-inner-header").offset().top;
    var header_height = $(".info-section").outerHeight();
    $(".ex-inner-header").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function () {
    parallax_height();
  });
  $(window).resize(function () {
    parallax_height();
  });
 */
  /* const numberElement = $(".counter span");
  const from = parseInt($(numberElement).attr("data-from"));
  const to = parseInt($(numberElement).attr("data-to"));
  const refreshInterval = parseInt(
    $(numberElement).attr("data-refresh-interval")
  );
  const speed = parseInt($(numberElement).attr("data-speed"));

  let currentValue = from;

  function updateNumber() {
    if (currentValue < to) {
      currentValue++;
      numberElement.textContent = currentValue;
      numberElement.html(currentValue);
    } else {
      clearInterval(updateInterval);
    }
  }

  const updateInterval = setInterval(updateNumber, refreshInterval); */
});
