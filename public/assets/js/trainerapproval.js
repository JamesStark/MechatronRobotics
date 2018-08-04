function getTrainerApproved() {
	var WINDOW_URL = window.location.href.toString();
	id = WINDOW_URL.split('=')[1];
	VIEW_SERVICE_URL = '/trainer/' + id + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + VIEW_SERVICE_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			var trHTML = '';
			trHTML +=
				'<tr style="font-size:14px;"><td><input style="color:green;" type="checkbox" id="app"></td><td>' +
				data.data.auth_user +
				'</td><td>' +
				data.data.full_name +
				'</td><td>' +
				data.data.email +
				'</td><td>' +
				data.data.center +
				// '</td><td> <button type="button" id="status" class="btn btn-primary" ; style="margin-top: -5px; margin-left: -10px">Approved</button>
				'</td></tr>';
			//'</td><td> <td><input type="checkbox"></td></td></tr>';
			//'<input class="form-check-input" type="radio" >Approve <input class="form-check-input" type="radio">Reject' + '</td></tr>';

			$('#AppTable').append(trHTML);
		},

		error: function(msg) {
			alert(msg.responseText);
		}
		//alert(msg.responseText);
		//alert(msg.responseText);
	});
}
//})

$(document).ready(function() {
	$('#app').change(function() {
		alert('Approved');
	});
});
