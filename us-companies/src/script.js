var set4 = new Set();
var set5 = new Set();

function myfilters(ele, bele) {
  var input1 = ele;
  var input2 = bele;

  var query =
    ">=" +
    (input1 > 0 ? input1 : -1) +
    " && <=" +
    (input2 > 0 ? input2 : 100000);

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("7", query);

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

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("5", query);

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

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("6", query);

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

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("7", query);

  tf.filter();

  //evt.preventDefault();
}

function MinMax(colIndex, minElementString, maxElementString) {
  var minValue = document.getElementById(minElementString);
  var maxValue = document.getElementById(maxElementString);
  var query =
    ">=" +
    (minValue.value.length > 0 ? minValue.value : -1) +
    " && <=" +
    (maxValue.value.length > 0 ? maxValue.value : 100000);
  // Set the column's filter value
  //tf.init();
  tf.setFilterValue(colIndex, query);
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

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("5", query);

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

  // Set the column's filter value
  //tf.init();
  tf.setFilterValue("6", query);

  tf.filter();

  //evt.preventDefault();
}

function filterindustry(colindex, elestring) {
  var listOfElements = document.getElementById(elestring);
  var spanList = listOfElements.children;
  var i = 0;
  var values = [];
  var query = "";
  if (colindex === 2 || colindex === 3) {
    for (i = 0; i < spanList.length; i++) {
      if (
        spanList[i].nodeName != "DIV" &&
        spanList[i].children[0].children[0].checked == true
      )
        values.push(spanList[i].children[0].textContent);
    }
    for (i = 0; i < values.length; i++) {
      if (i == 0) query = values[i];
      else query = query + " || " + values[i];
    }
    tf.setFilterValue(colindex, query);
    tf.filter();
  } else if (colindex == 4) {
    MinMax(colindex, "myInputMinYear", "myInputMaxYear");
  }
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
      if (data[0] > 0 && data[0] <= 100) {
        $("td", row).addClass("blah");
      } else if (data[0] > 100 && data[0] <= 500) {
        $("td", row).addClass("nice");
      } else if (data[0] > 500) {
        $("td", row).addClass("new");
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
  loader: true,
  status_bar: true,
  mark_active_columns: true,
  highlight_keywords: true,
  no_results_message: true,
  columns_exact_match: [
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  ignore_diacritics: true,
  btn_reset: {
    text: "Clear"
  },
  watermark: [
    "Rank",
    "Name",
    "Industry",
    "Type",
    "Founded",
    "Emplyoees",
    "Revenue",
    "Profit",
    "URL",
    "Location"
  ],
  col_0: "select",
  col_1: "none",
  col_8: "none",
  col_9: "select",
  col_types: [
    "number",
    "string",
    "string",
    "list",
    "number",
    "number",
    "number",
    "number",
    "string",
    "string"
  ],
  custom_options: {
    cols: [0],
    texts: [["1-100", "101 - 500", "500+"]],
    values: [[">=0 && <=100", ">100 && <=500", ">500"]],
    sorts: [false]
  },
  col_widths: [
    "50px",
    "180px",
    "180px",
    "70px",
    "70px",
    "80px",
    "90px",
    "90px",
    "150px",
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
