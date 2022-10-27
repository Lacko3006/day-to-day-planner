moment().format();
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

$("#saveBtn").on("click", function(){
    console.log(this)
})
  
