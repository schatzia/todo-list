var taskCounter = 0;

document.getElementById('addTaskBtn').addEventListener('click', function(){
	var title = document.getElementById('todoTitle');
	var titleValue = title.value;
	var content = document.getElementById('todoContent');
	var contentValue = content.value;
	

  if(titleValue){
  	taskCounter++;
  	var task = document.createElement('table');
  	task.setAttribute('class','task-list-item');  	
  	task.setAttribute('id', taskCounter); 
	task.innerHTML ='<tr><td class="titleCell">'+ titleValue + '</td></tr><tr><td class="contentCell">' + contentValue + '</td></tr><tr><td><button class="removeBtn" id="task'+ taskCounter +'" onclick="removeTask('+taskCounter+')">Remove</button></td></tr>';
	document.getElementById('task-list').appendChild(task);
  	title.value = '';
  	content.value = '';
  }
  else{
  alert('You need to specify a title...');
  }
  
});

function removeTask(taskId) {
	document.getElementById(taskId).remove(); 
}
