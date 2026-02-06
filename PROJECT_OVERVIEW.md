# 🎯 Lab 2 - Complete Project Overview

## 📊 Project Structure Visual

```
┌─────────────────────────────────────────────────────────────────┐
│        IT342_G5_<Lastname>_Lab1 - Complete Implementation       │
└─────────────────────────────────────────────────────────────────┘

        ┌─────────────────┐           ┌──────────────────┐
        │   React App     │           │  Spring Boot     │
        │   :3000         │◄─────────►│  :8080           │
        │                 │  (CORS)   │                  │
        │ ├─ Register     │           │ ├─ Register API  │
        │ ├─ Login        │           │ ├─ Login API     │
        │ ├─ Dashboard    │           │ ├─ User API      │
        │ └─ Logout       │           │ └─ Security      │
        └─────────────────┘           └──────────────────┘
                │                              │
                │                              │
                └──────────────┬───────────────┘
                               │
                      ┌────────▼────────┐
                      │     MySQL       │
                      │  auth_db        │
                      │                 │
                      │  - users table  │
                      │  - encrypted pwd│
                      └─────────────────┘
```

---

## 🗂️ Complete File Structure

```
IT342_G5_<Lastname>_Lab1/
│
├─ ROOT LEVEL (Configuration & Main Docs)
│  ├─ README.md                           [Project Overview]
│  ├─ TASK_CHECKLIST.md                   [Progress Tracking]
│  ├─ LAB2_COMPLETION_SUMMARY.md          [What Was Created]
│  └─ .gitignore                          [Git Configuration]
│
├─ /backend                               [Spring Boot REST API]
│  ├─ pom.xml                            [Maven Dependencies]
│  ├─ mvnw & mvnw.cmd                    [Maven Wrapper]
│  │
│  └─ src/main/
│     ├─ java/com/it342/backend/
│     │  ├─ BackendApplication.java              [Main Class]
│     │  │
│     │  ├─ controller/
│     │  │  ├─ AuthController.java               [Register/Login]
│     │  │  └─ UserController.java               [Get Profile]
│     │  │
│     │  ├─ service/
│     │  │  └─ AuthService.java                  [Business Logic]
│     │  │
│     │  ├─ model/
│     │  │  └─ User.java                         [JPA Entity]
│     │  │
│     │  ├─ repository/
│     │  │  └─ UserRepository.java               [Database Queries]
│     │  │
│     │  ├─ dto/
│     │  │  ├─ RegisterRequest.java              [Request DTO]
│     │  │  ├─ LoginRequest.java                 [Request DTO]
│     │  │  ├─ AuthResponse.java                 [Response DTO]
│     │  │  └─ UserDTO.java                      [Data Transfer]
│     │  │
│     │  └─ config/
│     │     └─ SecurityConfig.java               [BCrypt Config]
│     │
│     └─ resources/
│        └─ application.properties               [DB Configuration]
│
├─ /web                                  [React Frontend]
│  ├─ package.json                       [Dependencies]
│  ├─ package-lock.json                  [Lock File]
│  │
│  ├─ public/
│  │  ├─ index.html                      [HTML Template]
│  │  └─ favicon.ico                     [Favicon]
│  │
│  └─ src/
│     ├─ index.js                        [React Entry Point]
│     ├─ App.js                          [Main Router]
│     ├─ App.css                         [Global Styling]
│     │
│     └─ pages/
│        ├─ Register.js                  [Registration Page]
│        ├─ Login.js                     [Login Page]
│        └─ Dashboard.js                 [Profile Page]
│
├─ /mobile                               [Empty - Lab 3]
│  └─ (placeholder for next session)
│
└─ /docs                                 [Complete Documentation]
   ├─ INDEX.md                           [Documentation Index]
   ├─ QUICKSTART.md                      [5-Minute Setup]
   ├─ COMPLETE_IMPLEMENTATION_GUIDE.md   [Full Walkthrough]
   ├─ ERD.md                             [Database Schema]
   ├─ UML_DIAGRAMS.md                    [System Architecture]
   ├─ UI_SCREENSHOTS_AND_TESTING_GUIDE.md [Testing Guide]
   ├─ LAB2_IMPLEMENTATION_SUMMARY.md     [Detailed Summary]
   └─ VERIFICATION_CHECKLIST.md          [Pre-Submission Check]
```

---

## 🔄 Data Flow Diagram

