// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = Number(dayjs().format("H")) //gets the current hour and turns it from a string into a number
  console.log(currentHour); //logs as 21
  console.log(typeof currentHour) //number

  var hour9 = $('#9'); //selects the div with id of 9
  var hour9Id = Number(hour9[0].id) //selescts the id of that div
  console.log(hour9Id) //logs as 9
  console.log(typeof hour9Id); // number

  // if (currentHour == hour9Id) {
  //   console.log("it's the present!")
  //   hour9.addClass('present') //adds class to change the color
  // } else if (currentHour > hour9Id) {
  //   console.log("that's the past!")
  //   hour9.addClass('past')
  // } else {
  //   console.log("that's the future!");
  //   hour9.addClass('future')
  // };

  var timeBlocks = $('.time-block') //select all time blocks
  console.log(timeBlocks[0]); // the 0 accesses the first time block in the array

  timeBlocks.each(function() {
  // console.log(Number(timeBlocks[i].id))
  if (currentHour == Number(timeBlocks[i].id)) {
    console.log("it's the present!");
    timeBlocks[i].addClass('present'); //should add class to change the color - but doesn't work
  } else if (currentHour > Number(timeBlocks[i].id)) {
    console.log("that's the past!");
    timeBlocks[i].addClass('past');
  } else {
    console.log("that's the future!");
    timeBlocks[i].addClass('future');
  };
})
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var dateDisplayEl = $('#currentDay');
  var currentDate = dayjs().format("dddd, MMMM D");
  dateDisplayEl.text(currentDate);
});
