# Task Checklist - Lab 2: User Registration and Authentication

## DONE ✅

- [x] Backend - Spring Boot Project Setup
  - Commit: `Initial Spring Boot project setup`
  - Dependencies: Spring Security, JPA, MySQL Driver, Lombok

- [x] User Entity and Repository
  - Created User.java JPA entity with username, email, password, firstName, lastName
  - Created UserRepository.java with custom queries for findByUsername and findByEmail
  - Commit: `Add User entity and UserRepository`

- [x] Authentication DTOs
  - Created RegisterRequest.java
  - Created LoginRequest.java
  - Created AuthResponse.java
  - Created UserDTO.java
  - Commit: `Add authentication DTOs`

- [x] Security Configuration
  - BCryptPasswordEncoder bean created in SecurityConfig
  - Password hashing enabled
  - Commit: `Configure BCrypt password encoder`

- [x] Authentication Service
  - AuthService.java with register() and login() methods
  - Password validation and encryption implemented
  - User data validation checks
  - Commit: `Implement authentication service`

- [x] Authentication Endpoints
  - POST /api/auth/register - User registration
  - POST /api/auth/login - User login
  - AuthController.java created with CORS enabled
  - Commit: `Add authentication endpoints`

- [x] User Endpoints
  - GET /api/user/me - Protected user profile endpoint
  - UserController.java created
  - Commit: `Add user profile endpoint`

- [x] Database Configuration
  - MySQL connection configured in application.properties
  - JPA/Hibernate settings configured
  - Auto DDL enabled for schema creation
  - Commit: `Configure MySQL database`

- [x] React Web App Setup
  - React project initialized with necessary dependencies
  - package.json configured with react-router-dom and axios
  - Public folder with index.html created
  - Commit: `Initialize React web application`

- [x] Web App - Register Page
  - Register.js component with form validation
  - Password confirmation validation
  - API integration with backend
  - Success/Error message handling
  - Commit: `Implement registration page`

- [x] Web App - Login Page
  - Login.js component with form validation
  - API integration with backend
  - Session management (localStorage)
  - Redirect to dashboard on success
  - Commit: `Implement login page`

- [x] Web App - Dashboard/Profile Page
  - Dashboard.js component with protected route
  - User profile information display
  - Account status information
  - Commit: `Implement dashboard page`

- [x] Web App - Logout Functionality
  - Logout button in dashboard
  - Session cleanup (localStorage)
  - Redirect to login page
  - Commit: `Add logout functionality`

- [x] Styling and UI
  - App.css with gradient design
  - Responsive form styling
  - Dashboard layout and profile cards
  - Loading spinner animation
  - Commit: `Add styling and animations`

---

## IN-PROGRESS 🔄

- [ ] Documentation Updates (FRS - Partial)
  - Create/Update ERD (Entity Relationship Diagram)
  - UML Diagrams (Class, Sequence)
  - Screenshots of UI pages (Register, Login, Dashboard, Logout)

---

## TODO 📋

- [ ] Testing
  - Unit tests for AuthService
  - Integration tests for endpoints
  - Frontend component tests

- [ ] Enhanced Security
  - JWT token implementation
  - Token refresh mechanism
  - CSRF protection

- [ ] Additional Features
  - Email verification
  - Password reset functionality
  - User profile update

- [ ] Database Backup
  - Create database schema script
  - Add sample data script

- [ ] Deployment
  - Docker containerization for backend
  - Docker containerization for frontend
  - Kubernetes deployment files (optional)

- [ ] Mobile App (Next Session)
  - Flutter/React Native setup
  - Mobile authentication flow
  - Mobile UI implementation

---

## Setup Instructions

### Backend Setup
1. Ensure MySQL is running with database `auth_db`
2. Update `application.properties` with your MySQL credentials
3. Run: `mvn spring-boot:run`

### Frontend Setup
1. Navigate to `/web` directory
2. Run: `npm install`
3. Run: `npm start`

### Database
- No manual setup needed if `spring.jpa.hibernate.ddl-auto=update` is set
- User table will be created automatically

---

## Notes
- Mobile application is NOT included in this submission
- Passwords are securely encrypted using BCrypt
- Session management via localStorage (to be replaced with JWT in future)
- CORS enabled for frontend-backend communication
