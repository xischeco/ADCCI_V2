/***************************************************************************************************
Extension Name: \\ADCCI-NEW
File: component-ADCCI-NEW
Owner: Manikandan
Version: 1.0.0
***************************************************************************************************/

$(function () {
  redirectToSearchBlock();
  if ($(window).innerWidth() <= 768) {
    scrollShowActiveLi();
    $(".ex-nav")
      .addClass("px-0")
      .parents()
      .find(".column-splitter .col-lg-12")
      .addClass("px-0")
      .find(".row-splitter")
      .addClass("pr-0");
  }
  if ($(".slick-slider.news-slider")) {
    $(".slick-slider.news-slider  .ex-news-cards").each(function (
      newseven_index
    ) {
      //  console.log(newseven_index + " --  " + (newseven_index % 2));

      if (newseven_index % 2 === 1) {
        // console.log("news-slider" + newseven_index);
        const image_block = $(this)
          .children()
          .find(".ex-news-cards__img")
          .first();
        const card_tag = $(this).children().find(".card-tag").first();

        if (
          $(".ex-news-cards").children().find(".card-tag").next().length == 0
        ) {
          $(this)
            .children()
            .find(".ex-news-cards__img")
            .insertAfter($(this).children().find(".card-tag"));
          $(this)
            .children()
            .find(".ex-news-cards__img")
            .removeClass("mb-5")
            .addClass("mt-4");
        }
      }
    });
  }
  if ($(".slick-slider.events-slider")) {
    $(".slick-slider.events-slider .ex-news-cards").each(function (index) {
      /* var firstLevel = [1, 5, 10, 15, 20];
      var secondLevel = [2, 6, 11, 16, 21];
      var thirdLevel = [3, 7, 12, 17, 22];
      var fourthLevel = [4, 8, 13, 18, 23]; */

      var firstLevel = [1, 6, 11, 16, 21];
      var secondLevel = [2, 5, 10, 15, 20];
      var thirdLevel = [3, 8, 13, 18, 23];
      var fourthLevel = [4, 7, 12, 17, 23];

      if (firstLevel.includes(index + 1)) {
        $(this).find(".ex-news-cards__img").addClass("event-height1");
      }
      if (secondLevel.includes(index + 1)) {
        $(this)
          .find(".ex-news-cards__img")
          .removeClass("event-height1")
          .addClass("event-height2");
      }
      if (thirdLevel.includes(index + 1)) {
        $(this)
          .find(".ex-news-cards__img")
          .removeClass("event-height1")
          .addClass("event-height3");
      }
      if (fourthLevel.includes(index + 1)) {
        $(this)
          .find(".ex-news-cards__img")
          .removeClass("event-height1")
          .addClass("event-height4");
      }
    });
  }
  if ($(".opportunies-slider ")) {
    var even_index = 0;
    $(".opportunies-slider .twocol-imagewrapper").each(function () {
      /*  console.log(even_index + " --  " + (even_index % 2)); */
      if (even_index % 2 === 0) {
        // Even-numbered occurrence, add your desired class
        $(this).removeClass("flex-lg-row").addClass("flex-lg-row-reverse");
      }
      even_index++;
    });
  }
  $(".mega_menu_dropdown").on("mouseenter", function () {
    const imgPath = $(this).find(".mega_menu_item").attr("default_path");
    $(this).find(".mega_menu_item img").attr("src", imgPath);
  });
  $(".mega_menu_wrapper .mega_menu_item ").each(function () {
    console.log("as");
    var default_image = $(this).children().attr("src");
    $(this).attr("default_path", default_image);
  });
  var megamenu_default = $(".mega_menu_item img").attr("src");
  $(".megamenulist li")
    .on("mouseenter", function () {
      const img = $(".mega_menu_item img");
      var imgattrsrc = $(this).attr("imgsrc");
      img.fadeOut(200, function () {
        $(this).attr("src", imgattrsrc);
        $(this).fadeIn(200);
        $(this).addClass("hoverd");
      });
    })
    .on("mouseleave", function () {
      megamenu_default = $(this)
        .parent()
        .parent()
        .parent()
        .children()
        .find(".mega_menu_item")
        .attr("default_path");
      $(".mega_menu_item img")
        .attr("src", megamenu_default)
        .removeClass("hoverd");
    });
  /*   $(".fancybox").fancybox({});
  if ($(window).width() >= 768 && $(window).width() <= 992) {
    setTimeout(function () {
      slickify();
    }, 2000);
  } */
  //counter animation in homepage
  var lastScrollTop = 0,
    delta = 5;
  $(window).on("scroll", function () {
    var nowScrollTop = $(this).scrollTop();
    if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
      if (nowScrollTop > lastScrollTop) {
        // ACTION ON
        // SCROLLING DOWN
        // console.log("scroll down " + nowScrollTop);
      } else {
        // ACTION ON
        // SCROLLING UP
      }
      lastScrollTop = nowScrollTop;
    }
    if ($(".counter_container")) {
      var scrollDistance = $(window).scrollTop();
      const triggerThreshold = $(window).height() * 0.8; // 80% of viewport height
      //  const containerTop = $(".counter_container").offset().top;
      var containerTop = ($(".counter_container").offset() || { top: NaN }).top;
      if (isNaN(containerTop)) {
        containerTop = 0;
      } else {
        console.log("containerTop <> " + containerTop);
      }
      const scrollTop = $(window).scrollTop();

      if (scrollTop + triggerThreshold >= containerTop) {
        // Call your function here
        counterActivate();
      }
      /* $(".counter_container").each(function (i) {
         
        if ($(this).position().top <= scrollDistance) {
          // Call your function here
          counterActivate();
        }
      }); */
    }
  });
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
function scrollShowActiveLi() {
  const activeItem = $(".component.navigation.ex-nav li.active");
  const scrollContainer = $(".component.navigation.ex-nav"); // Replace with actual scrollable container

  if (activeItem.length) {
    const activeItemOffset = activeItem.offset().left;
    const scrollContainerWidth = scrollContainer.width();

    // Check if the active item is outside the visible area
    if (
      activeItemOffset < scrollContainer.scrollLeft() ||
      activeItemOffset + activeItem.width() >
        scrollContainer.scrollLeft() + scrollContainerWidth
    ) {
      // Calculate the scroll position to center the active item
      const scrollTo =
        activeItemOffset -
        (scrollContainerWidth - 100 - activeItem.width()) / 2.5;

      // Animate the scroll smoothly
      scrollContainer.animate(
        {
          scrollLeft: scrollTo,
        },
        500
      ); // Adjust animation duration as needed
    }
  }
}
function redirectToSearchBlock() {
  const urlString = "Search-Results"; // Replace with the string you want to find in the URL
  const currentUrl = window.location.href;

  if (currentUrl.indexOf(urlString) !== -1) {
    const targetDiv = $(".global_search_result")[0]; // Get the first element
    if (targetDiv) {
      // Check if element exists
      $("html, body").animate(
        {
          scrollTop: targetDiv.offsetTop - 200,
        },
        1000
      ); // Adjust scroll speed (milliseconds) as needed
    }
    // yourFunction(); // Replace with the function you want to execute
  }
}

function calculateDifferences(numbers) {
  // 1. Find the lowest number
  const lowestNumber = Math.min(...numbers);

  // 2. Calculate differences and return results
  return numbers.map((number) => number - lowestNumber);
}
const counterValues = [];
$(".counter span").each(function () {
  var value;
  if ($(this).text().indexOf("+") !== -1 || $(this).text().includes("+")) {
    value = $(this).text().slice(0, -1).trim(); // Extract and trim the text content
  } else {
    value = $(this).text().trim(); // Extract and trim the text content
  }
  counterValues.push(value);
});
const differences = calculateDifferences(counterValues);
/* 
console.log("Original numbers:", counterValues);
console.log("Differences to reach the lowest number:", differences); */
$(".counter span").each(function (indexc) {
  var value;
  if ($(this).text().indexOf("+") !== -1 || $(this).text().includes("+")) {
    $(this).attr("data-from", differences[indexc]);
  } else {
    $(this).attr("data-from", differences[indexc]);
  }
});
function counterActivate() {
  const counterSpan = $(".counter span");

  for (const counterVal of counterSpan) {
    const from = Number(counterVal.dataset.from);
    const to = Number(counterVal.dataset.to.replace(/\+$/, "")); // Efficiently remove "+" using regex
    const refreshInterval = Number(counterVal.dataset.refreshInterval);
    let speed = Number(counterVal.dataset.speed);

    let currentValue = from;
    const updateValue = () => {
      if (currentValue < to) {
        currentValue++;
      } else if (currentValue > to) {
        currentValue--;
      } else {
        clearInterval(interval);
      }

      // Consistent "+" handling regardless of initial content
      counterVal.textContent = currentValue;
      if (to === currentValue) {
        counterVal.textContent = counterVal.textContent + "+";
      }
    };
    console.log("refreshInterval  " + refreshInterval);
    const interval = setInterval(updateValue, 300);
  }

  setTimeout(function () {
    $(window).off("scroll");
  }, 1000);
}

/* function counterActivate() {
  const counterSpan = $(".counter span");

  for (const counterVal of counterSpan) {
    const from = Number(counterVal.dataset.from);
    const to = Number(counterVal.dataset.to);
    const refreshInterval = Number(counterVal.dataset.refreshInterval);
    let speed = Number(counterVal.dataset.speed);

    let currentValue = from;
    if (from.indexOf("+") != -1) {
      currentValue = currentValue.slice(0, -1);
    }
    const updateValue = () => {
      if (currentValue < to) {
        currentValue++;
      } else if (currentValue > to) {
        currentValue--;
      } else {
        clearInterval(interval);
      }
      if (from.indexOf("+") != -1) {
        counterVal.textContent = currentValue;
      } else {
        counterVal.textContent = currentValue + "+";
      }
    };
    console.log(
      "currentValue " + currentValue + "  updateValue  " + updateValue
    );
    const interval = setInterval(updateValue, refreshInterval);
  }
  setTimeout(function () {
    $(window).off("scroll");
  }, 1000);
} */
