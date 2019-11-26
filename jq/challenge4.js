// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }

$(document).ready(function(){
  $("#ch4form").submit(function(e){
    if ($("#fullname").val()== ""){
      console.log("No Name");
      $("#nameerrormsg").toggle();
      return false;
    }
    if ($("#streetaddr").val()== ""){
      console.log("No Address");
      $("#addrerrormsg").toggle();
      return false;
    }
    else{
      console.log("Everything Filled Out")
      return true;
    }
  })
})
