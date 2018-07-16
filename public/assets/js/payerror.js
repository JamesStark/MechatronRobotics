function getUserData(st_id) {
	GET_USER_DETAIL_URL = 'users/' + st_id;
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + GET_USER_DETAIL_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			$('#name').text(data.full_name);
			$('#contact').text(data.contact_no);
			$('#email').text(data.email);
		},
		error: function(msg) {
			// alert(msg.responseText);
		}
	});
}

function getPaymentStatus() {
	PAYMENT_STATUS_URL = 'paymentstatus/';
	var token = secure['token'];
	var urlParams = new URLSearchParams(location.search);
	id = urlParams.get('txnid');
	var obj = {};
	obj.txnid = id;
	var jsonData = JSON.stringify(obj);
	$.ajax({
		type: 'POST',
		url: BASE_URL + PAYMENT_STATUS_URL,
		contentType: 'application/json; charset=utf-8',
		data: jsonData,
		async: false,
		cache: false,
		dataType: 'json',
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data) {
			var st_id = data.data.st_id;
			getUserData(st_id);
			$('#status').text(data.data.status);
			$('#amount').text(data.data.amount);
			$('#dop').text(data.data.date_of_pay);
			$('#txd').text(data.data.txnid);
			$('#course_type').text(data.data.productinfo);
			$('#payfor').text(data.data.level);
			$('#mn').text(data.data.merchant_name);
		},
		error: function(msg) {
			// alert(msg.responseText);
		}
	});
}
