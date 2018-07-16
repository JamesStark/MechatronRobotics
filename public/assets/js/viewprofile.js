var auth_user_id;
var admission_id;
var PIC_URL = 'https://api.mechatronrobotics.com/mechatron-api/mechatronapi';
function getViewProfile(id) {
	VIEW_SERVICE_URL = 'st/admission/' + id;
	//alert(BASE_URL+Get_USER_URL)
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
			$.each(data.data, function(i, item) {
				if (data.data.length) {
					$('#admmsg').show();
					$('#continue').show();
					$('#update').attr('disabled', 'disabled');
					$('#admissionformcontainer').hide();
				}
				$('#dob').val(item.dob);
				//alert(item.dob);
				auth_user_id = item.auth_user;
				admission_id = item.id;
				$('#id').val(auth_user_id);
				var hobbies = item.hobbies.split(',');
				if (hobbies[0] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[1] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[2] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[3] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[4] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[5] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[6] == hobbi['rb']) $('#rbt').prop('checked', true);
				if (hobbies[0] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[1] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[2] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[3] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[4] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[5] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[6] == hobbi['sp']) $('#sprts').prop('checked', true);
				if (hobbies[0] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[1] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[2] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[3] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[4] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[5] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[6] == hobbi['dn']) $('#dnc').prop('checked', true);
				if (hobbies[0] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[1] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[2] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[3] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[4] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[5] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[6] == hobbi['msc']) $('#msc').prop('checked', true);
				if (hobbies[0] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[1] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[2] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[3] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[4] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[5] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[6] == hobbi['cft']) $('#cft').prop('checked', true);
				if (hobbies[0] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[1] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[2] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[3] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[4] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[5] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[6] == hobbi['dwg']) $('#dwg').prop('checked', true);
				if (hobbies[0] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[1] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[2] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[3] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[4] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[5] == hobbi['oth']) $('#oth').prop('checked', true);
				if (hobbies[6] == hobbi['oth']) $('#oth').prop('checked', true);
				$('#fname').val(item.father_name);
				$('#mname').val(item.mother_name);
				$('#occp').val(item.mf_occupation);
				$('#add1').val(item.st_addr1);
				$('#add2').val(item.st_addr2);
				$('#add3').val(item.st_addr3);
				$('#city').val(item.city);
				$('#state').val(item.state);
				$('#country').val(item.country);
				$('#zip').val(item.pin);
				$('#add3').val(item.st_addr3);
				$('#school').val(item.school_name);
				$('#std').val(item.standard);
				$('#lvl').val(item.level);
				$('#center').val(item.center);
				$('#class').val(item.class_type);
				$('#doa').val(item.date_of_admission);
				$('#why1').val(item.why_robotics_by_child);
				$('#why2').val(item.why_robotics_by_parents);
				$('#why3').val(item.expectations);
				//$("#simg").val(item.profile_pic);
				$('#imgprofile').attr('src', PIC_URL + item.profile_pic);
				$('#imgupld').attr('src', PIC_URL + item.profile_pic);
				$('#imgupldbd').attr('src', PIC_URL + item.profile_pic);
			});
		},

		error: function(msg) {}
		//alert(msg.responseText);
		//alert(msg.responseText);
	});
}

function getCheckBoxValue() {
	var favorite = [];
	$.each($("input[name='chk[]']:checked"), function() {
		favorite.push($(this).val());
	});
	var checkBoxValue = favorite.join(',');
	return checkBoxValue;

	//alert(checkBoxValue)
}

