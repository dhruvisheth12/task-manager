const API = "http://localhost:3000/tasks";

// Load Tasks
async function loadTasks() {

  const res = await axios.get(API);
  const tasks = res.data;

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">
        ${task.title}
      </span>

      <button onclick="toggleTask('${task._id}', ${!task.completed})">
        ${task.completed ? "Undo" : "Complete"}
      </button>

      <button onclick="editTask('${task._id}','${task.title}')">
        Edit
      </button>

      <button onclick="deleteTask('${task._id}')">
        Delete
      </button>
    `;

    list.appendChild(li);
  });
}

// Add Task
async function addTask() {

  const input = document.getElementById("taskInput");

  if (!input.value.trim()) return;

  await axios.post(API, {
    title: input.value
  });

  input.value = "";
  loadTasks();
}

// Toggle Task
async function toggleTask(id, completed) {

  await axios.put(`${API}/${id}`, {
    completed
  });

  loadTasks();
}

// Edit Task
async function editTask(id, oldTitle) {

  const newTitle = prompt("Edit Task", oldTitle);

  if (!newTitle) return;

  await axios.put(`${API}/${id}`, {
    title: newTitle
  });

  loadTasks();
}

// Delete Task
async function deleteTask(id) {

  await axios.delete(`${API}/${id}`);

  loadTasks();
}

// Initial Load
loadTasks();