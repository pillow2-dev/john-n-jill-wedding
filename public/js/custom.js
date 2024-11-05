let nav_scroll_offset = 400;

$(window).on("load scroll", function () {
  if ($(window).scrollTop() > nav_scroll_offset) {
    $("#main_nav").addClass("fixed-top scrolled");
  } else {
    $("#main_nav").removeClass("fixed-top scrolled");
  }
});

$(document).ready(function () {
  $('[data-trigger="copy-text"]')
    .attr("data-bs-container", "body")
    .attr("data-bs-toggle", "popover")
    .attr("data-bs-placement", "top")
    .attr("data-bs-trigger", "focus")
    .attr("data-bs-content", "✓ Copied to clipboard");

  $('[data-bs-toggle="popover"]')
    .popover()
    .on("shown.bs.popover", function () {
      setTimeout(
        function (a) {
          a.popover("hide");
        },
        3000,
        $(this)
      );
    });

  $('[data-trigger="copy-text"]').on("click", function () {
    const $element = $(this);
    const textToCopy = $element.val() ?? $element.text();
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        /* clipboard successfully set */
        // window.alert("Success! The text was copied to your clipboard");
      },
      function () {
        /* clipboard write failed */
        // window.alert("Opps! Your browser does not support the Clipboard API");
      }
    );
  });
});