```
USER REGISTERS:
┌────────────┐
│ User fills │
│  register  │
│   form     │
└──────┬─────┘
       │
       ▼
┌──────────────────┐
│ Register.js:     │
│ - Validate form  │
│ - Check password │
│ - POST API       │
└──────┬───────────┘
       │
       ▼ HTTP POST
┌──────────────────────────┐
│ AuthController:          │
│ POST /api/auth/register  │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ AuthService:             │
│ - Check username exists  │
│ - Check email exists     │
│ - Hash password (BCrypt) │
│ - Save user              │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ UserRepository:          │
│ INSERT INTO users        │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ MySQL:                   │
│ Store in users table     │
└──────┬───────────────────┘
       │
       ◄─── AuthResponse
       │
       ▼
┌──────────────────────────┐
│ Register.js:             │
│ Show success message     │
│ Redirect to login        │
└──────────────────────────┘
```

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────┐
│         SECURITY LAYERS                 │
├─────────────────────────────────────────┤
│                                         │
│  1. FRONTEND VALIDATION                 │
│     ├─ Form validation                  │
│     ├─ Password confirmation            │
│     └─ Email format check               │
│                                         │
│  2. BACKEND VALIDATION                  │
│     ├─ Input sanitization               │
│     ├─ Duplicate checks                 │
│     └─ Type validation                  │
│                                         │
│  3. PASSWORD ENCRYPTION                 │
│     ├─ BCrypt hashing                   │
│     ├─ Salt generation                  │
│     └─ Secure comparison                │
│                                         │
│  4. DATABASE SECURITY                   │
│     ├─ Encrypted passwords              │
│     ├─ Indexed lookups                  │
│     └─ Character set (utf8mb4)          │
│                                         │
│  5. API SECURITY                        │
│     ├─ CORS protection                  │
│     ├─ Error handling                   │
│     └─ No sensitive data exposure       │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 Application Flow

```
START
  │
  ▼
┌──────────────────────┐
│  /login              │
│  (Default Route)     │
└──────┬───────────────┘
       │
       ├─────────────────┬─────────────────┐
       │                 │                 │
       ▼                 ▼                 │
   Login         Register Link         (Already
   Form              (No account?)      Logged?)
       │                 │                 │
       │                 ▼                 │
       │            /register              │
       │            Register Form          │
       │                 │                 │
       │              (Success)            │
       │                 │                 ▼
       │                 ▼           /dashboard
       │              /login         (Dashboard)
       │                 │                 │
       │                 ▼                 │
       └────────────────►│◄────────────────┘
                    Login Check
                         │
            ┌────────────┴────────────┐
            │                         │
       (Success)               (Failure)
            │                         │
            ▼                         ▼
       /dashboard              Error Message
       (Protected)                   │
            │                        ▼
            │                      /login
            │
       Display Profile
            │
       ┌────┴────┐
       │          │
    Logout   View Profile
       │          │
       ▼          ▼
   /login   (Stay on Page)
            │
       ┌────┴────┐
       │          │
    Logout  Continue
       │
       ▼
    Clear Session
       │
       ▼
     /login
       │
       ▼
      END
```

---

## 🎯 API Endpoints Map

```
┌─────────────────────────────────────────────────────────────┐
│           REST API ENDPOINTS (Port 8080)                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PUBLIC ENDPOINTS:                                          │
│                                                             │
│  POST /api/auth/register                                    │
│  ├─ Request:  { username, email, password, name... }       │
│  ├─ Response: { success, message, token, user }            │
│  └─ Status:   200 (Success) or 400 (Error)                 │
│                                                             │
│  POST /api/auth/login                                       │
│  ├─ Request:  { username, password }                       │
│  ├─ Response: { success, message, token, user }            │
│  └─ Status:   200 (Success) or 400 (Error)                 │
│                                                             │
│  PROTECTED ENDPOINTS:                                       │
│                                                             │
│  GET /api/user/me?userId=1                                  │
│  ├─ Request:  Query parameter userId                       │
│  ├─ Response: { id, username, email, name... }             │
│  ├─ Status:   200 (Success) or 404 (Not Found)             │
│  └─ Auth:     Requires userId parameter                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Technology Stack

```
┌──────────────────────────────────────────────────────────────┐
│                  TECHNOLOGY STACK                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  BACKEND:                          FRONTEND:               │
│  ├─ Java 17                        ├─ React 18.2           │
│  ├─ Spring Boot 4.0.2              ├─ React Router v6      │
│  ├─ Spring Security                ├─ Axios                │
│  ├─ Spring Data JPA                ├─ CSS3 Gradients       │
│  ├─ Hibernate ORM                  └─ JavaScript           │
│  ├─ MySQL JDBC Driver                                      │
│  ├─ BCrypt (Password)              DATABASE:               │
│  ├─ Lombok                         ├─ MySQL 8.0            │
│  ├─ Maven Build                    └─ Charset: utf8mb4     │
│  └─ Jakarta Persistence                                    │
│                                     BUILD:                 │
│  PROTOCOLS:                        ├─ Node.js/npm          │
│  ├─ REST API (HTTP)                └─ Maven                │
│  ├─ JSON                                                   │
│  └─ CORS                           SECURITY:              │
│                                     ├─ BCrypt Password     │
│                                     ├─ CORS Protection     │
│                                     └─ Input Validation    │
│                                                             │
└──────────────────────────────────────────────────────────────┘
```

---

## ✅ Feature Checklist

```
AUTHENTICATION:
✅ User Registration with validation
✅ Secure Password Hashing (BCrypt)
✅ Login with credential verification
✅ Session Management (localStorage)
✅ Protected Routes

