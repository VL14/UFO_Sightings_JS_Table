// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create function to display table
function createTable(ufodata) {
    // Clear data each time before function is run
    tbody.html("");

    // Loop through data, append a table row for each object, and add cells to hold data for each sighting
    ufodata.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });}

// Complete the event handler function for the form
function runEnter() {

    // Check that function is working
    console.log("Function is running");

    // Create new variable for filtered data
    var filteredData=tableData;
        
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // Set start and end dates for input selection
    var startDate = '1/1/2010';
    var endDate = '1/13/2010';

    if((inputValue >= startDate) && (inputValue <= endDate)) {
        filteredData = tableData.filter(ufodate => ufodate.datetime === inputValue);}
    else{alert("Please enter a date within the range 1/1/2010 to 1/13/2010");}
    
        console.log(filteredData);

        createTable(filteredData);
}

// Create event handlers 
d3.select("#filter-btn").on("change", runEnter);
d3.selectAll("#datetime").on("change", runEnter);

// Display full table of data
createTable(tableData);