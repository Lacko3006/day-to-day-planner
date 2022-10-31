// added current day to header using moment.js
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// function comparing the day planner to current time.
function TimeTracker() {
  let hourOfDay = moment().hour();
  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(currentHour)
// if, else if & else statements being used to determine the class of that time-block
    if (currentHour < hourOfDay) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } 
    else if (currentHour === hourOfDay) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } 
    else {
       $(this).removeClass("past"); 
       $(this).removeClass("present");
       $(this).addClass("future");
    }
  });
}
  TimeTracker();

//click event listener to add text input into local storage
$("#container").on("click", "button", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

// getItem allows me to refresh the page and the saved events persist
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));