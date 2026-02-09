# ConsultEase - Student-Teacher Consultation Platform

A complete User Registration and Authentication system with consultation management built with **Spring Boot** (Backend) and **ReactJS** (Frontend).

## 📋 Project Overview

**ConsultEase** is a consultation scheduling and management platform designed to facilitate efficient communication between students and teachers. The system provides:
- Secure user registration and authentication
- Role-based access (Student/Teacher)
- User profile management
- Consultation request submissions
- Request approval/rejection workflow
- Real-time status tracking

## 🏗️ Architecture

```
ConsultEase/
├── /backend              # Spring Boot REST API (Port 8080)
├── /web                  # React Frontend (Port 3000)
├── /mobile               # Mobile App (Future)
├── /docs                 # Documentation
├── README.md             # This file
└── TASK_CHECKLIST.md     # Task tracking and progress
```

## 🔧 Technologies Used

### Backend
- **Java 21 LTS** - Latest stable JDK
- **Spring Boot 3.x** - RESTful API Framework
- **Spring Security** - Authentication & Authorization with BCrypt encryption
- **Spring Data JPA** - Database ORM with Hibernate
- **MySQL 8.0+** - Relational Database
- **Lombok** - Reduce Java boilerplate code
- **Maven 3.8+** - Build automation

### Frontend
- **React 18.2.0+** - UI Library
- **React Router v6** - Client-side routing (SPA)
- **Axios** - HTTP client for API calls
- **CSS3** - Responsive design with gradients & animations

### Database
- **MySQL 8.0+** - Primary database
- **JPA/Hibernate** - ORM for entity mapping

## 🚀 Quick Start

### Run Everything in Minutes

```bash
# Terminal 1: Start Backend (Port 8080)
cd backend
mvn spring-boot:run

# Terminal 2: Start Frontend (Port 3000)
cd web
npm install
npm start
```

Then open **http://localhost:3000** in your browser and create an account!

## ⚙️ Detailed Installation & Setup

### Prerequisites
- **Java 21 LTS** - Latest stable release
- **Node.js 16+** and npm 7+
- **MySQL 8.0+** - Must be running
- **Git** - Version control

### Backend Setup

1. **Create MySQL Database**
   ```sql
   CREATE DATABASE auth_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. **Configure Database Connection**
   - File: `backend/src/main/resources/application.properties`
   - Update with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/auth_db
     spring.datasource.username=root
     spring.datasource.password=your_password
     spring.jpa.hibernate.ddl-auto=update
     ```

3. **Build & Run**
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
   ✅ Backend runs on **http://localhost:8080**

### Frontend Setup

1. **Install & Start**
   ```bash
   cd web
   npm install
   npm start
   ```
   ✅ Frontend runs on **http://localhost:3000**

## 📡 API Endpoints

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account
```http
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "SecurePassword123"
}

Response (200 OK):
{
  "success": true,
  "message": "Registration successful",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

#### POST /api/auth/login
Authenticate user credentials
```http
Content-Type: application/json

{
  "username": "john_doe",
  "password": "SecurePassword123"
}

Response (200 OK):
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

#### GET /api/auth/me
Fetch authenticated user profile (requires userId)
```http
Query Parameter: userId=1

Response (200 OK):
{
  "success": true,
  "message": "User retrieved",
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

## 👨‍💻 Project Structure

```
backend/
├── src/main/java/com/it342/backend/
│   ├── controller/     # REST API endpoints
│   ├── service/        # Business logic
│   ├── repository/     # Database access
│   ├── model/          # JPA entities
│   ├── dto/            # Data transfer objects
│   └── config/         # Security configuration
├── src/main/resources/
│   └── application.properties  # Database config
└── pom.xml             # Maven dependencies

web/
├── src/
│   ├── pages/          # React page components
│   ├── App.js          # Main routing
│   └── App.css         # Global styles
├── public/
│   └── index.html      # HTML entry point
└── package.json        # npm dependencies
```

## 🔐 Security Features

✅ **Password Encryption**: BCrypt password hashing (10 rounds)
✅ **Input Validation**: Server-side validation for all requests
✅ **CORS Protection**: Configured for `http://localhost:3000`
✅ **Database Security**: Credentials never stored in plain text
✅ **Session Management**: localStorage-based authentication
✅ **Protected Routes**: Dashboard requires valid userId

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Web Application Pages

### 1. **Register Page** (`/register`)
- Form inputs: First Name, Last Name, Username, Email, Password, Confirm Password
- Real-time password confirmation validation
- Success/error message handling
- Redirect to login on success

### 2. **Login Page** (`/login`)
- Form inputs: Username, Password
- Client & server-side validation
- Error handling for invalid credentials
- Session storage on successful login
- Auto-redirect to dashboard if already logged in

### 3. **Dashboard/Profile Page** (`/dashboard`)
- Protected route (requires valid userId)
- Display user profile information (name, email, username)
- Consultation request section (placeholder)
- Logout button
- Auto-redirect to login if not authenticated

## 📝 Documentation

- **README.md** - This file
- **TASK_CHECKLIST.md** - Detailed task progress with commit history
- **VERIFICATION_CHECKLIST.md** - System verification & testing checklist
- **Diagrams** - Class, Sequence, ERD & Activity diagrams (generate via PlantUML)

## 🛠️ Future Implementation (Phase 2)

### Consultation Features
- [ ] Consultation Request model & repository
- [ ] Submit consultation request endpoint
- [ ] View consultation requests endpoint
- [ ] Approve/reject consultation endpoint
- [ ] Consultation request status tracking
- [ ] Dashboard statistics (pending, approved, rejected counts)

### Role-Based Access Control
- [ ] Role enum (STUDENT, TEACHER)
- [ ] Add role field to User entity
- [ ] Role-based endpoint protection
- [ ] Role-specific UI views

### Enhanced Security
- [ ] JWT token implementation
- [ ] Token refresh mechanism
- [ ] Logout token invalidation
- [ ] Password reset functionality

### Mobile Application
- [ ] React Native/Flutter setup
- [ ] Mobile authentication flow
- [ ] Mobile consultation interface

## 🏃 Performance & Quality

- **Build Tool**: Maven for consistent builds
- **Code Style**: Lombok for cleaner code
- **Testing**: Unit & integration tests (future)
- **Database**: Auto schema migration with Hibernate DDL

## ⚡ Quick Commands

```bash
# Build backend
mvn -f backend/pom.xml clean package

# Run backend with logs
mvn -f backend/pom.xml spring-boot:run -X

# Install frontend dependencies
npm --prefix web install

# Run frontend in development mode
npm --prefix web start

# Build frontend for production
npm --prefix web run build
```

## 📞 Support & Troubleshooting

### Backend not connecting to database?
- Verify MySQL is running
- Check credentials in `application.properties`
- Ensure database `auth_db` exists

### Frontend showing blank page?
- Check browser console for errors
- Verify backend is running on port 8080
- Clear browser cache and localStorage

### Port already in use?
- Backend (8080): `lsof -i :8080` and kill process
- Frontend (3000): `lsof -i :3000` and kill process

## 📄 License

This project is part of IT342 course work.

## 👥 Team

- **Course**: IT342 - Lab 2/3
- **Group**: 5 (Colminas)
- **Semester**: Current

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
