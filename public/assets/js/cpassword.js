  $(document).ready(function() {
 $("#cpw").click(function() {
 	//$("#enq_submit").click(function() {
 		 // $('#pw').on('blur', function() {
    //     if (this.value.length < 6) { // checks the password value length
    //         $("#pw_error_message").addClass('alert alert-danger').text("Password contain minimum 6 character !").
    //         fadeTo(5000, 3000).slideUp(300, function() {
    //             $(this).
    //             removeClass();
    //         });
    //         $(this).focus(); // focuses the current field.
    //         return false; // stops the execution.
    //     }
    // });

 		$('#n_pw').on('blur', function() {
        if (this.value.length < 6) { // checks the password value length
            $("#npw_error_message").addClass('alert alert-danger').text("Password contain minimum 6 character !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });
    $('#c_pw').on('blur', function() {
        if (this.value.length < 6) { // checks the password value length
            $("#cpw_error_message").addClass('alert alert-danger').text("Confirm Password contain minimum 6 character !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });

    if ($("#old_pw ").val() === '') {
        $("#pw_error_message").addClass('alert alert-danger').text("This field is required !").
        fadeTo(5000, 3000).slideUp(300, function() {
            $(this).
            removeClass();
        });

    } else if ($("#n_pw").val() === '') {
      $("#npw_error_message").addClass('alert alert-danger').text("This field is required !").
      fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
  } else  if ($("#c_pw").val() === '') {
    $("#cpw_error_message").addClass('alert alert-danger').text("This field is required !").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
}
  else if ($("#n_pw").val() != $("#c_pw").val()) { // checks the password value length
            $("#msgcpw").addClass('alert alert-danger').text("Password mismatch !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        } 
          $(".spinner").show();
 	var fd = new FormData(document.getElementById('cpwfrm'));

 			//fd.append("auth_user",document.getElementById("auth_user_id").value);
 			fd.append("id",document.getElementById("authpw_user").value);
            fd.append("password",document.getElementById("old_pw").value);
            fd.append("npassword",document.getElementById("n_pw").value);
            CPASSWORD_SERVICE_URL = "/changepassword/";
             // id=localStorage.getItem("id");
                        //alert(id);
            var token = secure['token'];
            $.ajax({
                type: "PUT",
                url: BASE_URL +  CPASSWORD_SERVICE_URL,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,

                data: fd,
                headers:{
                 'Authorization' : 'token '+token
             }, 
             success:function(data, textStatus, jqXHR){
                if (data.message) {
                	 $(".spinner").hide();
                    $("#msgcpw").addClass('alert alert-success').text(data.message).
                    fadeTo(5000, 3000).slideUp(300, function() {
                        $(this).
                        removeClass();

                    });
                    } else //{
                    $(".spinner").hide();
                    $("#msgcpw").addClass('alert alert-danger').text(data.error).
                    fadeTo(5000, 3000).slideUp(300, function() {
                        $(this).
                        removeClass();
                        
                    });

                //}$("#admission").trigger("reset");
            },
            error: function(jqXHR, textStatus, errorThrown){

            }

        });
        })
         })