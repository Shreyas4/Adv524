$(document).ready(function () {
  $("#example").DataTable({
    lengthMenu: [
      [100, 200, 3000, -1],
      [100, 200, 300, "All"]
    ],
    rowCallback: function (row, data, index) {
      
      if (data[0] <= 28) {
        $("td", row).addClass("blah");
      }else if (data[0] > 28 && data[0] <= 66) {
        $("td", row).addClass("nice");
      } else if (data[0]> 66) {
        $("td", row).addClass("new");
      }
    }
  });
});

var filtersConfig = {
  // instruct TableFilter location to import ressources from
  base_path: "https://unpkg.com/tablefilter@latest/dist/tablefilter/",
  col_1: "select",
  col_3: "select",
  col_4: "select",
  col_5: "select",
  col_6: "select",
  alternate_rows: true,
  rows_counter: true,
  btn_reset: true,
  loader: true,
  mark_active_columns: true,
  highlight_keywords: true,
  no_results_message: true,
  col_types: [
    "number",
    "string",
    "number",
    "number",
    "string",
    "string",
    "string",
    "number",
    "number",
    "number",
    "number",
    "number"
  ],
  custom_options: {
    cols: [3],
    texts: [["0.1-0.5", "0.5-0.8", "0.8-1"]],
    values: [[">=0.1 && <=0.5", ">=0.5 && <=0.8", ">0.8= && <=1"]],
    sorts: [false]
  },
  col_widths: [
    "40px",
    "200px",
    "70px",
    "70px",
    "200px",
    "200px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px"
  ],
  extensions: [
    {
      name: "sort",
      images_path:
        "https://unpkg.com/tablefilter@latest/dist/tablefilter/style/themes/"
    }
  ]
};

var tf = new TableFilter("example", filtersConfig);
tf.init();
