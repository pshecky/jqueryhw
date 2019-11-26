// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}

// $(document).ready(function(){
// 	$("#subscribe").click(function(){
// 		if (this.checked){
// 			console.log("selected");
// 			$("#emailField").css("display","block");
// 		}
// 		else {
// 			console.log("not selected");
// 			$("#emailField").css("display","none");
// 		}
// 	})}

$(document).ready(function(){
	$("#subscribe").click(function(){
		$("#emailField").toggle("slow");})
})
