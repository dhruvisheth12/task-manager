# Task Manager with Authentication

## Overview

A full-stack Task Manager application built using Node.js, Express.js, MongoDB Atlas, HTML, CSS, and JavaScript. The application allows users to securely register, log in, and manage tasks using complete CRUD operations.

## Features

* User Registration (Signup)
* User Login
* JWT Authentication
* Create Tasks
* View Tasks
* Edit Tasks
* Mark Tasks as Complete
* Delete Tasks
* Logout Functionality
* Responsive User Interface

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* bcryptjs

### Deployment

* Frontend: Netlify
* Backend: Render

---

## Live Demo

### Frontend

https://capstonefinalprojectt.netlify.app/

### Backend API

https://task-manager-yarr.onrender.com/

### Project Walkthrough Video

https://drive.google.com/file/d/1eT0ElNTXJvjdQkvbT8210yeRxH0QQKkb/view?usp=sharing

---

## Project Structure

task-manager/
│
├── backend/
│ ├── models/
│ ├── middleware/
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── index.html
│ ├── login.html
│ ├── signup.html
│ ├── dashboard.html
│ ├── script.js
│ └── style.css

---

## Installation

### Clone Repository

```bash
git clone https://github.com/dhruvisheth12/task-manager.git
cd task-manager
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm start
```

### Frontend Setup

Open the frontend files in your browser or deploy them using Netlify.

---

## API Endpoints

### Authentication

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| POST   | /signup  | Register a new user |
| POST   | /login   | Login user          |

### Tasks

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /tasks     | Get all tasks |
| POST   | /tasks     | Create task   |
| PUT    | /tasks/:id | Update task   |
| DELETE | /tasks/:id | Delete task   |

---

## Challenges Faced

* MongoDB Atlas connection configuration
* Git repository and branch management
* Render deployment setup
* JWT Authentication implementation
* Frontend and Backend integration
* Environment variable configuration

---

## Future Improvements

* User-specific task ownership
* Task categories
* Due dates and reminders
* Dark mode
* Task search and filtering
* Profile management

---

## Author

**Dhruvi Sheth**

Full Stack Development Capstone Project
