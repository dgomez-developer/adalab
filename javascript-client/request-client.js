
function call(uri, method, body) {
    var request = {
        url: uri,
        type: method,
        contentType: "application/json",
        accepts: "application/json",
        body: body,
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
          $('#taskId').val(data.id);
          $('#taskTitle').val(data.title);
          $('#taskDescription').val(data.description);
          $('#taskAuthor').val(data.author);
        }
    };
    $.ajax(request);
}

function getTask(){
  //call('https://adalab-mock-api.herokuapp.com/tasks/'+$('#taskId').val(),'GET', null);
  call('http://localhost:3000/tasks/'+$('#taskId').val(),'GET', null);
}

function deleteTask(){
  //call('https://adalab-mock-api.herokuapp.com/tasks/'+$('#taskId').val(),'DELETE', null);
  call('http://localhost:3000/tasks/'+$('#taskId').val(),'DELETE', null);
}

function getTasks(){
  // call('https://adalab-mock-api.herokuapp.com/tasks','GET', null);
  call('http://localhost:3000/tasks/','GET', null);
}

function updateTask(){

  var taskId = $('#taskId').val();
  var taskTitle = $('#taskTitle').val();
  var taskDescription = $('#taskDescription').val();
  var taskAuthor = $('#taskAuthor').val();
  var body = new Object();
  body.title = taskTitle;
  body.description = taskDescription;
  body.author = taskAuthor;
  // call('https://adalab-mock-api.herokuapp.com/tasks/'+taskId, 'PUT', body);
  call('http://localhost:3000/tasks/'+taskId, 'PUT', body);
}
