
function call(uri, method, body) {
    var request = {
        url: uri,
        type: method,
        contentType: "application/json",
        accepts: "application/json",
        cache: false,
        dataType: "json",
        error: function(jqXHR, textStatus) {
          console.log("ajax error " + jqXHR.status + textStatus);
        },
        done: function(msg) {
          console.log(msg);
        },
        success: function(data, textStatus, xhr){
          $("#tasksList").text("Code: " + xhr.status + " Body: " + JSON.stringify(data));
        }
    };
    if(body != null) {
      request.data = JSON.stringify(body);
    }
    $.ajax(request);
}
