function getAttendanceData(){
    center = sessionStorage.getItem('center');
    ADMISSIONS_SERVICE_URL = '/admission/'+center+'/';
            var token = secure['token'];
            $.ajax({
                type: 'GET',
                url: BASE_URL + ADMISSIONS_SERVICE_URL,
               // enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
               // data: fd,
                headers: {
                    Authorization: 'token ' + token
                },
        success: function (data) {

        var trHTML = '';


          $.each(data.data, function (i, item) {
          //  alert(item.id)
            trHTML += '<tr style="font-size:14px;"><td>' + item.full_name + '</td><td>' + item.dob +'</td><td>' + item.date_of_admission + '</td><td>'+ item.level + '</td><td>' +  + '</td><td>' +  + '</td><td>' +  + '</td><td>' +  + '</td><td>' +  + '</td></tr>';
          });

        $('#myTable').append(trHTML);
        },

        error: function (msg) {

            alert(msg.responseText);
        }

    });

  }
