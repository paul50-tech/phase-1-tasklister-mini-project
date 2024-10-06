document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const newTaskDescription = document.getElementById('new-task-description').value;

    
    const taskItem = document.createElement('li');
    taskItem.textContent = newTaskDescription;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      if (editButton.textContent === 'Edit') {
        
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskItem.textContent.replace('EditDelete', '');
        taskItem.textContent = '';
        taskItem.appendChild(editInput);
        editButton.textContent = 'Save';
      } else if (editButton.textContent === 'Save') {
        
        const updatedTaskDescription = taskItem.querySelector('input').value;
        taskItem.textContent = updatedTaskDescription;
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        editButton.textContent = 'Edit';
      }
    });

    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    form.reset();
  });
});
