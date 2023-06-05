// Select the necessary elements from the HTML
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");

// Add event listener to the button
todoButton.addEventListener("click", addTodo);

// Function to add a new todo item
function addTodo() {
  // Get the value from the input field
  const todoText = todoInput.value;

  // Create a new list item element
  const todoItem = document.createElement("li");

  // Create a checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", markCompleted);

  // Create a label for the todo text
  const todoLabel = document.createElement("label");
  todoLabel.textContent = todoText;

  // Append the checkbox and label to the list item
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoLabel);

  // Append the list item to the todo list
  todoList.appendChild(todoItem);

  // Clear the input field
  todoInput.value = "";
}

// Function to mark a todo item as completed
function markCompleted() {
  const listItem = this.parentElement;
  if (this.checked) {
    listItem.classList.add("completed");
  } else {
    listItem.classList.remove("completed");
  }
}
