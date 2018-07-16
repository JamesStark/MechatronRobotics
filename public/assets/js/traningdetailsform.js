function FillForm(f) {
	if (f.billingtoo.checked == true) {
		f.tp_addr1.value = f.pr_addr1.value;
		f.tp_addr2.value = f.pr_addr2.value;
		f.tp_addr3.value = f.pr_addr3.value;
		f.tp_city.value = f.pr_city.value;
		f.tp_state.value = f.pr_state.value;
		f.tp_country.value = f.pr_country.value;
		f.tp_pin.value = f.pin.value;
	}
}

function findByEmail(email) {
	FIND_BY_EMAIL_URL = 'users/' + email;
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + FIND_BY_EMAIL_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			$('#name').val(data.data.full_name);
			getUserData(data.data.id);
			//			getViewProfile(data.data.id);
			sessionStorage.setItem('id', data.data.id);
			localStorage.setItem('name', data.data.full_name);
			localStorage.setItem('email', data.data.email);
			localStorage.setItem('contact', data.data.contact_no);
		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});
}

function verifyTrainer() {
	id = sessionStorage.getItem('id');
	Get_USER_URL = '/trainer/status/' + id;
	// alert('id'+id)
	//alert(BASE_URL+Get_USER_URL)
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_USER_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			if (data.error) {
				// $('#admissionformcontainer').hide();
				$('#reg_admmsg').show();
				$('#reg_continue').show();
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.error);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else if (data.not_reg) {
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.not_reg);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else {
				// $('#admissionformcontainer').hide();
				$('#reg_admmsg').show();
				$('#reg_continue').show();
				if (document.getElementById('performance'))
					$('#performance').href = '../trainer/performance.html';
				if (document.getElementById('students'))
					$('#students').href = '../trainer/student-details.html';
				if (document.getElementById('attendance'))
					$('#attendance').href = '../trainer/trainer-student-attendance.html';
			}
		},
		error: function(msg) {}
	});
}

function verifyTrainerstudent() {
	id = sessionStorage.getItem('id');
	Get_USER_URL = '/trainer/status/' + id;
	// alert('id'+id)
	//alert(BASE_URL+Get_USER_URL)
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_USER_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			if (data.error) {
				$('#admissionformcontainer').hide();
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.error);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else if (data.not_reg) {
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.not_reg);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else {
				$('#admissionformcontainer').hide();
				if (document.getElementById('performance'))
					$('#performance').href = '../trainer/performance.html';
				if (document.getElementById('students'))
					$('#students').href = '../trainer/student-details.html';
				window.location.href = '/trainer/student-details.html';
				if (document.getElementById('attendance'))
					$('#attendance').href = '../trainer/trainer-student-attendance.html';
			}
		},
		error: function(msg) {}
	});
}

function verifyTrainerperformance() {
	id = sessionStorage.getItem('id');
	Get_USER_URL = '/trainer/status/' + id;
	// alert('id'+id)
	//alert(BASE_URL+Get_USER_URL)
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_USER_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			if (data.error) {
				$('#admissionformcontainer').hide();
				$('#admmsg').show();
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.error);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else if (data.not_reg) {
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.not_reg);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else {
				$('#admissionformcontainer').hide();
				if (document.getElementById('performance'))
					$('#performance').href = '../trainer/performance.html';
				window.location.href = '/trainer/performance.html';
				if (document.getElementById('students'))
					$('#students').href = '../trainer/student-details.html';
				if (document.getElementById('attendance'))
					$('#attendance').href = '../trainer/trainer-student-attendance.html';
			}
		},
		error: function(msg) {}
	});
}

function verifyTrainerattendance() {
	id = sessionStorage.getItem('id');
	Get_USER_URL = '/trainer/status/' + id;
	// alert('id'+id)
	//alert(BASE_URL+Get_USER_URL)
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_USER_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			if (data.error) {
				$('#admissionformcontainer').hide();
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.error);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else if (data.not_reg) {
				$('#vryfymsg').modal('show');
				$('#verifymsg').text(data.not_reg);
				$('#performance').href = '#';
				$('#students').href = '#';
				$('#attendance').href = '#';
			} else {
				$('#admissionformcontainer').hide();
				if (document.getElementById('performance'))
					$('#performance').href = '../trainer/performance.html';
				if (document.getElementById('students'))
					$('#students').href = '../trainer/student-details.html';
				if (document.getElementById('attendance'))
					$('#attendance').href = '../trainer/trainer-student-attendance.html';
				window.location.href = '../trainer/trainer-student-attendance.html';
			}
		},
		error: function(msg) {}
	});
}

