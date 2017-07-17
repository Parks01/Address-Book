$(document).ready(function(){
$("form").submit(event);
event.preventDefault();
var addressEntry = $("input#address").val();
alert("good job");
console.log(addressEntry);
});
