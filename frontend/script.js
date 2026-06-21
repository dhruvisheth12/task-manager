
const API = "https://task-manager-yarr.onrender.com";

// Load Tasks
async function loadTasks() {

  const res = await axios.get(`${API}/tasks`);
  const tasks = res.data;

  const list = document.getElementById("taskList");

  if (!list) return;

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

  if (!input || !input.value.trim()) return;

  await axios.post(`${API}/tasks`, {
    title: input.value
  });

  input.value = "";

  loadTasks();
}

// Toggle Task
async function toggleTask(id, completed) {

  await axios.put(`${API}/tasks/${id}`, {
    completed
  });

  loadTasks();
}

// Edit Task
async function editTask(id, oldTitle) {

  const newTitle = prompt("Edit Task", oldTitle);

  if (!newTitle) return;

  await axios.put(`${API}/tasks/${id}`, {
    title: newTitle
  });

  loadTasks();
}

// Delete Task
async function deleteTask(id) {

  await axios.delete(`${API}/tasks/${id}`);

  loadTasks();
}

// Signup
async function signup() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    await axios.post(`${API}/signup`, {
      name,
      email,
      password
    });

    alert("Signup Successful");

    window.location.href = "login.html";

  } catch (err) {

    alert(
      err.response?.data?.message ||
      "Signup Failed"
    );

  }
}

// Login
async function login() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    const res =
      await axios.post(`${API}/login`, {
        email,
        password
      });

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Successful");

    window.location.href =
      "dashboard.html";

  } catch (err) {

    alert(
      err.response?.data?.message ||
      "Login Failed"
    );

  }
}

// Logout
function logout() {

  localStorage.removeItem("token");

  window.location.href =
    "login.html";
}

// Load tasks only on dashboard page
if (document.getElementById("taskList")) {
  loadTasks();
}