function getSession() {
	email = sessionStorage.getItem('email');
	if (email === undefined) {
		alert('Login Please..');
	} else {
		findByEmail(email);
		$('#sessionEmail').val(email);
		if (data.error) {
			$('#admissionformcontainer').hide();
			$('#vryfymsg').modal('show');
		} else if (data.not_reg) {
			$('#vryfymsg').modal('show');
			$('#verifymsg').text(data.not_reg);
		} else {
			$('#admissionformcontainer').hide();
		}
	}
}

function getUserData(id) {
	Get_USER_URL = 'users/' + id;
	// alert('id'+id)
	//alert(BASE_URL+Get_USER_URL)
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_USER_URL,
		data: '{}',
		contentType: 'application/json; charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			// alert('name ; '+data.full_name)

			$('#sname').val(data.full_name);
			$('#semail').val(data.email);
			$('#scontact').val(data.contact_no);
			$('#auth_user_id').val(id);
			$('#authpw_user').val(id);
			$('#created_by').val(id);
			$('#modified_by').val(id);
			$('#semailid').val(data.email);
			$('#name').text(data.full_name);
			//$('#fname').text(data.data.full_name);
		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});
}

$(document).ready(function() {
	$('#submitt').click(function() {
		if ($('#center').val() === '---- Please Select ----') {
			$('#center_error_message')
				.addClass('alert alert-danger')
				.text('Center is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#quali').val() === '') {
			$('#quali_error_message')
				.addClass('alert alert-danger')
				.text('Qualification is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add1t').val() === '') {
			$('#add1t_error_message')
				.addClass('alert alert-danger')
				.text('HouseNo is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add2t').val() === '') {
			$('#add2t_error_message')
				.addClass('alert alert-danger')
				.text('Street is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add3t').val() === '') {
			$('#add2t_error_message')
				.addClass('alert alert-danger')
				.text('Landmark is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#cityt').val() === '') {
			$('#cityt_error_message')
				.addClass('alert alert-danger')
				.text('City is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#statet').val() === '') {
			$('#statet_error_message')
				.addClass('alert alert-danger')
				.text('State is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#countryt').val() === '') {
			$('#countryt_error_message')
				.addClass('alert alert-danger')
				.text('Country is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#zipt').val() === '') {
			$('#zipt_error_message')
				.addClass('alert alert-danger')
				.text('Zip is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add1').val() === '') {
			$('#add1_error_message')
				.addClass('alert alert-danger')
				.text('HouseNo is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add2').val() === '') {
			$('#add2_error_message')
				.addClass('alert alert-danger')
				.text('Street is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add3').val() === '') {
			$('#add2_error_message')
				.addClass('alert alert-danger')
				.text('Landmark is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#city').val() === '') {
			$('#city_error_message')
				.addClass('alert alert-danger')
				.text('City is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#state').val() === '') {
			$('#state_error_message')
				.addClass('alert alert-danger')
				.text('State is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#country').val() === '') {
			$('#country_error_message')
				.addClass('alert alert-danger')
				.text('Country is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#zip').val() === '') {
			$('#zip_error_message')
				.addClass('alert alert-danger')
				.text('Zip is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		} else {
			$('.spinner').show();
			var frm = $('#trainer').serializeArray();
			var obj = {};
			var token = secure['token'];

			for (var a = 0; a < frm.length; a++) {
				obj[frm[a].name] = frm[a].value;
			}
			USER_SERVICE_URL = '/rb/trainers/';
			var jsonData = JSON.stringify(obj);
			$.ajax({
				type: 'POST',
				url: BASE_URL + USER_SERVICE_URL,
				processData: false,
				data: jsonData,
				dataType: 'json',
				async: true,
				contentType: 'application/json',
				headers: {
					Authorization: 'token ' + token
				},
				success: function(data) {
					if (data.message) {
						$('#admissionformcontainer').hide();
						$('#admmsg').show();
						$('.spinner').hide();
						$('#msgadmit')
							.addClass('alert alert-success')
							.text(data.message)
							.text('You have Successfully Registered')
							.fadeTo(5000, 3000)
							.slideUp(300, function() {
								$(this).removeClass();
							});
						// $('#loginbox').show();
						// $('#registerbox').hide()
						//   if(document.getElementById("user_type").value=='student'){
						//   var getInput = document.getElementById("emailid1").value;
						//   localStorage.setItem("storageName", getInput);
						//   window.location.href="/dashboards/admissionform.html";
						// }
						// else if(document.getElementById("user_type").value=='franchise'){
						//   var getInput = document.getElementById("emailid1").value;
						//   localStorage.setItem("storageName", getInput);
						//   window.location.href="/franchise/dashboard.html";
						// }
					} else {
						$('.spinner').hide();
						$('#msgadmit')
							.addClass('alert alert-danger')
							.text(data.error)
							.fadeTo(5000, 3000)
							.slideUp(300, function() {
								$(this).removeClass();
							});
					}
					$('#trainer').trigger('reset');
				},
				error: function(error) {}
			});
		}
	});
});

function getViewProfile() {
	id = sessionStorage.getItem('id');
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
			getAdmissionDataForTrainer(data.data.center);
			getAttendanceTrainer(data.data.center);
			$('#sname').val(data.full_name);
			$('#semail').val(data.email);
			$('#scontact').val(data.contact_no);
			$('#center').val(data.center);
		},

		error: function(msg) {
			$('#trainer').show();
		}
		//alert(msg.responseText);
		//alert(msg.responseText);
	});
}
//})

