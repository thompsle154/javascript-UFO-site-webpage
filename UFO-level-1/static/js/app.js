// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, append a table to the web page and add new rows of data for each UFO sighting

// Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the sightings data from data.js
console.log(data);

// Use d3 to update each cell's text with report values
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        //Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code
//that will search through the date/time column to find rows that
//match

//Assign the data from data.js to a descriptive variable