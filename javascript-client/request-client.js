
function call(uri, method) {
    var request = {
        url: uri,
        type: method,
        contentType: "application/json",
        accepts: "application/json",
        cache: false,
        dataType: "json",
        error: function(jqXHR, textStatus) {
          console.log("ajax error " + jqXHR.status);
        },
        done: function(msg) {
          console.log(msg);
        },
        success: function(data){
          $("#main").text(JSON.stringify(data));
        }
    };
    $.ajax(request);
}
