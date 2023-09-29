
$(function () {
  
  var textAreas = $('.description') //select all text areas
  console.log(textAreas)
  
  var saveButtons = $('.saveBtn') //select all save buttons
  console.log(saveButtons)

  renderEvent(); //fills in blocks on page load

  //this function should fill in each block with the value from local storage
  function renderEvent() {
  textAreas.each(function(i) {
    var note = localStorage.getItem($(textAreas[i])) || ""
      $(textAreas[i]).text(note);
  })
}
  
  saveButtons.on("click", saveEvent) //when a save button is clicked it runs the saveEvent function

//this function should (but doesn't) save the value of the textarea to local storage
  function saveEvent(event) {
    event.preventDefault();

    textAreas.each(function(i) {
      var note = $(textAreas[i]).val();
      var selectedArea = $(textAreas[i])
    localStorage.setItem(selectedArea, note);
    })
  }  
    
  
  var currentHour = Number(dayjs().format("H")) //gets the current hour and turns it from a string into a number
  console.log(currentHour); 
  

  var timeBlocks = $('.time-block') //select all time blocks
  
  //this function compares the current hour to the timeblock id and adds the corresponding class
  timeBlocks.each(function(i) {
  if (currentHour == Number(timeBlocks[i].id)) {
    console.log("it's the present!");
    $(timeBlocks[i]).addClass('present'); 
  } else if (currentHour > Number(timeBlocks[i].id)) {
    console.log("that's the past!");
    $(timeBlocks[i]).addClass('past');
  } else {
    console.log("that's the future!");
    $(timeBlocks[i]).addClass('future');
  };
})
  
  //this code displays the current date in the header of the page
  var dateDisplayEl = $('#currentDay');
  var currentDate = dayjs().format("dddd, MMMM D h:mm a");
  dateDisplayEl.text(currentDate);
});
