
$(function () {
  
  var textAreas = $('.description') //select all text areas
  console.log(textAreas)
  
  var saveButtons = $('.saveBtn') //select all save buttons
  console.log(saveButtons)

  var container = document.getElementById('container')
  container.addEventListener("click", function (event) {
    if (event.target.matches('.saveBtn')) {
      console.log(event.target)
      console.log(event.target.parentElement.getAttribute("id"))
      var time = "text-" + event.target.parentElement.getAttribute("id")

      var note = event.target.parentElement.children[1].value
      console.log(time,note)
      localStorage.setItem(time, note)
      
    }
  })

for (var i=9; i < 18; i++) {
  $("#text-" + i).val(localStorage.getItem("text-" + i))
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