function updateUserDetails() {
	$('.spinner').show();
	UPDATE_SERVICE_URL = 'updateuserdetail/' + auth_user_id + '/';
	var token = secure['token'];
	var formData = new FormData(document.getElementById('admissionedit'));
	formData.append('email', document.getElementById('semail').value);
	formData.append('contact_no', document.getElementById('scontact').value);
	formData.append('full_name', document.getElementById('sname').value);
	formData.append('full_name', document.getElementById('stdname').value);
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
				$('#useredit')
					.addClass('alert alert-success')
					.text(data.message)
					.fadeTo(5000, 3000)
					.slideUp(300, function() {
						$(this).removeClass();
					});
			} else {
				$('.spinner').hide();
				$('#useredit')
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
			$('#useredit')
				.addClass('alert alert-danger')
				.text(msg)
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		}
	});
}
function updateAdmissionDetails() {
	$('.spinner').show();
	UPDATE_SERVICE_URL = 'st/updateadmission/' + admission_id + '/';
	var token = secure['token'];
	var checkBoxValue = getCheckBoxValue();
	var fd = new FormData(document.getElementById('admissionedit'));
	fd.append('full_name', document.getElementById('sname').value);
	fd.append('email', document.getElementById('semail').value);
	fd.append('contact_no', document.getElementById('scontact').value);
	fd.append('father_name', document.getElementById('fname').value);
	fd.append('mother_name', document.getElementById('mname').value);
	fd.append('mf_occupation', document.getElementById('occp').value);
	fd.append('hobbies', checkBoxValue);
	fd.append('dob', document.getElementById('dob').value);
	fd.append('st_addr1', document.getElementById('add1').value);
	fd.append('st_addr2', document.getElementById('add2').value);
	fd.append('st_addr3', document.getElementById('add3').value);
	fd.append('state', document.getElementById('state').value);
	fd.append('country', document.getElementById('country').value);
	fd.append('pin', document.getElementById('zip').value);
	fd.append('school_name', document.getElementById('school').value);
	fd.append('standard', document.getElementById('std').value);
	fd.append('level', document.getElementById('lvl').value);
	fd.append('class_type', document.getElementById('class').value);
	fd.append('city', document.getElementById('city').value);
	fd.append('why_robotics_by_child', document.getElementById('why1').value);
	fd.append('why_robotics_by_parents', document.getElementById('why2').value);
	fd.append('expectations', document.getElementById('why3').value);
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
			$('#admissionedit')
				.addClass('alert alert-success')
				.text(data.message)
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		},

		error: function(msg) {}
	});
}

