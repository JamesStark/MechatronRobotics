function getAttendanceTrainer(center) {
	ADMISSIONS_SERVICE_URL = 'nofee/student/details/' + center + '/';
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + ADMISSIONS_SERVICE_URL,
		processData: false,
		contentType: false,
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
					'</td><td><input class=chkListItem name=status type=checkbox name=attendance value=P></td><td><input type=time></td><td><input type=time></td><td><input type=text></td><td><input type=text></td></tr>';
			});

			$('#studentst').append(trHTML);
			// $('#attendanceBox').on('change', function() {
			// 	if ($(this).is(':checked')) {
			// 		$(this).attr('value', 'Present');
			// 		alert('Present');
			// 	} else {
			// 		$(this).attr('value', 'Absent');
			// 		alert('Absent');
			// 	}
			//
			// 	$('#checkbox-value').text($('#checkbox').val());
			// });
		},
		error: function(msg) {
			alert(msg.responseText);
		}
	});
}

// var attendeanceBox = 'A';
// function getAttendanceValue() {
// 	$.each($("input[id='attendeanceBox']:checked"), function() {
// 		$(this).attr('value', 'P');
// 	});
// }

// function submit_attendance() {
// 	var allVals = [];
// 	$('.chkListItem:checked').each(function() {
// 		debugger;
// 		allVals.push($(this).val());
// 	});
// 	alert('Selected Values: ' + allVals);
// }

// $(document).ready(function() {
// 	$('#submit_attendance').click(function() {
// 		$('.spinner').show();
// 		// var attendance_list = [];
// 		// $.each($("input[name='attendance']:checked"), function() {
// 		// 	attendance_list.push($(this).val());
// 		// });
// 		// alert(attendance_list.length);
// 		// var frm = $('#student_attendance_form').serializeArray();
// 		// var obj = {};
// 		// for (var a = 0; a < frm.length; a++) {
// 		// 	obj[frm[a].s_id] = frm[a].value;
// 		// 	obj[frm[a].student_name] = frm[a].value;
// 		// 	obj[frm[a].attendance] = attendance;
// 		// 	obj[frm[a].time_in] = frm[a].value;
// 		// 	obj[frm[a].time_out] = frm[a].value;
// 		// 	obj[frm[a].topic_covered] = frm[a].value;
// 		// 	obj[frm[a].date_of_attendance] = frm[a].value;
// 		// }
// 		// var jsonData = JSON.stringify(obj);
// 		// ADMISSION_SAVE_URL = '/student/attendance/';
// 		// var token = secure['token'];
// 		// $.ajax({
// 		// 	type: 'POST',
// 		// 	url: BASE_URL + ADMISSION_SAVE_URL,
// 		// 	enctype: 'multipart/form-data',
// 		// 	processData: false,
// 		// 	contentType: false,
// 		// 	data: jsonData,
// 		// 	headers: {
// 		// 		Authorization: 'token ' + token
// 		// 	},
// 		// 	success: function(data) {},
// 		// 	error: function() {}
// 		// });
// 	});
// });
