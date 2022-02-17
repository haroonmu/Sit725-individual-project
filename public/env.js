// connect to the socket
let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})
function createProjectCard(project){
  return `
 
<div class="col s12 m7" id="project-id-${project.id}"style= "width:420px">
<div class="card horizontal">
<div class="card-image">
<img src="${project.img ? project.img:'assets/logo H.jpg'}"style= "height:150px">
</div>
<div class="card-stacked">
<div class="card-content">
<p>${project.info}</p>
</div>
<div class="card-action">
<a href="project.html?pid=${project.id}">Click to open Project</a>
</div>
</div>
</div>
</div>
`;
}

$(document).ready(function(){
  console.log('Ready')
  
  
 
  //test get call
  $.get('/api/projects',(result) => {
    for (let project of result){
      $('#projects').append(createProjectCard(project));
    }
  })
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('#save-project').click((e)=>{
    //validation
    const data = {
      projectID : $('#project-id').val(),
      title: $('#project-title').val(),
      info: $('#project-info').val(),
      img: $('#project-image').val(),
      
    };
    var settings = {
      "url": "/api/projects",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(data),
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      $('#projects').append(createProjectCard(data));
      var instance = M.Modal.getInstance($('.modal'));
      instance.close();
     
    });
  });
})