$(document).ready(function() {
	$('#password').on('blur', function() {
		if (this.value.length < 6) {
			// checks the password value length
			$('#passwordmsg')
				.addClass('alert alert-danger')
				.text('Password contain minimum 6 character !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		}
	});

	$('#npassword').on('blur', function() {
		if (this.value.length < 6) {
			// checks the password value length
			$('#npasswordmsg')
				.addClass('alert alert-danger')
				.text('Password contain minimum 6 character !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		}
	});

	$('#cnpassword').on('blur', function() {
		if (this.value.length < 6) {
			// checks the password value length
			$('#cnpasswordmsg')
				.addClass('alert alert-danger')
				.text('Password contain minimum 6 character !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		}
	});
});

function updatePassword() {
	if ($('#password').val() === '') {
		$('#passwordmsg')
			.addClass('alert alert-danger')
			.text('Old Password required !')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	} else if ($('#npassword').val() === '') {
		$('#npasswordmsg')
			.addClass('alert alert-danger')
			.text('New Password required !')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	} else if ($('#cnpassword').val() === '') {
		$('#cnpasswordmsg')
			.addClass('alert alert-danger')
			.text('Confirm Password required !')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	} else if ($('#npassword').val() != $('#cnpassword').val()) {
		// checks the password value length
		$('#passwordedit')
			.addClass('alert alert-danger')
			.text('Password mismatch !')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
		$(this).focus(); // focuses the current field.
		return false; // stops the execution.
	} else {
		$('.spinner').show();
		CHANGE_PASSWORD_URL = 'changepassword/';
		var token = secure['token'];
		var id = document.getElementById('id').value;
		var password = document.getElementById('password').value;
		var npassword = document.getElementById('npassword').value;
		var cnpassword = document.getElementById('cnpassword').value;
		formData = new FormData(document.getElementById('changepasswordform'));
		formData.append('id', id);
		formData.append('password', password);
		formData.append('npassword', npassword);
		$.ajax({
			type: 'PUT',
			url: BASE_URL + CHANGE_PASSWORD_URL,
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			data: formData,
			contentType: false,
			headers: {
				Authorization: 'token ' + token
			},
			success: function(data) {
				if (data.message) {
					$('.spinner').hide();
					$('#passwordedit')
						.addClass('alert alert-success')
						.text(data.message)
						.fadeTo(5000, 3000)
						.slideUp(300, function() {
							$(this).removeClass();
						});
				} else {
					$('.spinner').hide();
					$('#passwordedit')
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
				$('#useredit')
					.addClass('alert alert-danger')
					.text(msg)
					.fadeTo(5000, 3000)
					.slideUp(300, function() {
						$(this).removeClass();
					});
			}
		});
	}
}

$(document).ready(function() {
	$('#editprofile1').click(function() {
		document.getElementById('updatebt').disabled = false;
	});
	$('#editprofile2').click(function() {
		document.getElementById('sname').disabled = false; // .text("Congratulations you Got 50% Discount").css({ "font-size": "150%" , "color": "#2f5597" })
		document.getElementById('semail').disabled = false;
		document.getElementById('scontact').disabled = false;
		document.getElementById('simg').disabled = false;
		document.getElementById('dob').disabled = false;
		document.getElementById('fname').disabled = false;
		document.getElementById('mname').disabled = false;
		document.getElementById('occp').disabled = false;
		document.getElementById('add1').disabled = false;
		document.getElementById('add2').disabled = false;
		document.getElementById('add3').disabled = false;
		document.getElementById('city').disabled = false;
		document.getElementById('state').disabled = false;
		document.getElementById('country').disabled = false;
		document.getElementById('zip').disabled = false;
		document.getElementById('school').disabled = false;
		document.getElementById('std').disabled = false;
		document.getElementById('lvl').disabled = false;
		document.getElementById('center');
		document.getElementById('class').disabled = false;
		document.getElementById('doa').disabled = false;
		document.getElementById('why1').disabled = false;
		document.getElementById('why2').disabled = false;
		document.getElementById('why3').disabled = false;
		document.getElementById('updatebt').disabled = false;
	});
});

$(document).ready(function() {
	$('#updateinfo').click(function() {
		$('.spinner').show();
		var checkBoxValue = getCheckBoxValue();
		var fd = new FormData(document.getElementById('admissionupdate'));
		fd.append('auth_user', document.getElementById('auth_user_id1').value);
		fd.append('created_by', document.getElementById('created_by1').value);
		fd.append('modified_by', document.getElementById('modified_by1').value);
		//fd.append("profile_pic",file);
		fd.append('father_name', document.getElementById('fname1').value);
		fd.append('mother_name', document.getElementById('mname1').value);
		fd.append('mf_occupation', document.getElementById('occp1').value);
		fd.append('hobbies', checkBoxValue);
		fd.append('dob', document.getElementById('dob1').value);
		fd.append('st_addr1', document.getElementById('add11').value);
		fd.append('st_addr2', document.getElementById('add21').value);
		fd.append('st_addr3', document.getElementById('add31').value);
		fd.append('state', document.getElementById('state1').value);
		fd.append('pin', document.getElementById('zip1').value);
		fd.append('school_name', document.getElementById('school1').value);
		fd.append('standard', document.getElementById('std1').value);
		fd.append('level', document.getElementById('lvl1').value);
		fd.append('class_type', document.getElementById('class1').value);
		fd.append('date_of_admission', document.getElementById('doa1').value);
		fd.append('city', document.getElementById('city1').value);
		fd.append('center', document.getElementById('center1').value);
		fd.append('why_robotics_by_child', document.getElementById('why11').value);
		fd.append(
			'why_robotics_by_parents',
			document.getElementById('why21').value
		);
		fd.append('expectations', document.getElementById('why31').value);
		VIEW_SERVICE_URL = 'st/admissions/' + admission_id;
		var token = secure['token'];
		$.ajax({
			type: 'PUT',
			url: BASE_URL + VIEW_SERVICE_URL,
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			data: fd,
			headers: {
				Authorization: 'token ' + token
			},
			success: function(data, textStatus, jqXHR) {
				if (data.message) {
					$('.spinner').hide();
					$('#msgadmit1')
						.addClass('alert alert-success')
						.text(data.message)
						.fadeTo(5000, 3000)
						.slideUp(300, function() {
							$(this).removeClass();
						});
				} else $('.spinner').hide(); //{
				$('#msgadmit1')
					.addClass('alert alert-danger')
					.text(data.error)
					.fadeTo(5000, 3000)
					.slideUp(300, function() {
						$(this).removeClass();
					});

				//}$("#admission").trigger("reset");
			},
			error: function(jqXHR, textStatus, errorThrown) {}
		});
	});
});

function updateProfilePic() {
	$('.spinner').show();
	UPDATE_SERVICE_URL = 'update/photo/' + admission_id + '/';
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

var load;
function myFunction() {
	load = setTimeout(showPage, 4000);
}
function showPage() {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('loadertext').style.display = 'none';
	document.getElementById('main-wrapper').style.display = '';
}
function printDiv(divID) {
	var divElements = document.getElementById(divID).innerHTML;
	var oldPage = document.body.innerHTML;
	document.body.innerHTML =
		'<html><head><title></title></head><body>' + divElements + '</body>';
	window.print();
	document.body.innerHTML = oldPage;
}

$(document).ready(function() {
	$('#logout').click(function() {
		sessionStorage.removeItem('email');
		window.location.href = '/../index.html';
	});
});
