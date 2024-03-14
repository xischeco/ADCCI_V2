/***************************************************************************************************
Extension Name: \\ex-accordion
File: component-accordion
Owner: Manikandan.R
Version: 1.0.0
***************************************************************************************************/
$(".ex-accordionv2__item__header").on("mouseenter", function () {
  const $currentItem = $(this).parent();
  const $otherItems = $(".ex-accordionv2__item").not($currentItem);

  $otherItems.find(".ex-accordionv2__item__content").slideUp();
  $otherItems.find(".icon__wrapper .accordion--expand").show();
  $otherItems.find(".icon__wrapper .accordion--collapse").hide();

  $currentItem.find(".ex-accordionv2__item__content").slideDown();
  $currentItem.find(".icon__wrapper .accordion--expand").hide();
  $currentItem.find(".icon__wrapper .accordion--collapse").show();

  console.log("mouseEnter");
});
$(document).on("mouseleave", ".ex-accordionv2", function (event) {
  console.log("Mouse left the element");
  $(".ex-accordionv2").find(".ex-accordionv2__item__content").slideUp();
  $(".ex-accordionv2").find(".icon__wrapper .accordion--expand").show();
  $(".ex-accordionv2").find(".icon__wrapper .accordion--collapse").hide();
});

/* $(".ex-accordionv2__item").on("mouseleave", function () {
  $(this).find(".ex-accordionv2__item__content").slideUp();
  $(this).find(".icon__wrapper .accordion--expand").show();
  $(this).find(".icon__wrapper .accordion--collapse").hide();
  console.log("mouseLeave");
}); */
/* $(".ex-accordionv2__item").on("mouseenter", function () {
  $(this).addClass("expanded");
  $(this).find(".icon__wrapper .accordion--expand").hide();
  $(this).find(".icon__wrapper .accordion--collapse").show();
});

$(".ex-accordionv2__item").on("mouseleave", function () {
  $(this).removeClass("expanded");
  $(this).find(".icon__wrapper .accordion--expand").show();
  $(this).find(".icon__wrapper .accordion--collapse").hide();
}); */
/* $('[data-toggle="collapse"]').on("mouseenter", function () {
  $(".accordion--collapse").hide();
  $(".accordion--expand").show();
  $(this).parents(".ex-accordionv2__item").find(".collapse").collapse("show");

  $(this)
    .parent()
    .children(".icon__wrapper")
    .children(".accordion--collapse")
    .show();
  $(this)
    .parent()
    .children(".icon__wrapper")
    .children(".accordion--expand")
    .hide();
});

$(".ourmission_section").on("mouseover", function (event) {
  var findval = event.target.classList.value;
  if (findval.indexOf("ex-accordionv2") < 0) {
    $(".accordion--collapse").hide();
    $(".accordion--expand").show();
    $(".ex-accordionv2__item__content").removeClass("show");
  }
  console.log(
    "asd " +
      findval.indexOf("ex-accordionv2") +
      " -- " +
      (findval.indexOf("ex-accordionv2") < 0)
  ); */
/* if (findval.indexOf("ex-accordionv2") < 0) {
    $(".ex-accordionv2__item__content.collapse ").removeClass("show");
  } 
});*/
