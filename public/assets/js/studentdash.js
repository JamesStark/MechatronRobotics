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
			admissionForm(data.data.id);
			localStorage.setItem('name', data.data.full_name);
			localStorage.setItem('stdname', data.data.full_name);
			localStorage.setItem('email', data.data.email);
			localStorage.setItem('contact', data.data.contact_no);
		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});
}

function admissionForm(id) {
	localStorage.setItem('id', id);
}

function getSession() {
	email = localStorage.getItem('storageName');
	id = localStorage.getItem('id');
	getUserData(id);
	getViewProfile(id);
	//getFranchiseProfile(id);

	//getEditProfile(id);
	$('#auth_user_id').val(id);
	$('#auth_franchise_id').val(id);
	$('#authpw_user').val(id);
	$('#created_by').val(id);
	$('#modified_by').val(id);
	if (email === undefined) {
		alert('Login Please..');
	} else {
		findByEmail(email);
		$('#sessionEmail').val(email);
		/*$("#addmission_email").text(email);*/
	}
}

function getUserData(id) {
	Get_USER_URL = 'users/' + id;
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
			$('#sname').val(data.full_name);
			$('#stdname').val(data.full_name);
			$('#semail').val(data.email);
			$('#scontact').val(data.contact_no);
		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});
}
$(document).ready(function() {
    $('#logout').click(function(){
    localStorage.removeItem("storageName");
    window.location.href = '/../index.html';

    });

    });