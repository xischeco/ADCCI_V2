/***************************************************************************************************
Extension Name: \\ex-tabs
File: component-tabs
Owner: null
Version: 1.0.0
***************************************************************************************************/

$(document).ready(function () {
  var componentModifer = $(".ex-tabs");
  var activeClass = "ex-tabs__holder__btn--active";
  componentModifer.each(function (idx, tabs) {
    var tabs = $(this).find(".ex-tabs__holder__btn");
    var tabsContents = $(this).find(".ex-tabs__content").children();

    // add active class to first tab
    tabs.first().addClass(activeClass);

    tabs.on("click", function () {
      var index = $(tabs).index($(this));
      var currentTab = tabsContents.get(index);

      $(tabsContents).hide();
      $(currentTab).show();
      $(tabs).removeClass(activeClass);
      $(this).addClass(activeClass);

      // re position slick
      var slicks = $(currentTab).find("[data-slick]");
      if (slicks.length) {
        slicks.each(function () {
          var slick = $(this).slick("getSlick");
          slick && slick.resize();
          slick && slick.setPosition();
        });
      }

      // run the truncate
      $(window).trigger("run-truncate", [currentTab]);
      if (window.innerWidth <= 768) {
        const activeButton = $(
          ".ex-tabs__holder__btn.ex-tabs__holder__btn--active"
        );
        const activeButtonWidth = activeButton.outerWidth();
        const containerWidth = $(".ex-tabs__holder").width();
        const currentScroll = $(".ex-tabs__holder").scrollLeft();

        let targetScroll =
          activeButton.offset().left -
          containerWidth / 2 +
          activeButtonWidth / 2;

        if (activeButton.offset().left < containerWidth / 2) {
          // Calculate scroll to position the active button at the left edge
          targetScroll = activeButton.offset().left;
        } else {
          // Use the original calculation to center the active button
          targetScroll =
            activeButton.offset().left - containerWidth + activeButtonWidth / 2;
        }

        targetScroll = Math.min(
          targetScroll,
          containerWidth - activeButtonWidth
        );

        $(".ex-tabs__holder").animate({
          scrollLeft: targetScroll,
          duration: 500,
          easing: "easeOutQuad", // Adjust easing for desired scroll behavior
        });
      }
    });
  });

  // listen to changes in internal slick
  componentModifer.find("[data-slick]").each(function () {
    let currentTab = $(this);
    $(this).on("resize, setPosition", function () {
      // run the truncate
      $(window).trigger("run-truncate", [currentTab]);
    });
  });
});
