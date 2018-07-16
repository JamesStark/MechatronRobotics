$(document).ready(function() {

    $('#form_password').on('blur', function() {
        if (this.value.length < 6) { // checks the password value length
            $("#password_error_message").addClass('alert alert-danger').text("Password contain minimum 6 character !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });
    $('#form_cpassword').on('blur', function() {
        if (this.value.length < 6) { // checks the password value length
            $("#retype_password_error_message").addClass('alert alert-danger').text("Confirm Password contain minimum 6 character !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });
    $('#form_contact').on('blur', function() {
        if (this.value.length < 10 || this.value.length > 10) { // checks the password value length
            $("contact_error_message").addClass('alert alert-danger').text("Incorrect mobile number !").
           fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });
    $("#form_fname").keypress(function(e) {
        var regex = new RegExp("^[a-zA-Z ]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        } else {
            e.preventDefault();
            $("#fname_error_message").addClass('alert alert-danger').text("You inseted numeric values!").
           fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false;
        }
    });

    $("#form_contact").keypress(function(e) {
        var regex = new RegExp("^[0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        } else {
            e.preventDefault();
            $("#contact_error_message").addClass('alert alert-danger').text("Mobile number only accpet neumeric !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false;
        }
    });
    $("#submit_button").click(function() {
        if ($("#user_type").val() === '---- Signup As ----') {
            $("#user_type_error_message").addClass('alert alert-danger').text("User type required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if ($("#form_fname").val() === '') {
            $("#fname_error_message").addClass('alert alert-danger').text("Full name is required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
          }
          else if ($("#form_flocation").val() === '') {
              $("#flocation_error_message").addClass('alert alert-danger').text("Location is required !").
              fadeTo(5000, 3000).slideUp(300, function() {
                  $(this).
                  removeClass();
              });
        }
        else if ($("#form_email").val() === '') {
            $("#email_error_message").addClass('alert alert-danger').text("email is required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if ($("#form_contact").val() === '') {
            $("#contact_error_message").addClass('alert alert-danger').text("Contact is required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if ($("#form_password").val() === '') {
            $("#password_error_message").addClass('alert alert-danger').text("Password is required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if ($("#form_cpassword").val() === '') {
            $("#retype_password_error_message").addClass('alert alert-danger').text("Confirm Password is required !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if (!(validateEmail($("#form_email").val()))) {
            $("#email_error_message").addClass('alert alert-danger').text("Invalid email").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
        } else if ($("#form_cpassword").val() != $("#form_password").val()) { // checks the password value length
            $("#msgsignup").addClass('alert alert-danger').text("Password mismatch !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        } else {
           $(".spinner").show();
            var frm = $("#signup").serializeArray();
            var obj = {};
            var token = secure['token'];

            for (var a = 0; a < frm.length; a++) {
                obj[frm[a].name] = frm[a].value;
            }
            USER_SERVICE_URL = "users/"
            var jsonData = JSON.stringify(obj);
            $.ajax({
                type: "POST",
                url: BASE_URL + USER_SERVICE_URL,
                processData: false,
                data: jsonData,
                dataType: 'json',
                async: true,
                contentType: 'application/json',
                headers:{
                  'Authorization' : 'token '+token
              },
              success: function(data) {
                if (data.message) {
                        $(".spinner").hide();
                        $("#msgsignup").addClass('alert alert-success').text(data.message).text("You have Successfully Registered, Please LogIn to continue").
                        fadeTo(5000, 3000).slideUp(300, function() {
                          $(this).
                          removeClass();
                        });
                    $('#loginbox').show();
                    $('#registerbox').hide()
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
                     $(".spinner").hide();
                    $("#msgsignup").addClass('alert alert-danger').text(data.error).
                    fadeTo(5000, 3000).slideUp(300, function() {
                        $(this).
                        removeClass();
                    });

                }$("#signup").trigger("reset");
            },
            error: function(error) {

                    /*console.log(error);
                    swal(error, "You clicked the button!", "error");*/
                }

            });
        }
    })

})

/*$(document).ready(function(){
    $('#submit_button').click(function() {
      $('#Signupwait').show();

    })
  });*/
