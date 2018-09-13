//Button Grow
$("#button1").on("click", function() {
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//Button Blue
$("#button2").on("click", function() {
	$("#box").css("background-color", "blue")
})

//Button Fade
$("#button3").on("click", function() {
	$("#box").fadeTo("slow", .6)
})

//Button Reset
$("#button4").on("click", function() {
    $("#box").css("height", "150px").css("width", "150px").css("background-color", "orange").fadeTo(0, 1.0)
})