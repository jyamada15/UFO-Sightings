var tableData = data;

var tbody = d3.select("tbody");

function create_table(data) {
  tbody.html("");


  data.forEach((data_row) => {
    var row = tbody.append("tr");

    Object.values(data_row).forEach(function(value) {
      var i = row.append("td");
        i.text(value);
      }
    );
  });
}

function handleClick() {

  d3.event.preventDefault();

  var date_value = d3.select("#datepicker-example-1").property("value");
  let filteredData = tableData;


  if (date_value) {
    filteredData = filteredData.filter(function(row) {
        return row.datetime === date_value});
  }

  create_table(filteredData);
}


d3.selectAll("#filter-button").on("click", handleClick);


create_table(tableData);
