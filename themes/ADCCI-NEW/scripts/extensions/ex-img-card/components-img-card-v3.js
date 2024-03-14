/***************************************************************************************************
Extension Name: \\ex-img-card
File: component-img-card
Owner: Mahmoud
Version: 1.0.0
***************************************************************************************************/

$(document).ready(function () {});
if ($(".ex-img-card-v3")) {
  $(".item-container-desktop .item-wrapper")
    .on("mouseenter", function () {
      // Add classes to current item and its content_description
      $(this).addClass("expand active");
      $(this).find(".content_description").addClass("active");

      // Hide and remove active state from other items and their descriptions
      $(".item-wrapper")
        .not(this)
        .addClass("hideContent")
        .removeClass("active");
      $(".item-wrapper")
        .not(this)
        .find(".content_description")
        .removeClass("active");
    })
    .on("mouseleave", function () {
      // Remove classes on mouseout
      $(this).removeClass("expand active");
      $(this).find(".content_description").removeClass("active");

      $(".item-wrapper").removeClass("hideContent");
    });
  /* const wrappers = document.querySelectorAll(
    ".item-container-desktop .item-wrapper"
  );
  const wrapArray = Array.from(wrappers); */

  /*  wrapArray.forEach((item) => { */
  /*   $(".item-container-desktop .item-wrapper").each(function (idx, item) {
    let text = item.childNodes;
    if (item.childNodes.length > 1) {
      text = item.childNodes[1];
    }

    item.addEventListener("mouseover", function () {
      wrapArray.filter((others) => {
        others.classList.remove("hideContent");
        if (others !== item) {
          others.classList.remove("expand");
          others.classList.add("hideContent");
        }
      });
      this.classList.add("expand");
      text.classList.add("active");
    });

    item.addEventListener("mouseout", function () {
      this.classList.remove("expand");
      text.classList.remove("active");
      wrapArray.filter((others) => {
        others.classList.remove("hideContent");
      });
    });
  }); */
}
