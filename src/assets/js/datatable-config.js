var datatableConfig = {
  columns: [
    { data: "id", autoWidth: true },
    { data: "name", autoWidth: true },
    { data: "phone", autoWidth: true },
    { data: "age", autoWidth: true },
    {
      data: null,
      render: function (data, type, full, meta) {
        return `
         <button class="btn btn-sm btn-success showChart-button" data-id="${data.id}" data-row=${meta.row} onclick="showChartModule.fillInputs(${data.id},${meta.row})" type="button" >
        <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>
        </button>
        <button  class="btn btn-sm btn-warning edit-button" data-id="${data.id}" data-row=${meta.row} onclick="editUserModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#editModal">
            <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
            </button>
            
            <button class="btn btn-sm btn-danger delete-button" data-id="${data.id}" data-row=${meta.row} onclick="delteUserModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#deleteModal">
            <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
            </button>
            
           `;
      },
      orderable: false,
    },
  ],
  getAllUsers: function () {
    let temp = [];
    $.ajax({
      url: `${config.apiUrl}/gateway/personnel`,
      type: "GET",
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        temp = response;
      },
    });
    return temp;
  },
  handleResponsive: function () {
    if ($(window).width() > 700) {
      $("#table").addClass("display");
    }
  },
  options: function () {
    this.handleResponsive();
    return {
      data: this.getAllUsers(),
      aoColumns: this.columns,
      responsive: true,
      // scrollY: "80vh",
      // scrollCollapse: true,
      oLanguage: {
        sSearch: "",
        sSearchPlaceholder: "Search",
        sLengthMenu: "_MENU_ ",
      },
      lengthMenu: [5, 15, 25, 50, 75, 100],
      dom:
        "<'row'<'col-sm-12 col-md-2 add-button-container'><'col-sm-12 col-md-8'f><'col-sm-12 col-md-2'l>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      order: [[0, "desc"]],
    };
  },
};
