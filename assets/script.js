moment().format();
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

$('#container'). on( 'click', 'button', function() {
    let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
        console.log("hello")
        });

// create current time for each time-block
