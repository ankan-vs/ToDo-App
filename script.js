function addTask() {
    let data=document.getElementById('taskInput')
    let inputValue = data.value;
    let toDoLists = document.querySelector("#toDoList");
   
    //check if input field is empty
    if (!inputValue) {
        alert("Please enter a task!!");
        return; 
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className = "task";

    // Create the checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox"; // Assign a class for potential styling or functionality

    // Create a span element for the task text
    const taskText = document.createElement("span");
    taskText.textContent = inputValue; // Set the text content to the user input

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteTask";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        listItem.remove();
    };

    // Append the checkbox and task text to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the new list item to the to-do list
    toDoLists.appendChild(listItem);

    //setting the input field empty
    data.value=''
}

