// Select DOM elements for tasks
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Select DOM elements for notes
const notesForm = document.getElementById("notesForm");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

// Add a new task
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText, taskList);
        taskInput.value = ""; // Clear input
    }
});

// Add a new note
notesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText) {
        createTask(noteText, notesList); // Reusing the same function for notes
        noteInput.value = ""; // Clear input
    }
});

// Create a task or note item
function createTask(itemText, list) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${itemText}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Toggle "done" class on click
    li.querySelector("span").addEventListener("click", () => toggleDone(li));

    // Add event listeners for Edit and Delete buttons
    li.querySelector(".edit").addEventListener("click", () => editTask(li));
    li.querySelector(".delete").addEventListener("click", () => deleteTask(li));

    list.appendChild(li);
}

// Toggle the "done" class
function toggleDone(item) {
    item.classList.toggle("done");
}

// Edit a task or note
function editTask(item) {
    const itemText = item.querySelector("span").textContent;
    const newText = prompt("Edit your item:", itemText);
    if (newText !== null && newText.trim() !== "") {
        item.querySelector("span").textContent = newText.trim();
    }
}

// Delete a task or note
function deleteTask(item) {
    item.parentElement.removeChild(item);
}
