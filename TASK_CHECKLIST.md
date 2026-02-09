# Task Checklist - Lab 2: User Registration and Authentication

## DONE ✅

- [✅] Backend - Spring Boot Project Setup
  - Commit: `Initial Spring Boot project setup`
  - Dependencies: Spring Security, JPA, MySQL Driver, Lombok

- [✅] User Entity and Repository
  - Created User.java JPA entity with username, email, password, firstName, lastName
  - Created UserRepository.java with custom queries for findByUsername and findByEmail
  - Commit: `Add User entity and UserRepository`

- [✅] Authentication DTOs
  - Created RegisterRequest.java
  - Created LoginRequest.java
  - Created AuthResponse.java
  - Created UserDTO.java
  - Commit: `Add authentication DTOs`

- [✅] Security Configuration
  - BCryptPasswordEncoder bean created in SecurityConfig
  - Password hashing enabled
  - Commit: `Configure BCrypt password encoder`

- [✅] Authentication Service
  - AuthService.java with register() and login() methods
  - Password validation and encryption implemented
  - User data validation checks
  - Commit: `Implement authentication service`

- [✅] Authentication Endpoints
  - POST /api/auth/register - User registration
  - POST /api/auth/login - User login
  - AuthController.java created with CORS enabled
  - Commit: `Add authentication endpoints`

- [✅] User Endpoints
  - GET /api/user/me - Protected user profile endpoint
  - UserController.java created
  - Commit: `Add user profile endpoint`

- [✅] Database Configuration
  - MySQL connection configured in application.properties
  - JPA/Hibernate settings configured
  - Auto DDL enabled for schema creation
  - Commit: `Configure MySQL database`

- [✅] React Web App Setup
  - React project initialized with necessary dependencies
  - package.json configured with react-router-dom and axios
  - Public folder with index.html created
  - Commit: `Initialize React web application`

- [✅] Web App - Register Page
  - Register.js component with form validation
  - Password confirmation validation
  - API integration with backend
  - Success/Error message handling
  - Commit: `Implement registration page`

- [✅] Web App - Login Page
  - Login.js component with form validation
  - API integration with backend
  - Session management (localStorage)
  - Redirect to dashboard on success
  - Commit: `Implement login page`

- [✅] Web App - Dashboard/Profile Page
  - Dashboard.js component with protected route
  - User profile information display
  - Account status information
  - Commit: `Implement dashboard page`

- [✅] Web App - Logout Functionality
  - Logout button in dashboard
  - Session cleanup (localStorage)
  - Redirect to login page
  - Commit: `Add logout functionality`

- [✅] Styling and UI
  - App.css with gradient design
  - Responsive form styling
  - Dashboard layout and profile cards
  - Loading spinner animation
  - Commit: `Add styling and animations`

- [✅] Spring Security Configuration
  - SecurityFilterChain bean implementation
  - CORS configuration for localhost:3000
  - Public access to /api/auth/** endpoints
  - CSRF protection disabled for API
  - Commit: `149e8eb` - Initial commit: ConsultEase backend with Spring Security and React frontend

- [✅] User Profile Endpoint
  - GET /api/auth/me endpoint for fetching user data
  - User data retrieval by userId
  - Commit: `c59c34f` - Add GET /api/auth/me endpoint for fetching user profile data

- [✅] Frontend Integration
  - Dashboard correctly calls /api/auth/me endpoint
  - Full register → login → dashboard → logout flow working
  - ConsultEase branding added to Login and Register pages
  - Commit: `c59c34f` and subsequent updates

- [✅] Dashboard Enhancement
  - Full-screen dashboard layout
  - Consultation request tracking section (placeholder)
  - User profile information display
  - Simplified logout button
  - ConsultEase app title branding

- [✅] Documentation Updates
  - ERD diagram in docs/ERD.md
  - UML diagrams in docs/UML_DIAGRAMS.md
  - UI implementation guide and verification checklist
  - Complete implementation guide and quickstart documentation
  - Commit: Documentation files created and maintained

---

## IN-PROGRESS 🔄

(No in-progress items)

---

## TODO 📋

- [ ] Consultation Request Features
  - Student consultation request submission
  - Teacher request approval/rejection
  - Request status tracking
  - Dashboard statistics (pending, approved, rejected)

- [ ] Role-Based Access Control
  - Student role vs Teacher role distinction
  - Role-specific endpoints
  - Role-specific UI views

- [ ] Database Enhancement
  - Consultation Request entity
  - Request status enum (PENDING, APPROVED, REJECTED)
  - User role field

- [ ] API Endpoints (Consultation)
  - POST /api/consultations - Submit request
  - GET /api/consultations - Get user's requests
  - PUT /api/consultations/{id}/approve - Approve request
  - PUT /api/consultations/{id}/reject - Reject request
  - GET /api/consultations/pending - Get pending requests (for teachers)

- [ ] Testing
  - Unit tests for AuthService
  - Integration tests for endpoints
  - Frontend component tests

- [ ] Enhanced Security
  - JWT token implementation
  - Token refresh mechanism
  - Role-based endpoint protection

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
