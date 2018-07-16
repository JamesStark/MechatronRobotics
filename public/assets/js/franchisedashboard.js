
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

function getSession() {
	email = localStorage.getItem('email');
  // alert('email '+email)

  if (email === undefined) {
		alert('Login Please..');
	}
	else {
		findByEmail(email);
		$('#sessionEmail').val(email);
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
			$('#auth_franchise_id').val(id);
			$('#authpw_user').val(id);
			$('#created_by').val(id);
			$('#modified_by').val(id);
		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});
}

function getSessionForFranchise(){
	email = sessionStorage.getItem('email');

	$('#email').text(email);
	findByEmailFranchise(email);


}
var center;
function findByEmailFranchise(email) {
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
			$('#name').text(data.data.full_name);
			$('#fname').text(data.data.full_name);
			getUserData(data.data.id);
			sessionStorage.setItem('center',data.data.f_center)

		},

		error: function(msg) {
			//alert(msg.responseText);
			//alert(msg.responseText);
		}
	});


}
