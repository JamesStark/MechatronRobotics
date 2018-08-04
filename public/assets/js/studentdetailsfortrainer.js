function getAdmissionDataForTrainer(center) {
	ADMISSIONS_SERVICE_URL = 'nofee/student/details/' + center + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + ADMISSIONS_SERVICE_URL,
		// enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		// data: fd,
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data) {
			var trHTML = '';

			$.each(data.data, function(i, item) {
				trHTML +=
					'<tr style="font-size:14px;"><td>' +
					item.full_name +
					'</td><td>' +
					item.date_of_admission +
					'</td><td>' +
					item.level +
					'</td><td>' +
					item.contact_no +
					'</td><td>' +
					item.email +
					'</td><td>' +
					'12/02/2018' +
					'</td></tr>';
			});

			$('#studentTable').append(trHTML);
		},

		error: function(msg) {
			alert(msg.responseText);
		}
	});
}