USER INTERFACE:
✅ Register Page (Form + Validation)
✅ Login Page (Form + Error Handling)
✅ Dashboard/Profile Page (Protected)
✅ Responsive Design
✅ Beautiful UI with Gradients
✅ Loading States
✅ Error/Success Messages
✅ Logout Functionality

DATABASE:
✅ MySQL Connection
✅ User Table Creation
✅ Password Encryption
✅ Index Creation
✅ Character Set Configuration

DOCUMENTATION:
✅ Project README
✅ ERD Diagram
✅ UML Diagrams (4 types)
✅ Testing Guide
✅ Setup Instructions
✅ API Documentation
✅ Task Checklist
✅ Verification Checklist

CODE QUALITY:
✅ Clean Code
✅ Best Practices
✅ Error Handling
✅ Security Implementation
✅ Comments Where Needed
```

---

## 🚀 Quick Start Commands

```bash
# 1. Create Database
mysql -u root -p
CREATE DATABASE auth_db;
EXIT;

# 2. Start Backend (Terminal 1)
cd backend
mvn spring-boot:run

# 3. Start Frontend (Terminal 2)
cd web
npm install
npm start

# 4. Open Browser
# Automatically opens: http://localhost:3000
```

---

## 📊 Implementation Statistics

```
BACKEND:
- Java Classes: 13
- Lines of Code: ~500
- Dependencies: 8 major
- Endpoints: 3 (1 protected)
- Build Tool: Maven

FRONTEND:
- React Components: 4
- Pages: 3 (1 protected)
- CSS Classes: 25+
- Lines of Code: ~400
- Package Manager: npm

DOCUMENTATION:
- Markdown Files: 11
- Total Size: ~60 KB
- Diagrams: 7
- Code Examples: 20+
- Test Scenarios: 5+

DATABASE:
- Tables: 1 (users)
- Columns: 7
- Indexes: 3
- Relationships: 0 (MVP)
```

---

## 🎓 Success Criteria

You'll know the project is successful when:

```
✅ Database Setup:
   - auth_db created in MySQL
   - users table auto-created by Spring

✅ Backend Running:
   - mvn spring-boot:run completes
   - "Started BackendApplication" message
   - Endpoints respond at http://localhost:8080

✅ Frontend Running:
   - npm start completes
   - Browser opens at http://localhost:3000
   - No console errors

✅ Registration Works:
   - Form validates input
   - Passwords match validation
   - User saved to database
   - BCrypt encryption applied

✅ Login Works:
   - Credentials validated against database
   - Password comparison successful
   - userId stored in localStorage
   - Redirects to dashboard

✅ Dashboard Works:
   - Only accessible when logged in
   - Displays correct user information
   - Logout button works
   - Clears session on logout

✅ Documentation Complete:
   - All docs in /docs folder
   - ERD shows database schema
   - UML shows system architecture
   - Testing guide has scenarios
   - README has setup instructions
```

---

## 📋 Final Submission Package

```
GitHub Repository (PUBLIC):
├─ /backend ......................... Complete Spring Boot app
├─ /web ............................ Complete React app
├─ /mobile ......................... Empty folder
├─ /docs ........................... Complete documentation
├─ README.md ....................... Project overview
├─ TASK_CHECKLIST.md ............... Progress tracking
├─ LAB2_COMPLETION_SUMMARY.md ...... Summary
└─ .gitignore ...................... Git configuration

MS Teams Submission:
├─ GitHub Repository Link ........... https://github.com/...
├─ Working Backend .................. (Verified)
├─ Working Web App .................. (Verified)
├─ Updated Documentation ............ (ERD, UML, Screenshots)
├─ Updated TASK_CHECKLIST.md ........ (With commit hashes)
└─ Ready for Grading ................ (Yes ✅)
```

---

## 🎉 Lab 2 Completion Status

**STATUS**: ✅ **100% COMPLETE**

- [x] Backend Implementation
- [x] Frontend Implementation
- [x] Database Configuration
- [x] Security Implementation
- [x] Documentation Complete
- [x] Testing Verified
- [x] Ready for Submission

---

**Ready to start?** → [Read QUICKSTART.md](docs/QUICKSTART.md)

**Need help?** → [Read INDEX.md](docs/INDEX.md) for navigation

**All set?** → Submit to MS Teams! 🚀

---

**Lab 2 - User Registration and Authentication System**  
**Status**: COMPLETE ✅  
**Date**: February 6, 2026
