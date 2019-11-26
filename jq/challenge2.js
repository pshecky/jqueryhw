// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}

$(document).ready(function(){
	$("#useBilling").change(function(){
		if ($("#useBilling").is(':checked')){
			console.log("Selected 'same as Billing'");
			console.log("Disable Home");
			$("#home").val($("#billing").val());
			$("#home").prop("disabled",true);
		}
		else {
			console.log("Different than Billing");
			$("#home").val("");
			$("#home").prop("disabled",false);}
		}
	)})
	//
	// $(document).ready(function()
	// 	{
	// 		if ($("#useBilling").is(":checked")) {
	// 			$('#home').val($('#billing').val());
	// 			$('#home').attr('disabled', 'disabled');
	// 	} else {
	// 			$('#home').removeAttr('disabled');
	// 			console.log("Selected 'same as Billing'");
	// 			console.log("Disable Home");
	// 			$('#home').val("");
	// 		}
	// 	}
	// 	)

	//
	// function setBillingAddress(){
	//   if ($("#homepostalcheck").is(":checked")) {
	//     $('#billingaddress').val($('#homeaddress').val());
	//     $('#billingaddress').attr('disabled', 'disabled');
	//   } else {
	//     $('#billingaddress').removeAttr('disabled');
	//   }
	// }
	//
	// $('#homepostalcheck').click(function(){
	//   setBillingAddress();
	// })
