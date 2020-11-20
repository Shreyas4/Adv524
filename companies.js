var set4 = new Set();
var set5 = new Set();

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function myfilters(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("8", query);

  tf.filter();
  //evt.preventDefault();
}

function myfilter(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("4", query);

  tf.filter();

  //evt.preventDefault();
}

function filters(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("5", query);

  tf.filter();

  //evt.preventDefault();
}

function my(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("6", query);

  tf.filter();

  //evt.preventDefault();
}

function myfilters1(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("7", query);

  tf.filter();

  //evt.preventDefault();
}

function myfilters(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("8", query);

  tf.filter();

  //evt.preventDefault();
}

function filterMinMax() {
  var minValue = document.getElementById("myInput1");
  var maxValue = document.getElementById("myInput2");

  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("8", query);

  tf.filter();

  //evt.preventDefault();
}
function filterMin() {
  var minValue = document.getElementById("myInput3");
  var maxValue = document.getElementById("myInput4");

  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("4", query);

  tf.filter();

  //evt.preventDefault();
}

function filterMax() {
  var minValue = document.getElementById("myInput5");
  var maxValue = document.getElementById("myInput6");

  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("5", query);

  tf.filter();

  //evt.preventDefault();
}

function filter() {
  var minValue = document.getElementById("myInput7");
  var maxValue = document.getElementById("myInput8");

  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("6", query);

  tf.filter();

  //evt.preventDefault();
}

function MinMax() {
  var minValue = document.getElementById("myInput10");
  var maxValue = document.getElementById("myInput11");

  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  alert(query);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("7", query);

  tf.filter();

  //evt.preventDefault();
}
function myfunction() {
  var input, filter, table, tr, td, i, txtValue;

  table = document.getElementById("example");

  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      var textContent = txtValue.split(",");
      var j;
      var flag = false;

      for (j = 0; j < textContent.length; j++) {
        set4.add(textContent[j].trim());
        set5.add("*" + textContent[j].trim());
      }
    }
  }
  set4.delete("");
  set5.delete("*");
}

$(document).ready(function () {
  $("#example").DataTable({
    lengthMenu: [
      [100, 200, 3000, -1],
      [100, 200, 300, "All"]
    ],
    rowCallback: function (row, data, index) {
      if (data[4] <= 10000) {
        $("td", row).addClass("new");
      } else if (data[4] > 10000 && data[4] <= 50000) {
        $("td", row).addClass("nice");
      } else if (data[4] > 50000) {
        $("td", row).addClass("blah");
      }
    }
  });
});
myfunction();
var filtersConfig = {
  base_path: "https://unpkg.com/tablefilter@latest/dist/tablefilter/",
  state: {
    types: ["local_storage"],
    filters: true,
    page_number: true,
    page_length: true,
    sort: true,
    columns_visibility: true,
    filters_visibility: true
  },
  alternate_rows: true,
  rows_counter: true,
  btn_reset: true,
  loader: true,
  status_bar: true,
  mark_active_columns: true,
  highlight_keywords: true,
  no_results_message: true,
  exact_match: true,
  ignore_diacritics: true,
  watermark: [
    "City",
    "City",
    "Distance",
    "Time",
    "Emplyoees",
    "Revenue",
    "Operating Income",
    "Net Income",
    "Stock Price",
    "blah",
    "Page Rank"
  ],

  col_0: "none",
  col_1: "select",
  col_2: "checklist",
  col_3: "select",
  col_9: "none",
  col_10: "select",
  col_types: [
    "string",
    "string",
    "list",
    "float",
    "number",
    "string",
    "number"
  ],

  col_widths: [
    "100px",
    "200px",
    "100px",
    "80px",
    "80px",
    "100px",
    "100px",
    "100px",
    "100px",
    "200px",
    "100px",
    "100px",
    "100px",
    "100px",
    "100px"
  ],
  extensions: [
    {
      name: "sort"
    },
    {
      name: "colsVisibility",
      text: "Hide columns:",
      enable_tick_all: true,
      btn_target_id: "colsBtn"
    },
    {
      name: "filtersVisibility",
      target_id: "fltsBtn"
    },
    {
      images_path:
        "https://unpkg.com/tablefilter@latest/dist/tablefilter/style/themes/"
    }
  ]
};

var tf = new TableFilter("example", filtersConfig);
tf.init();
