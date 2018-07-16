		function myFunctionEnroll1(){
		document.getElementById("date4").value="2 Days Workshop";
		document.getElementById("pay4").value="1500";
		document.getElementById("4d").style.display="none";

	}
	function myFunctionEnroll2(){
	document.getElementById("date4").value="4 Days Workshop";
	document.getElementById("pay4").value="2500";
	document.getElementById("2d").style.display="none";

}
$(document).ready(function(){
$("#submit_button").click(function(){
var frm = $("#workshopRegistrationForm").serializeArray();
var obj = {};
for (var a = 0; a < frm.length; a++) {
obj[frm[a].name] = frm[a].value;
}
obj['total_pay']=parseInt(obj['total_pay'])
var jsonData = JSON.stringify(obj);
$.ajax({
type: "POST",
url: 'http://87.81.187.186:8082/robotics/api/v1/st/wregistration/',
processData: false,
data: jsonData,
dataType: 'json',
contentType: 'application/json',
success: function(data) {
alert(data)
},
error: function(error) {
console.log(error);
}
});
})
});
