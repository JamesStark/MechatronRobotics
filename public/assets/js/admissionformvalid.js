$(document).ready(function() {
	$('#father_name').keypress(function(e) {
		var regex = new RegExp('^[a-zA-Z ]+$');
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		} else {
			e.preventDefault();
			$('#father_name_error_message')
				.addClass('alert alert-danger')
				.text('You inserted numeric values!')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false;
		}
	});
	$('#mother_name').keypress(function(e) {
		var regex = new RegExp('^[a-zA-Z ]+$');
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		} else {
			e.preventDefault();
			$('#mother_name_error_message')
				.addClass('alert alert-danger')
				.text('You inserted numeric values!')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false;
		}
	});
	$('#zip').on('blur', function() {
		if (this.value.length < 6) {
			// checks the password value length
			$('zip_error_message')
				.addClass('alert alert-danger')
				.text('Incorrect zip number !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		}
	});

	$('#zip').keypress(function(e) {
		var regex = new RegExp('^[0-9]+$');
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		} else {
			e.preventDefault();
			$('#zip_error_message')
				.addClass('alert alert-danger')
				.text('Zip only accpet neumeric !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false;
		}
	});

	$('#scontact').on('blur', function() {
		if (this.value.length < 10) {
			// checks the password value length
			$('contact_error_message')
				.addClass('alert alert-danger')
				.text('Incorrect contact number !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		}
	});

	$('#scontact').keypress(function(e) {
		var regex = new RegExp('^[0-9]+$');
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		} else {
			e.preventDefault();
			$('#contact_error_message2')
				.addClass('alert alert-danger')
				.text('Contact number only accpet neumeric !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false;
		}
	});

	$('#update').click(function() {
		if ($('#pic ').val() === '') {
			$('#pic_error_message')
				.addClass('alert alert-danger')
				.text('Profile Pic is required ! !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#dob').val() === '') {
			$('#dob_error_message')
				.addClass('alert alert-danger')
				.text('D.O.B is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#father_name').val() === '') {
			$('#father_name_error_message2')
				.addClass('alert alert-danger')
				.text("Father's Name is required !")
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#mother_name').val() === '') {
			$('#mother_name_error_message2')
				.addClass('alert alert-danger')
				.text("Mother's name is required !")
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			// var ckb = document.getElementsByName('chk[]');
			// var hasChecked = false;
			// for (var i = 0; i < ckb.length; i++) {
			// 	if (ckb[i].checked) {
			// 		hasChecked = true;
			// 		break;
			// 	}
			// }
			// if (hasChecked == false) {
			// 	$('#hobi_error_message')
			// 		.addClass('alert alert-danger')
			// 		.text('Plese select hobby!')
			// 		.fadeTo(5000, 3000)
			// 		.slideUp(300, function() {
			// 			$(this).removeClass();
			// 		});
		} else if ($('#occp').val() === '') {
			$('#occupation_error_message')
				.addClass('alert alert-danger')
				.text("Father's or Mother's occupation is required !")
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#scontact').val() === '') {
			$('#contact_error_message3')
				.addClass('alert alert-danger')
				.text('Contact number is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#add1').val() === '') {
			$('#add1_error_message')
				.addClass('alert alert-danger')
				.text('This Field is required !')
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
		} else if ($('#area').val() === '') {
			$('#area_error_message')
				.addClass('alert alert-danger')
				.text('Area is required !')
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
		} else if ($('#state').val() === '---- Please Select ----') {
			$('#state_error_message')
				.addClass('alert alert-danger')
				.text('State is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#country').val() === '---- Please Select ----') {
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
				.text('zip is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#std').val() === '---- Please Select ----') {
			$('#standard_error_message')
				.addClass('alert alert-danger')
				.text('Qualification is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#school').val() === '') {
			$('#sc_error_message')
				.addClass('alert alert-danger')
				.text('School of College name is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#lvl').val() === '---- Please Select ----') {
			$('#level_error_message')
				.addClass('alert alert-danger')
				.text('Level is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#center').val() === '---- Please Select ----') {
			$('#center_error_message')
				.addClass('alert alert-danger')
				.text('Please Select Center!')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#class').val() === '---- Please Select ----') {
			$('#class_type_error_message')
				.addClass('alert alert-danger')
				.text('Please Select Class Type! !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#doa').val() === '') {
			// checks the date value length
			$('#doa_error_message')
				.addClass('alert alert-danger')
				.text('Date mismatch !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#why1').val() === '') {
			// checks the date value length
			$('#why1_error_message')
				.addClass('alert alert-danger')
				.text('Please Fill this field !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#why2').val() === '') {
			// checks the date value length
			$('#why2_error_message')
				.addClass('alert alert-danger')
				.text('Please Fill this field !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#why3').val() === '') {
			// checks the date value length
			$('#why3_error_message')
				.addClass('alert alert-danger')
				.text('Please Fill this field !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
			$(this).focus(); // focuses the current field.
			return false; // stops the execution.
		} else {
			$('.spinner').show();
			var checkBoxValue = getCheckBoxValue();
			var photo = document.getElementById('pic');
			var file = photo.files[0];
			var obj = {};
			var fd = new FormData(document.getElementById('admission'));
			fd.append('auth_user', document.getElementById('auth_user_id').value);
			fd.append('created_by', document.getElementById('created_by').value);
			fd.append('modified_by', document.getElementById('modified_by').value);
			fd.append('profile_pic', file);
			fd.append('father_name', document.getElementById('fname').value);
			fd.append('mother_name', document.getElementById('mname').value);
			fd.append('parents_occupation', document.getElementById('occp').value);
			fd.append('hobbies', checkBoxValue);
			fd.append('dob', document.getElementById('dob').value);
			fd.append('st_addr1', document.getElementById('add1').value);
			fd.append('st_addr2', document.getElementById('add2').value);
			fd.append('st_addr3', document.getElementById('add3').value);
			fd.append('state', document.getElementById('state').value);
			fd.append('pin', document.getElementById('zip').value);
			fd.append('school_name', document.getElementById('school').value);
			fd.append('standard', document.getElementById('std').value);
			fd.append('level', document.getElementById('lvl').value);
			fd.append('class_type', document.getElementById('class').value);
			fd.append('date_of_admission', document.getElementById('doa').value);
			fd.append('city', document.getElementById('city').value);
			fd.append('center', document.getElementById('center').value);
			fd.append('why_robotics_by_child', document.getElementById('why1').value);
			fd.append(
				'why_robotics_by_parents',
				document.getElementById('why2').value
			);
			fd.append('expectations', document.getElementById('why3').value);
			ADMISSIONS_SERVICE_URL = 'st/admissions/';
			var token = secure['token'];
			$.ajax({
				type: 'POST',
				url: BASE_URL + ADMISSIONS_SERVICE_URL,
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
						// $('#msgadmit')
						// 	.addClass('alert alert-success')
						// 	.text(data.message)
						// 	.fadeTo(5000, 3000)
						// 	.slideUp(300, function() {
						// 		$(this).removeClass();
						// 	});
						var lvlInput = document.getElementById('lvl').value;
						localStorage.setItem('level', lvlInput);
						var classInput = document.getElementById('class').value;
						localStorage.setItem('class', classInput);
						var centerInput = document.getElementById('center').value;
						localStorage.setItem('center', centerInput);
						window.location.href = 'traningfeepay.html';
					} else {
						$('#update').disabled = false;
						$('.spinner').hide();
						$('#msgadmit')
							.addClass('alert alert-danger')
							.text(data.error)
							.fadeTo(5000, 3000)
							.slideUp(300, function() {
								$(this).removeClass();
							});
					}
					$('#admission').trigger('reset');
				},
				error: function(jqXHR, textStatus, errorThrown) {}
			});
		}
	});
});

$(document).ready(function() {
	$('.payfee').click(function() {
		var lvlInput = document.getElementById('lvl').value;
		localStorage.setItem('level', lvlInput);
		var classInput = document.getElementById('class').value;
		localStorage.setItem('class', classInput);
		var centerInput = document.getElementById('center').value;
		localStorage.setItem('center', centerInput);
		window.location.href = 'traningfeepay.html';
	});
});

$(document).ready(function() {
	$('#pic').change(function() {
		$('#picPreview').show();
		var preview = document.getElementById('picPreview');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		reader.addEventListener(
			'load',
			function() {
				preview.src = reader.result;
			},
			false
		);

		if (file) {
			reader.readAsDataURL(file);
		}
	});
});

function getCheckBoxValue() {
	var favorite = [];
	$.each($("input[name='chk[]']:checked"), function() {
		favorite.push($(this).val());
	});
	var checkBoxValue = favorite.join(',');
	return checkBoxValue;

	//alert(checkBoxValue)
}

/*$(document).ready(function(){
    $('#update').click(function() {
      $('#msgwait').show();

    })
  });*/
$(document).ready(function() {
	$('#logout').click(function() {
		localStorage.removeItem('storageName');
		window.location.href = '/../index.html';
	});
});
