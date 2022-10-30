$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$("#container").on("click", "button", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  console.log("hello");
});

// create time of day for each time-block
function TimeTracker() {
  let hourOfDay = moment().hour();
  
  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(currentHour.parseInt);
  });


console.log(hourOfDay)

}

TimeTracker()
