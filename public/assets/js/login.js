$(document).ready(function() {
	$('#login').click(function() {
		if ($('#emailid1').val() === '') {
			$('#emailid1_error_message')
				.addClass('alert alert-danger')
				.text('Opps Email is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else if ($('#passwordid1').val() === '') {
			$('#passwordid1_error_message')
				.addClass('alert alert-danger')
				.text('Opps Password is required !')
				.fadeTo(5000, 3000)
				.slideUp(300, function() {
					$(this).removeClass();
				});
		} else {
			$('.spinner').show();
			var frm = $('#loginfrm').serializeArray();
			var obj = {};

			for (var a = 0; a < frm.length; a++) {
				obj[frm[a].name] = frm[a].value;
			}
			var jsonData = JSON.stringify(obj);
			LOGIN_SERVICE_URL = 'loginstatus/';
			var token = secure['token'];

			$.ajax({
				type: 'POST',
				url: BASE_URL + LOGIN_SERVICE_URL,
				processData: false,
				data: jsonData,
				dataType: 'json',
				async: true,
				contentType: 'application/json',
				headers: {
					Authorization: 'token ' + token
				},
				success: function(data) {
					if (data.error) {
						$('.spinner').hide();
						$('#msglogin')
							.addClass('alert alert-danger')
							.text(data.error)
							.fadeTo(5000, 3000)
							.slideUp(300, function() {
								$(this).removeClass();
							});
					} else {
						if (data.student) {
							var getInput = document.getElementById('emailid1').value;
							localStorage.setItem('storageName', getInput);
							// document.cookies("")
							window.location.href = '/student/dashboard.html';
						} else if (data.franchise) {
							$('.spinner').hide();
							var getInput = document.getElementById('emailid1').value;
							sessionStorage.setItem('email', getInput);
							window.location.href = '/franchise/dashboard.html';
							// window.location.href = '/franchise/preformfranchise.html';
						} else if (data.trainer) {
							$('.spinner').hide();
							var getInput = document.getElementById('emailid1').value;
							sessionStorage.setItem('email', getInput);
							// window.location.href = '/franchise/dashboard.html';
							window.location.href = '/trainer/trainerdetailsform.html';
						} else {
							$('.spinner').hide();
						}
					}
					$('#login').trigger('reset');
				},
				error: function(error) {
					/*console.log(error);
                swal(error, "You clicked the button!", "error");*/
				}
			});
		}
	});
});

/*$(document).ready(function(){
    $('#login').click(function() {
      $('#loginwait').show();

    })
  });*/
