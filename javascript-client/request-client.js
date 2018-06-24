
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
          $("#tasksList").text(JSON.stringify(data));
        }
    };
    $.ajax(request);
}

function getTask(){
  call('https://adalab-mock-api.herokuapp.com/tasks/'+$('#taskId').val(),'GET');
}

function deleteTask(){
  call('https://adalab-mock-api.herokuapp.com/tasks/'+$('#taskId').val(),'DELETE');
}

function getTasks(){
  call('https://adalab-mock-api.herokuapp.com/tasks','GET');
}
