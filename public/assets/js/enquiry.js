
$(document).ready(function() {
  $("#username").keypress(function(e) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    } else {
        e.preventDefault();
        $("#username_error_message").addClass('alert alert-danger').text("You inseted numeric values!").
        fadeTo(5000, 3000).slideUp(300, function() {
            $(this).
            removeClass();
        });
            $(this).focus(); // focuses the current field.
            return false;
        }
    }); 
  $('#contactno').on('blur', function() {
        if (this.value.length < 10 || this.value.length > 10) { // checks the password value length
            $("contactno_error_message").addClass('alert alert-danger').text("Incorrect mobile number !").
            fadeTo(5000, 3000).slideUp(300, function() {
                $(this).
                removeClass();
            });
            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        }
    });

  $("#contactno").keypress(function(e) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    } else {
        e.preventDefault();
        $("#contactno_error_message").addClass('alert alert-danger').text("Mobile number only accpet neumeric !").
        fadeTo(5000, 3000).slideUp(300, function() {
            $(this).
            removeClass();
        });
            $(this).focus(); // focuses the current field.
            return false;
        }
    });
  $("#enq_submit").click(function() {
    if ($("#req_type ").val() === '--- Request Type ---') {
        $("#req_type_error_message").addClass('alert alert-danger').text("Request type required !").
        fadeTo(5000, 3000).slideUp(300, function() {
            $(this).
            removeClass();
        });

    } else if ($("#username").val() === '') {
      $("#username_error_message").addClass('alert alert-danger').text("Name is required !").
      fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
  } else if ($("#emailid").val() === '') {
    $("#emailid_error_message").addClass('alert alert-danger').text("email is required !").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
} else if (!(validateEmail($("#emailid").val()))) {
    $("#emailid_error_message").addClass('alert alert-danger').text("Invalid email").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });

} else if ($("#contactno").val() === '') {
   $("#contactno_error_message").addClass('alert alert-danger').text("Contact is required !").
   fadeTo(5000, 3000).slideUp(300, function() {
    $(this).
    removeClass();
});   

} else if ($("#sccolname").val() === '') {
    $("#sccolname_error_message").addClass('alert alert-danger').text("This Field is required !").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });

} else if ($("#address").val() === '') {
    $("#address_error_message").addClass('alert alert-danger').text("Location is required !").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
} else if ($("#query").val() === '') {
    $("#query_error_message").addClass('alert alert-danger').text("Query about What?").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });
} else if ($("#city").val() === '') {
    $("#city_error_message").addClass('alert alert-danger').text("City is required !").
    fadeTo(5000, 3000).slideUp(300, function() {
        $(this).
        removeClass();
    });


            $(this).focus(); // focuses the current field.
            return false; // stops the execution.
        } else {
            $(".spinner").show();

        /*var photo=document.getElementById('pic');
        var file=photo.files[0]*/
        var obj = {};   
        var fd = new FormData(document.getElementById('enqueryform'));
        fd.append("request_type",document.getElementById("req_type").value);
        fd.append("name",document.getElementById("username").value);
        fd.append("email",document.getElementById("emailid").value);
       // fd.append("profile_pic",file);
       fd.append("mobile",document.getElementById("contactno").value);
       fd.append("school_college_name",document.getElementById("sccolname").value);
       fd.append("location",document.getElementById("address").value);
       fd.append("query",document.getElementById("query").value);
       ENQUIRY_SERVICE_URL = "enquiry/"
       var token = secure['token'];
       $.ajax({
        type: "POST",
        url: BASE_URL + ENQUIRY_SERVICE_URL,
            //enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            data: fd,
            headers:{
               'Authorization' : 'token '+token
           }, 
           success:function(data, textStatus, jqXHR){
            if (data.success) {
                $(".spinner").hide();
                $("#msgenq").addClass('alert alert-success').text(data.success).
                fadeTo(5000, 3000).slideUp(300, function() {
                    $(this).
                    removeClass();
                });
                $("#enqueryform").trigger("reset");
            } else if(data.error){
                $(".spinner").hide();
                $("#msgenq").addClass('alert alert-danger').text(data.error).
                fadeTo(5000, 3000).slideUp(300, function() {
                    $(this).
                    removeClass();

                });

            }
        },
        error: function(jqXHR, textStatus, errorThrown){

        }

    });
   }
});
});

/*For About us pg*/

$(document).ready(function(){
    $('#enq_submit').click(function() {
      $('#enqwait').show();

  })
});