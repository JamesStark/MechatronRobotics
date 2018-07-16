function codeVerifybtn1() {
	$('.spinner').show();
	if ($('#s_code1 ').val() === '') {
		$('.spinner').hide();
		$('#code1_error_msg')
			.addClass('alert alert-danger')
			.text('Please Enter the Code')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	} else if ($('#s_code1').val() === '1234') {
		$('.spinner').hide();
		$('#code1_success_msg')
			.addClass('alert alert-success')
			.text('Code Verified, enjoy your tutorials.')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
		$('#tut1').hide();
		$('#watch_btn1').hide();
		$('#tut_collapse1').show();
	} else {
		$('.spinner').hide();
		$('#code1_errormsg')
			.addClass('alert alert-danger')
			.text('Enter a valid code')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	}
}

function codeVerifybtn2() {
	$('.spinner').show();
	if ($('#s_code2').val() === '') {
		$('.spinner').hide();
		$('#code2_error_msg')
			.addClass('alert alert-danger')
			.text('Please Enter the Code')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	} else if ($('#s_code2').val() === '1234') {
		$('.spinner').hide();
		$('#code1_success_msg')
			.addClass('alert alert-success')
			.text('Code Verified, enjoy your tutorials.')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
		$('#tut1').hide();
		$('#watch_btn1').hide();
		$('#tut_collapse2').show();
	} else {
		$('.spinner').hide();
		$('#code2_errormsg')
			.addClass('alert alert-danger')
			.text('Enter a valid code')
			.fadeTo(5000, 3000)
			.slideUp(300, function() {
				$(this).removeClass();
			});
	}
}
