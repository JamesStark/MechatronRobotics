var auth_franchise_id;

function getFranchiseData(id) {
	Get_FRANCHISE_URL = 'franchises/' + id;
	var token = secure['token'];
	$.ajax({
		type: 'GET',
		url: BASE_URL + Get_FRANCHISE_URL,
		data: '{}',
		contentType: 'application/json charset=utf-8',
		headers: {
			Authorization: 'token ' + token
		},
		dataType: 'json',
		cache: false,
		success: function(data) {
			$('#sname').val(data.full_name);
			$('#semail').val(data.email);
			$('#scontact').val(data.contact_no);
			$('#center').val(data.center);
		},
		error: function(msg) {}
	});
}

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

$(document).ready(function() {
	$('#franchisePreform').click(function() {
		if ($('#sname ').val() === '') {
			$('#sname_error_message')
				.addClass('alert alert-danger')
				.text('Owner Name is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#semail').val() === '') {
			$('#email_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#scontact').val() === '') {
			$('#contact_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add1').val() === '') {
			$('#add1_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add2').val() === '') {
			$('#add2_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add3').val() === '') {
			$('#add3_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#city').val() === '') {
			$('#city_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#state').val() === '') {
			$('#state_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#country').val() === '') {
			$('#country_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#zip').val() === '') {
			$('#zip_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#org_name').val() === '') {
			$('#org_name_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#org_type').val() === '') {
			$('#org_type_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#gst_no').val() === '') {
			$('#gst_no_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_add1').val() === '') {
			$('#o_add1_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_add2').val() === '') {
			$('#o_add2_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_add3').val() === '') {
			$('#o_add3_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_city').val() === '') {
			$('#o_city_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_state').val() === '') {
			$('#o_state_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_country').val() === '') {
			$('#o_country_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#o_zip').val() === '') {
			$('#o_zip_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#center').val() === '') {
			$('#center_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#dos').val() === '') {
			$('#dos_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#dor').val() === '') {
			$('#dos_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#pic').val() === '') {
			$('#pic_error_message')
				.addClass('alert alert-danger')
				.text('Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		}
	});
});

$(document).ready(function() {
	$('#logout').click(function() {
		sessionStorage.removeItem('email');
		window.location.href = '/../index.html';
	});
});
