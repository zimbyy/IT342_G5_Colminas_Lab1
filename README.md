# IT342_G5_<Lastname>_Lab1 - User Registration and Authentication System

A complete User Registration and Authentication system built with **Spring Boot** (Backend) and **ReactJS** (Frontend).

## 📋 Project Overview

This laboratory implements the core backend and web application for a User Registration and Authentication system. The system allows users to:
- Register with their credentials
- Login securely with password encryption
- View their profile information
- Logout from the system

**Mobile development** will be completed in a future laboratory session.

## 🏗️ Architecture

```
IT342_G5_<Lastname>_Lab1/
├── /backend              # Spring Boot REST API
├── /web                  # React Frontend Application
├── /mobile               # Mobile App (Future)
├── /docs                 # Documentation and ERD/UML
├── README.md             # This file
└── TASK_CHECKLIST.md     # Task tracking and progress
```

## 🔧 Technologies Used

### Backend
- **Spring Boot 4.0.2** - RESTful API Framework
- **Spring Security** - Authentication & Authorization
- **Spring Data JPA** - Database ORM
- **MySQL 8.0** - Relational Database
- **Lombok** - Java boilerplate reduction
- **Maven** - Build tool

### Frontend
- **React 18.2.0** - UI Framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP Client
- **CSS3** - Styling with gradients and animations

## ⚙️ Installation & Setup

### Prerequisites
- **Java 17+** (or specify your version)
- **Node.js 16+** and npm
- **MySQL 8.0+**

### Backend Setup

1. **Create MySQL Database**
   ```sql
   CREATE DATABASE auth_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. **Configure Database Connection**
   - Navigate to `backend/src/main/resources/application.properties`
   - Update the following with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/auth_db
     spring.datasource.username=root
     spring.datasource.password=your_password
     ```

3. **Run Backend**
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
   - Backend will start on `http://localhost:8080`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd web
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   - Frontend will start on `http://localhost:3000`

## 📡 API Endpoints

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "SecurePassword123"
}

Response:
{
  "success": true,
  "message": "Registration successful",
  "token": "token_placeholder",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "SecurePassword123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "token_placeholder",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### User Endpoints

#### Get Current User Profile (Protected)
```http
GET /api/user/me?userId=1
Authorization: Bearer token_placeholder

Response:
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

## 🔐 Security Features

✅ **Password Encryption**: BCrypt password hashing
✅ **Input Validation**: Server-side validation for all inputs
✅ **CORS Protection**: Configured for frontend-backend communication
✅ **Database Security**: User credentials never stored in plain text
✅ **Session Management**: localStorage-based authentication (JWT in future)

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Web Application Pages

### 1. **Register Page** (`/register`)
- Input fields: First Name, Last Name, Username, Email, Password, Confirm Password
- Form validation for password confirmation
- Error handling and success messages
- Link to login page

### 2. **Login Page** (`/login`)
- Input fields: Username, Password
- Form validation
- Error handling for invalid credentials
- Link to registration page
- Redirects to dashboard on successful login

### 3. **Dashboard/Profile Page** (`/dashboard`)
- Protected route (requires login)
- Displays user profile information
- Shows account status
- Logout button
- Redirects to login if not authenticated

### 4. **Logout Functionality**
- Clears session data (localStorage)
- Redirects to login page
- Securely removes user credentials

## 🚀 Running the Application

1. **Start MySQL Server**
2. **Terminal 1 - Backend**:
   ```bash
   cd backend
   mvn spring-boot:run
   ```

3. **Terminal 2 - Frontend**:
   ```bash
   cd web
   npm start
   ```

4. **Open Browser**: Navigate to `http://localhost:3000`

## 📝 Testing the Application

### Test Registration
1. Go to Register page
2. Fill in all fields with valid data
3. Click Register
4. Should see success message and redirect to login

### Test Login
1. Enter credentials from registered user
2. Click Login
3. Should be redirected to Dashboard

### Test Protected Route
1. Try accessing `/dashboard` without login
2. Should be redirected to `/login`

### Test Logout
1. Click Logout button on dashboard
2. Should be redirected to login page
3. Session data should be cleared

## 📚 Documentation

- **TASK_CHECKLIST.md** - Detailed task tracking with commit hashes
- **ERD & UML Diagrams** - See `/docs` folder (to be added)
- **API Documentation** - See endpoints section above

## 🛠️ Future Enhancements

- [x] Basic Authentication
- [ ] JWT Token Implementation
- [ ] Email Verification
- [ ] Password Reset Functionality
- [ ] User Profile Update
- [ ] Mobile Application (Flutter/React Native)
- [ ] Advanced Security Features
- [ ] OAuth2 Integration

## 👥 Contributors

- Group 5 - IT342 Class

## 📄 License

This project is part of IT342 laboratory activities. All rights reserved.

## ❓ Troubleshooting

### Backend won't start
- Check MySQL is running: `mysql -u root -p`
- Verify database credentials in `application.properties`
- Check port 8080 is not in use

### Frontend won't connect to backend
- Ensure backend is running on `http://localhost:8080`
- Check CORS configuration in AuthController
- Open browser DevTools and check Network/Console tabs

### Database errors
- Verify MySQL is running
- Check database `auth_db` exists
- Confirm username/password in `application.properties`

## 📞 Support

For issues or questions, refer to the course materials or contact your instructor.

---

**Last Updated**: February 6, 2026
**Status**: Lab 2 - Session 1 Complete ✅
