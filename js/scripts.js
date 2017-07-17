$(document).ready(function(){
  $("form#hold").submit(function(event){
    event.preventDefault();
    function contact(first,last) {
      this.firstName = first;
      this.lastName = last;
    }
var drew = contact()
  });
});
