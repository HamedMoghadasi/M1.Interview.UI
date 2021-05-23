var myChart;
var showChartModule = {
  fillInputs: function (id, rowNumber) {
    $("#deleteId").val(id);
  },
  handleSubmit: function () {
    $(".showChart-button").on("click", function () {
      $("#myChart").remove(); // this is  <canvas> element
      $("#canvasContainer").append('<canvas id="myChart"><canvas>');
      canvas = document.querySelector("#myChart");
      ctx = canvas.getContext("2d");
      ctx.canvas.width = 400; // resize to parent width
      ctx.canvas.height = 400; // resize to parent height
      var id = $("#deleteId").val();
      $.ajax({
        url: `${config.apiUrl}/gateway/sales/${id}`,
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (response) {
          $("#showChartModal").modal("toggle");
          var ctx = document.getElementById("myChart").getContext("2d");
          chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Sales Per month",
                  data: response,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(a1c181, 0.5)",
                    "rgba(255, 182, 0, 0.5)",
                    "rgba(130, 47, 175, 0.5)",
                    "rgba(42, 157, 143, 0.5)",
                    "rgba(230, 57, 70, 0.5)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 182, 0, 1)",
                    "rgba(130, 47, 175, 1)",
                    "rgba(42, 157, 143, 1)",
                    "rgba(230, 57, 70, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        },
      });
    });
  },
  init: function () {
    this.handleSubmit();
  },
};
