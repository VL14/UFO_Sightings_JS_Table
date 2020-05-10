// from data.js
var tableData = data;
// console.log(tableData);

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
  
    console.log(`Input value: ${inputValue}`);

    // Set start and end dates for input selection
    var availableDates = [
        '1/1/2010',
        '1/2/2010',
        '1/3/2010',
        '1/4/2010',
        '1/5/2010',
        '1/6/2010',
        '1/7/2010',
        '1/8/2010',
        '1/9/2010',
        '1/10/2010',
        '1/11/2010',
        '1/12/2010',
        '1/13/2010',
    ];

    var test = availableDates.includes(inputValue);

    if(test) {
        filteredData = tableData.filter(ufodate => ufodate.datetime === inputValue);}
    else{alert("Please enter a date within the range 1/1/2010 to 1/13/2010");}
    
        console.log(`Filtered Data: ${filteredData}`);

        createTable(filteredData);
}

// Create event handlers 
var form = d3.select(".form-control");
d3.select("#filter-btn").on("click", runEnter);
form.on("submit", runEnter);

// Display full table of data
createTable(tableData);