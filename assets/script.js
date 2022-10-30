$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// function comparing the day planner to current time.
function TimeTracker() {
  let hourOfDay = moment().hour();
  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(currentHour)
    if (currentHour < hourOfDay) {
    }
  });

}

//click event listener to add to local storage
$("#container").on("click", "button", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

