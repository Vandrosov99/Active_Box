$(function () {
  // console.log("rabotaet");
  let header = $("#header")
  let intro = $("#intro")
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  // Out header(fixed (шапочка на фиксе))
  header.addClass("fixed");
  $(window).on("scroll load", function () {
    scrollPos = $(this).scrollTop();
    console.log(scrollPos)
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
  // Скролинг 
  $("[data-scroll").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementoffset = $(elementID).offset().top;

    console.log(elementID);

    $("html,body").animate({
      scrollTop: elementoffset - 70
    }, 700)
  })

});