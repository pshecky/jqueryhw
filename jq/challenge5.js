// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

$(document).ready(function(){
	$(".preview").hover(function(){
		console.log("User is hovering over image");
		var source = $(this).attr('src');
		var background = "background-image: url('"+ source +"')";
		$('#image').attr("style", background);
		$('#image').text($(this).attr('alt'));
	}, function(){
		$('#image').css("background-image", "none");
		$('#image').text("Hover/tab over an image below.");
	})
	$(".preview").focus(function(){
		console.log("User is focusing image");
		var source = $(this).attr('src');
		var background = "background-image: url('"+ source +"')";
		$('#image').attr("style", background);
		$('#image').text($(this).attr('alt'));
	})
})
