// added current day to header using moment.js
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// function comparing the day planner to current time.
function TimeTracker() {
  let hourOfDay = moment().hour();
  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id").split("hour")[1]);
// if statements being used to determine the class of that time-block
    if (currentHour < hourOfDay) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (currentHour === hourOfDay) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else (currentHour > hourOfDay) {
       $(this).removeClass("past") 
    }
  });
}
TimeTracker();

//click event listener to add to local storage
$("#container").on("click", "button", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});
