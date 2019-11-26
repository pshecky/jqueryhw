// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;
// }
    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
//
// $("#ch3form").submit(function(event){
//   var fruit = $("input[name=fruit]");
//   fruit.each(function(){
//     console.log("is it checked?");
//     if (this.checked){
//       console.log("it is checked");
//       return true;
//     }
//   console.log("it is not checked");
//   alert("You must pick a fruit!");
//   return false;
//     }
//   })
// })


$("#ch3form").submit(function(e) {
    if(!$('input[name=fruit]:checked').length) {
        alert("You must pick a fruit!");
        console.log("Fruit not checked");
        //stop the form from submitting
        return false;
    }
    if(!$('input[name=standing]:checked').length) {
        alert("You must pick a standing!");
        console.log("Standing not checked");
        //stop the form from submitting
        return false;
    }
    return true;
});
