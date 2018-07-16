function getAttendanceTrainer(center) {
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
					item.id +
					'</td><td>' +
					item.full_name +
					'</td><td><input name=status type=radio value=p>P  <input name=status type=radio value=a >A</td><td><input type=time></td><td><input type=time></td><td><input type=text></td><td><input type=text></td></tr>';
			});

			$('#studentst').append(trHTML);
		},

		error: function(msg) {
			alert(msg.responseText);
		}
	});
}
