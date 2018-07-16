
function getData() {
    PRODUCT_SERVICE_URL = "rb/products/"
    var token = secure['token'];
    $.ajax({
        type: "GET",
        url: BASE_URL + PRODUCT_SERVICE_URL,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        cache: false,
        headers:{
         'Authorization' : 'token '+token
     },      
     success: function(data) {
        if (data.length) {
            $.each(data, function(i, item) {
                $(".arduino1name").text(item.product_name);
                $(".arduino1description").text(item.product_description);
                $(".arduino1price").text(item.price);
            });
        }
    },
    error: function(msg) {
           // alert(msg.responseText);
       }
   })
}