$('#editfprofile1').click(function() {
	document.getElementById('sname').disabled = false;
	document.getElementById('semail').disabled = false;
	document.getElementById('scontact').disabled = false;
	document.getElementById('center').disabled = false;
});

function updateFranchiseDetails() {
	$('.spinner').show();
	UPDATE_SERVICE_URL = 'franchises/' + auth_user_id + '/';
	var token = secure['token'];
	var formData = new FormData(document.getElementById('franchiseform'));
	formData.append('full_name', document.getElementById('sname').value);
	formData.append('email', document.getElementById('semail').value);
	formData.append('contact_no', document.getElementById('scontact').value);
	formData.append('contact_no', document.getElementById('center').value);
	$.ajax({
		type: 'PUT',
		url: BASE_URL + UPDATE_SERVICE_URL,
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: formData,
		contentType: false,
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data, textStatus, jqXHR) {
			if (data.message) {
				$('.spinner').hide();
				$('#franchiseedit')
					.addClass('alert alert-success')
					.text(data.message)
					.fadeTo(5000, 3000)
					.slideUp(300, function() {
						$(this).removeClass();
					});
			} else {
				$('.spinner').hide();
				$('#franchiseedit')
					.addClass('alert alert-danger')
					.text(data.error)
					.fadeTo(5000, 3000)
					.slideUp(300, function() {
						$(this).removeClass();
					});
			}
		},
		error: function(msg) {
			$('.spinner').hide();
			$('#franchiseedit')
				.addClass('alert alert-danger')
				.text(msg)
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		}
	});
}

function updateProfilePic() {
	$('.spinner').show();
	UPDATE_SERVICE_URL = 'update/photo/' + auth_user_id + '/';
	var token = secure['token'];
	var photo = document.getElementById('simg');
	var file = photo.files[0];
	var fd = new FormData(document.getElementById('profile'));
	fd.append('profile_pic', file);
	$.ajax({
		type: 'PUT',
		url: BASE_URL + UPDATE_SERVICE_URL,
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: fd,
		contentType: false,
		headers: {
			Authorization: 'token ' + token
		},
		success: function(data, textStatus, jqXHR) {
			$('.spinner').hide();
			$('#profileup')
				.addClass('alert alert-success')
				.text(data.message)
				//$('#profileup')

				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			document.location.reload(true);
		},

		error: function(msg) {}
	});
}

function getAdmissionData() {
	center = sessionStorage.getItem('center');
	ADMISSIONS_SERVICE_URL = '/admission/' + center + '/';
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
				//  alert(item.id)
				trHTML +=
					'<tr style="font-size:14px;"><td>' +
					item.id +
					'</td><td>' +
					item.full_name +
					'</td><td>' +
					item.date_of_admission +
					'</td><td>' +
					item.level +
					'</td><td>' +
					+'</td><td>' +
					+'</td><td>' +
					+'</td><td>' +
					+'</td><td>' +
					+'</td></tr>';
			});

			$('#studentst').append(trHTML);
		},

		error: function(msg) {
			alert(msg.responseText);
		}
	});
}

$(document).ready(function() {
	$('#logout').click(function() {
		sessionStorage.removeItem('email');
		window.location.href = '/../index.html';
	});
});
