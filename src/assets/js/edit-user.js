var editUserModule = {
  getObject: function () {
    var editedUser = {
      id: Number($("#editId").val()),
      name: $("#editName").val(),
      phone: $("#editPhone").val(),
      age: Number($("#editAge").val()),
    };
    return { data: editedUser };
  },
  fillInputs: function (id) {
    var row = table.data().filter((user) => user.id === id)[0];
    $("#editId").val(row.id);
    $("#editName").val(row.name);
    $("#editPhone").val(row.phone);
    $("#editAge").val(row.age);
  },
  handleSubmit: function () {
    let editModule = this;
    $("#update-button").on("click", function () {
      var editedUser = editModule.getObject();

      var id = $(`#editId`).val();
      var btn = $("tr").find(`button.edit-button[data-id='${id}']`)[0];
      var tr = $(btn).closest("tr");

      $.ajax({
        url: `${config.apiUrl}/gateway/personnel`,
        type: "PUT",
        async: false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(editedUser.data),
        success: function (response) {
          table.row(tr).data(response).draw(false, null);
          $("#editModal").modal("toggle");
        },
      });
    });
  },
  init: function () {
    this.handleSubmit();
  },
};
