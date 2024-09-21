function createTable() {
  var rn = prompt("Input number of rows");
  var cn = prompt("Input number of columns");

  if (rn && cn && !isNaN(rn) && !isNaN(cn)) {
    var table = document.getElementById("myTable");
    table.innerHTML = "";

    for (var i = 0; i < rn; i++) {
      var row = table.insertRow();
      for (var j = 0; j < cn; j++) {
        var cell = row.insertCell();
        cell.textContent = "Row-" + i + " Column-" + j;
      }
    }
  } else {
    alert("Please enter valid numbers for rows and columns.");
  }
}
