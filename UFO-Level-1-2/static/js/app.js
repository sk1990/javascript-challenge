// Set table data variable to the data variable in the UFO data file
var tableData = data;
// Reference the tbody element and the input and button ids within variables
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $filterBtn = document.querySelector("#filter-btn");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
// renderTable renders the filteredSightings to the tbody
function renderTable() {
  // Set the HTML content of the tbody element
  $tbody.innerHTML = "";
  // Loop through the length of the UFO data table
  for (var i = 0; i < tableData.length; i++) {
    // Display the current sighting object and its attributes 
    var sighting = tableData[i];
    console.log(sighting)
    var attributes = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    // Loop through every attribute in the sighting object and create a new cell and set its inner text to be the current value at the current sighting's attribute
    for (var j = 0; j < attributes.length; j++) {
      var attribute = attributes[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[attribute];
    }
  }
}
// handleFilterButtonClick sets up the filter button's event functionality
function handleFilterButtonClick(event) {
  // Prevent page from refreshing
  event.preventDefault();
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value;
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  // Set sightingDate to an array of all sightings whose "date" matches the filter
  if (filterDate != ""){
    tableData = data.filter(function(sighting){
      var sightingDate = sighting.datetime; 
    // If true, add the sighting to sightingDate, otherwise don't add it to sightingDate
    return sightingDate === filterDate;
    });
  }
  else {tableData};
  // Set sightingState to an array of all sightings whose "state" matches the filter
  if (filterState != ""){
    tableData = data.filter(function(sighting){
      var sightingState = sighting.state;
      // If true, add the sighting to sightingState, otherwise don't add it to sightingState
      return sightingState === filterState;
    });
  }
  else{tableData};
   
  // Set sightingCity to an array of all sightings whose "city" matches the filter
  if (filterCity != "")
  {
    tableData = data.filter(function(sighting)
    {
      var sightingCity = sighting.city;
       
      // If true, add the sighting to sightingCity, otherwise don't add it to sightingCity
      return sightingCity === filterCity;
    });
  }
   else{tableData};
   
   // Set sightingCountry to an array of all sightings whose "country" matches the filter
  if(filterCountry != "")
  {
    tableData = data.filter(function(sighting)
    {
      var sightingCountry = sighting.country;
       
      // If true, add the sighting to sightingCountry, otherwise don't add it to sightingCountry
      return sightingCountry === filterCountry;
    });
  }
  else{tableData};
   
  // Set sightingShape to an array of all sightings whose "shape" matches the filter
  if(filterShape != "")
  {
    tableData = data.filter(function(sighting)
    {
      var sightingShape = sighting.shape;
       
      // If true, add the sighting to sightingShape, otherwise don't add it to sightingShape
      return sightingShape === filterShape;
    });
  }
  else{tableData};
 renderTable();
 }
// Add an event listener to the filterButton, call handleFilterButtonClick function when clicked
$filterBtn.addEventListener("click", handleFilterButtonClick);
// Render the table for the first time the page loads
renderTable();
