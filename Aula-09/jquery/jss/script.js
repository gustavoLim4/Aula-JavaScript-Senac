$(function () {
  $("#mover").draggable();
  $("#mover").resizable({
    animate: true,
  });
});

$(function () {
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s",
  };
  $("#accordion").accordion({
    icons: icons,
  });
  $("#toggle")
    .button()
    .on("click", function () {
      if ($("#accordion").accordion("option", "icons")) {
        $("#accordion").accordion("option", "icons", null);
      } else {
        $("#accordion").accordion("option", "icons", icons);
      }
    });
});
