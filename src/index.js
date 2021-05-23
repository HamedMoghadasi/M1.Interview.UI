var table = $("#table").DataTable(datatableConfig.options());

addPersonnelModule.init();
editUserModule.init();
delteUserModule.init();
showChartModule.init();
$(document).ready(function () {
  $("input").attr("autocomplete", "off");
  $("#loading").fadeOut(1000);
  document.title = config.title;
});
