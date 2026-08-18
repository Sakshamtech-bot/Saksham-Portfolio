# 💼 Saksham Portfolio
A full-stack personal portfolio website built to showcase my skills, projects, education, certifications, and experience.
## 🌐 Live Demo
🚀 **Portfolio:**  
https://incandescent-sprite-1f2d7a.netlify.app/
## 📌 About the Project
**Saksham Portfolio** is a full-stack personal portfolio website developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.
The website provides a clean and responsive interface to showcase my professional profile, technical skills, projects, certifications, and contact information.
The project also includes a backend API and MySQL database integration for handling authentication, contact information, and other application data.
## ✨ Features
- 📱 Responsive and user-friendly design
- 👨‍💻 Personal profile and introduction
- 🛠️ Technical skills section
- 🚀 Projects showcase
- 🎓 Education section
- 📜 Certifications section
- 📞 Contact form
- 🔐 User registration and login
- 🔑 Password encryption using bcrypt
- 🗄️ MySQL database integration
- ⚡ REST API using Express.js
- 🔒 Environment variable based database configuration
- 👨‍💼 Admin-related backend routes
## 🛠️ Technologies Used
### Frontend
- HTML5
- CSS3
- JavaScript
### Backend
- Node.js
- Express.js
- bcrypt
### Database
- MySQL
- MySQL2
### Deployment

- Netlify – Frontend
- Render – Backend deployment
## 📂 Project Structure

```text
Saksham-Portfolio/
│
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── contact.js
│   │   └── admin.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   └── db.js
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sakshamtech-bot/Saksham-Portfolio.git
```

### 2. Open the Project

```bash
cd Saksham-Portfolio
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=saksham_portfolio
PORT=3000
```

> ⚠️ Never upload your `.env` file to GitHub because it contains sensitive information.

### 5. Start the Backend Server

```bash
node server.js
```

If everything is configured correctly, you should see:

```text
Server running on http://localhost:3000
MySQL connected successfully!
```

## 🗄️ Database Configuration

This project uses **MySQL** as the database.

The database connection is configured using environment variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=saksham_portfolio
```

Using environment variables helps keep sensitive database credentials outside the source code.

## 🔐 Security

Sensitive information such as database passwords should never be stored directly inside the source code.

The `.env` file is excluded from Git using `.gitignore`.

Example:

```text
node_modules/
.env
```

## 🔌 Backend API

The backend provides API routes for different functionalities.

### Authentication

```text
/api/auth
```

Handles user authentication and login-related operations.

### Contact

```text
/api/contact
```

Handles contact form related operations.

### Admin

```text
/api/admin
```

Handles admin-related operations.

## 🚀 Deployment

### Frontend

The frontend can be deployed using **Netlify**.

The frontend is currently available at:

https://incandescent-sprite-1f2d7a.netlify.app/

### Backend

The backend is built using Node.js and Express.js and can be deployed as a web service.

For production deployment, the backend requires:

- Node.js hosting
- Environment variables
- A publicly accessible MySQL database

## 🔗 Repository
GitHub Repository:
https://github.com/Sakshamtech-bot/Saksham-Portfolio
## 📸 Screenshots
Screenshots of the portfolio website can be added here to demonstrate the user interface and project features.
## 🎯 Project Objective
The main objective of this project is to build a complete full-stack personal portfolio website while gaining practical experience in:
- Frontend development
- Backend development
- REST API development
- Database integration
- Authentication
- Environment variable management
- Git and GitHub
- Web deployment
## 📚 Learning Outcomes
Through this project, I gained practical experience with:
- HTML, CSS and JavaScript
- Node.js and Express.js
- MySQL database
- REST APIs
- Git and GitHub
- Backend and frontend integration
- Secure environment configuration
- Website deployment
## 👨‍💻 Author
### Saksham Kumar
GitHub:  
https://github.com/Sakshamtech-bot
## 📄 License
This project is created for educational and portfolio purposes.
---
⭐ If you like this project, feel free to star the repository!
