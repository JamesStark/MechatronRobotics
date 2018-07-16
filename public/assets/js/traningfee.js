// function getAdmissionData(id) {
// 	VIEW_SERVICE_URL = 'st/admission/' + id;
// 	var token = secure['token'];
// 	var center = $.ajax({
// 		type: 'GET',
// 		url: BASE_URL + VIEW_SERVICE_URL,
// 		data: '{}',
// 		contentType: 'application/json; charset=utf-8',
// 		headers: {
// 			Authorization: 'token ' + token
// 		},
// 		dataType: 'json',
// 		cache: false,
// 		success: function(data) {
// 			$.each(data.data, function(i, item) {
// 				$('#centerst').val(item.center);
// 				$('#levelst').text(item.level);
// 				$('#classst').val(item.class_type);
// 			});
// 			var center = $('#centerst').val();
// 			alert(center);
// 		},
//
// 		error: function(msg) {}
// 	});
// }

function getFee() {
	getSession();
	getPaymentFee();
	//var center = getAdmissionData();
	var center = $('#centerst').val();
	FEE_DETAILS_URL = 'rb/feedetails/' + center + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + FEE_DETAILS_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		async: false,
		cache: false,
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data) {
			var trHTML = '';
			var fee;
			var feebd;
			for (var i in data.data) {
				$('#trainingfee1').val(data.data[0].training_fee);
				$('#trainingfee2').val(data.data[1].training_fee);
				$('#trainingfee3').val(data.data[2].training_fee);
				$('#trainingfee4').val(data.data[3].training_fee);
				$('#trainingfee5').val(data.data[4].training_fee);


				 $('#totalbd1').val('0');
				 $('#total1').val('0​');
				 $('#totalbd2').val('0');
				 $('#total2').val('0​');
				 $('#totalbd3').val('0');
				 $('#total3').val('0​');
				 $('#totalbd4').val('0');
				 $('#total4').val('0​');
				 $('#totalbd5').val('0');
				 $('#total5').val('0​');

			}

			$('#location').append(trHTML);
		},

		error: function(msg) {}
	});
}

function getPaymentFee() {
	$('#namest').val(localStorage.getItem('name'));
	$('#contactst').val(localStorage.getItem('contact'));
	$('#emailst').val(localStorage.getItem('email'));
	$('#levelst').text(localStorage.getItem('level'));
	$('#classst').val(localStorage.getItem('class'));
	$('#centerst').val(localStorage.getItem('center'));

	var level = $('#levelst').text();

	if (level == levels['lv5']) {
		document.getElementById('showHide1').disabled = true;
		document.getElementById('showHide2').disabled = true;
		document.getElementById('showHide3').disabled = true;
		document.getElementById('showHide4').disabled = true;
	} else if (level == levels['lv4']) {
		document.getElementById('showHide1').disabled = true;
		document.getElementById('showHide2').disabled = true;
		document.getElementById('showHide3').disabled = true;
	} else if (level == levels['lv3']) {
		document.getElementById('showHide1').disabled = true;
		document.getElementById('showHide2').disabled = true;
	} else if (level == levels['lv2']) {
		document.getElementById('showHide1').disabled = true;
	}
}

$(document).ready(function() {
	$('#pay').click(function() {
		$('#details').hide();
	});
});

$(document).ready(function() {
	$('.card').hover(
		function() {
			$(this).animate(
				{
					marginTop: '-=1%'
				},
				200
			);
		},
		function() {
			$(this).animate(
				{
					marginTop: '0%'
				},
				200
			);
		}
	);
});
