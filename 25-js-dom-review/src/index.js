document.addEventListener("DOMContentLoaded", () => {
  // get the various constants we'll need for our document
  const taskForm = document.getElementById("create-task-form");
  const inputField = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const colorInput = document.getElementsByClassName("color-input")[0];
  // ^-- generally it's easier to get by id than by class
  taskForm.addEventListener("submit", createTask);

  function createTask(e) {
    e.preventDefault(); // <-- Prevents the page from re-rendering
    const userInput = inputField.value;
    const newListItem = document.createElement("li"); // <-- this is free floating
    // newListItem.innerHTML = userInput; // <-- set the inner input
    taskList.appendChild(newListItem); // <-- becomes child of an element
    inputField.value = ""; // <-- clear the input field
    appendPTag(newListItem, userInput);
    appendDeleteButton(newListItem);
    appendEditButton(newListItem);

    switch (colorInput.value) {
      case "high":
        newListItem.style = "color: red;";
        break;
      case "medium":
        newListItem.style = "color: yellow;";
        break;
      case "low":
        newListItem.style = "color: green;";
        break;
    } // <-- sets the item color based on the dropdown input
  }

  function appendDeleteButton(newListItem) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    newListItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
      newListItem.remove(); // <-- the newListItem is saved within the function since we passed it in
    });
  }

  function appendEditButton(newListItem) {
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    newListItem.appendChild(editButton);
    editButton.addEventListener("click", function() {
      newListItem.children[0].innerHTML = prompt(); // <-- This may be a slightly easier way to edit the text than what is below

      // Old Edit Function
      // newListItem.innerText = prompt(); // <-- Creates the input we need to replace text
      // Since we've changed the innerHTML we need to add the edit and delete buttons again
      // appendDeleteButton(newListItem);
      // appendEditButton(newListItem);
    });
  }

  // Changed text to a <p> in order to make it easier to edit without destroying everything
  function appendPTag(newListItem, input) {
    const newPTag = document.createElement("p");
    newPTag.innerHTML = input;
    newListItem.appendChild(newPTag);
  }
});
