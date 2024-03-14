/*  $("[megamenu-link]").on("click", function () {
    var linkAttrValue = $(this).attr("megamenu-link");
    $("[ megamenu-block='" + linkAttrValue + "']").toggleClass("showmenu");
    console.log("sd");
  }); */

$(function ($) {
  var $height = $(window).scrollTop();
  $("#header").removeClass("container-fluid");
  setPositionFixed($height);
  $(window).on("scroll", function () {
    var $height = $(window).scrollTop();
    setPositionFixed($height);
  });

  $(".navTrigger").on("click", function () {
    if (
      $(".ex-headerv2").hasClass("innerPage") ||
      $(".ex-headerv2").hasClass("innerpage")
    ) {
      $(".ex-headerv2.innerpage").toggleClass("menuActiive");
    }

    $(this).toggleClass("active");
    $(".ex-headerv2__right-section__upper-navigation-menu").toggleClass(
      "d-none"
    );
    $(".ex-headerv2__wrapper__level2").toggleClass("menu-open");
  });
  $(".mega_menu_dropdown").hover(function () {
    if ($(this).hasClass("has_dropdown")) {
      $(".overlay").toggleClass("overlay--active");
    }
  });

  if ($(window).width() < 992) {
    // Keep track of the currently opened item
    var openedItem = null;

    $(".mega_menu_dropdown.has_dropdown").on("click", function (e) {
      // Check if the clicked item is already opened
      if (openedItem && openedItem[0] === this) {
        // Close the clicked item
        $(this).children("a").children("i").removeClass("rotate180");
        $(this).children(".mega_menu").removeClass("mobilemenu").slideUp();
        openedItem = null; // Reset the openedItem variable
      } else {
        // Close the currently opened item if exists
        if (openedItem) {
          openedItem.children("a").children("i").removeClass("rotate180");
          openedItem.children(".mega_menu").removeClass("mobilemenu").slideUp();
        }

        // Open the clicked item
        $(this).children("a").children("i").addClass("rotate180");
        $(this).children(".mega_menu").addClass("mobilemenu").slideDown();
        openedItem = $(this); // Update the openedItem variable
      }
    });
  }
  //search
  $(".ex-headerv2__right-section__search-icon").on("click", function () {
    $(".search-box").addClass("search-box--active");
    $(".ex-headerv2__left-section").css("z-index", "0");
    $(".ex-headerv2__right-section__search-dismiss").show();
    $(".ex-headerv2__right-section__search-icon").hide();
  });

  $(".ex-headerv2__right-section__search-dismiss").on("click", function () {
    $(".search-box").removeClass("search-box--active");
    $(".ex-headerv2__left-section").css("z-index", "90");
    $(".ex-headerv2__right-section__search-dismiss").hide();
    $(".ex-headerv2__right-section__search-icon").show();
  });
});

function setPositionFixed(heightval) {
  $("#header").removeClass("position-fixed");
  $(".ex-headerv2").addClass("position-fixed");
  if (
    $(".ex-headerv2").hasClass("innerPage") ||
    $(".ex-headerv2").hasClass("innerpage")
  ) {
    $(".ex-headerv2")
      .removeClass("position-fixed")
      .addClass("position-relative");
  }
  if (heightval > 260) {
    if (
      $(".ex-headerv2").hasClass("innerPage") ||
      $(".ex-headerv2").hasClass("innerpage")
    ) {
      $(".ex-headerv2")
        .removeClass("position-relative")
        .addClass("position-absolute");
    } else {
      $(".ex-headerv2")
        .removeClass("position-fixed")
        .addClass("position-absolute");
    }
  } else {
    if (
      $(".ex-headerv2").hasClass("innerPage") ||
      $(".ex-headerv2").hasClass("innerpage")
    ) {
      $(".ex-headerv2")
        .addClass("position-relative")
        .removeClass("position-absolute");
    } else {
      $(".ex-headerv2")
        .addClass("position-fixed")
        .removeClass("position-absolute");
    }
  }
}
/* function setPositionFixed(heightval) {
  if ($(".ex-headerv2").hasClass("innerPage")) {
    $("#header").removeClass("position-fixed").addClass("position-relative");
  }
  if (heightval > 260) {
    if ($(".ex-headerv2").hasClass("innerPage")) {
      $("#header")
        .removeClass("position-relative")
        .addClass("position-absolute");
    } else {
      $("#header").removeClass("position-fixed").addClass("position-absolute");
    }
  } else {
    if ($(".ex-headerv2").hasClass("innerPage")) {
      $("#header")
        .addClass("position-relative")
        .removeClass("position-absolute");
    } else {
      $("#header").addClass("position-fixed").removeClass("position-absolute");
    }
  }
} */
/*   $(window).scroll(function () {
    checkScrolled();
  });

  checkScrolled(); */
