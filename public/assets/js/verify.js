
function verifyCertificate() {
    var WINDOW_URL = (window.location.href).toString();
    var token = secure['token'];
    certificate_no = WINDOW_URL.split("/")[4];
    if (certificate_no == '') {
        $("#error").addClass('alert alert-danger').text("Invalid URL").
       fadeTo(5000, 3000).slideUp(300, function() {
            $(this).
            removeClass();
        });
        $("#wait").hide();
    } else {
        ADDITIONAL_URL = 'verify/' + certificate_no + '/';
        $.ajax({
            type: "GET",
            url: BASE_URL + ADDITIONAL_URL,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            async: false,
            headers:{
               'Authorization' : 'token '+token
           },    
           success: function(data) {
            if (data.error) {
                window.location.href = REDIRECT_URL;
            } 
            else {

                $("#title").show();
                $("#message").text(data.message);
                $("#wait").hide();
            }
        },
        error: function(msg) {
            $("#wait").hide();
            window.location.href = REDIRECT_URL;
        }
    })
    }
}
