var delteUserModule = {
  fillInputs: function (id, rowNumber) {
    $("#deleteId").val(id);
    var row = table.data().filter((user) => user.id === id)[0];
    document.getElementById("currentUserName").innerHTML = row.name;
    console.log(row);
  },
  handleSubmit: function () {
    $("#delete-button").on("click", function () {
      var id = $("#deleteId").val();

      var id = $(`#deleteId`).val();
      var btn = $("tr").find(`button.delete-button[data-id='${id}']`)[0];
      var tr = $(btn).closest("tr");

      $.ajax({
        url: `${config.apiUrl}/gateway/personnel/${id}`,
        type: "DELETE",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (response) {
          $("#deleteModal").modal("toggle");
          table.row(tr).remove().draw(false, null);
        },
      });
    });
  },
  init: function () {
    this.handleSubmit();
  },
};
