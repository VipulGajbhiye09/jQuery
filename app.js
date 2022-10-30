//jQuery is a JavaScript Library. it simplifies JavaScript programming.

//$ = jQuery("") = document.querySelector("")


//set info
//$("h1");
//$("h1").css("color","green");

//retreive info
//console.log($("h1").css("color"));

//add a class
$("h1").addClass("title-size");

//remove a class
$("h1").removeClass("title-size");

//Check if element has a class
//console.log($("h1").hasClass("title-size"));

//Text Manipulation

$("h1").text("GoodBye");   //alter only text content
$("h1").html("<em>Hey</em>"); //alter all content in a tag

//Event Listener

$("button").click(function(){
  $("h1").css("color","purple");
});

//Elemnt Manipulation

//$("element").before("<p>NewText</p>");
//$("element").after("<p>NewText</p>");
//$("element").prepend("<p>NewText</p>");
//$("element").append("<p>NewText</p>");
