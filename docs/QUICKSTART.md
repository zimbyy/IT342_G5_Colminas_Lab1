# Quick Start Guide - Lab 2

## ⚡ 5-Minute Quick Start

### Step 1: Database Setup (1 min)
```bash
# Open MySQL command line
mysql -u root -p

# Create database
CREATE DATABASE auth_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### Step 2: Backend Setup (2 min)
```bash
cd backend

# Update application.properties if needed
# (Default: username=root, password=password)

# Start backend
mvn spring-boot:run

# Wait for: "Started BackendApplication in X seconds"
# Backend ready at: http://localhost:8080
```

### Step 3: Frontend Setup (2 min)
```bash
# In new terminal window
cd web

npm install
npm start

# Browser automatically opens: http://localhost:3000
```

### Step 4: Test the App
1. Click "Register here" link
2. Fill in registration form
3. Click Register
4. Login with your credentials
5. View your profile on Dashboard

---

## 📋 Project Structure

```
IT342_G5_<Lastname>_Lab1/
│
├── backend/                          # Spring Boot REST API
│   ├── src/main/java/com/it342/backend/
│   │   ├── BackendApplication.java  # Main class
│   │   ├── controller/
│   │   │   ├── AuthController.java  # Register/Login endpoints
│   │   │   └── UserController.java  # Profile endpoint
│   │   ├── service/
│   │   │   └── AuthService.java     # Business logic
│   │   ├── model/
│   │   │   └── User.java            # User entity
│   │   ├── repository/
│   │   │   └── UserRepository.java  # Database queries
│   │   ├── dto/
│   │   │   ├── RegisterRequest.java
│   │   │   ├── LoginRequest.java
│   │   │   ├── AuthResponse.java
│   │   │   └── UserDTO.java
│   │   └── config/
│   │       └── SecurityConfig.java  # BCrypt config
│   ├── src/main/resources/
│   │   └── application.properties    # Database config
│   └── pom.xml                       # Maven dependencies
│
├── web/                              # React Frontend
│   ├── public/
│   │   └── index.html               # HTML template
│   ├── src/
│   │   ├── App.js                   # Main component
│   │   ├── App.css                  # Styling
│   │   └── pages/
│   │       ├── Register.js          # Registration page
│   │       ├── Login.js             # Login page
│   │       └── Dashboard.js         # Profile page
│   └── package.json                 # Dependencies
│
├── docs/                             # Documentation
│   ├── ERD.md                        # Database diagram
│   ├── UML_DIAGRAMS.md              # System diagrams
│   └── UI_SCREENSHOTS_AND_TESTING_GUIDE.md
│
├── README.md                         # Project overview
└── TASK_CHECKLIST.md                # Progress tracker
```

---

## 🔐 Database Connection Details

**Default Configuration** (in `backend/src/main/resources/application.properties`):
```properties
URL: jdbc:mysql://localhost:3306/auth_db
Username: root
Password: password
Port: 3306
```

**To change credentials:**
1. Edit `backend/src/main/resources/application.properties`
2. Update `spring.datasource.username` and `spring.datasource.password`
3. Restart backend: `mvn spring-boot:run`

---

## 🌐 Application URLs

| Page | URL | Requires Auth |
|------|-----|---------------|
| Register | http://localhost:3000/register | ❌ No |
| Login | http://localhost:3000/login | ❌ No |
| Dashboard | http://localhost:3000/dashboard | ✅ Yes |
| API Base | http://localhost:8080 | - |

---

## 📡 API Quick Reference

### Register
```
POST /api/auth/register
Body: {username, email, password, firstName, lastName}
Response: {success, message, token, user}
```

### Login
```
POST /api/auth/login
Body: {username, password}
Response: {success, message, token, user}
```

### Get Profile
```
GET /api/user/me?userId=1
Response: {id, username, email, firstName, lastName}
```

---

## ✅ Testing Checklist

After setup, verify:

- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:3000
- [ ] Can register new user
- [ ] Can login with registered user
- [ ] Can view profile on dashboard
- [ ] Can logout successfully
- [ ] Cannot access dashboard without login
- [ ] Password is hidden in input fields
- [ ] Form validation works
- [ ] Error messages display correctly

---

## 🐛 Common Issues & Solutions

### Backend won't start
```
Error: Port 8080 already in use
Solution: Kill process on port 8080 or change port in application.properties
```

### Frontend can't connect to backend
```
Error: CORS error in console
Solution: Check backend is running, verify URL in API calls
```

### Database connection failed
```
Error: Access denied for user 'root'@'localhost'
Solution: 
1. Verify MySQL is running
2. Check username/password in application.properties
3. Ensure database 'auth_db' exists
```

### npm install fails
```
Error: npm ERR! code ERESOLVE
Solution: 
npm install --legacy-peer-deps
```

---

## 📊 File Sizes Reference

After completion, project should have:
- **Backend**: ~200 KB (java files + dependencies)
- **Frontend**: ~500 MB (node_modules after npm install)
- **Database**: ~1 MB (mysql data)

---

## 🚀 Next Steps

1. ✅ **Complete Lab 2 (This Session)**
   - Backend API ✅
   - Web Frontend ✅
   - Documentation ✅

2. 📱 **Lab 3 (Next Session)**
   - Mobile app development (Flutter/React Native)
   - Mobile authentication
   - API integration with mobile

3. 🔐 **Future Enhancements**
   - JWT token implementation
   - Email verification
   - Password reset
   - Role-based access control

---

## 📞 Troubleshooting Contacts

- Backend Issues: Check Spring Boot logs in terminal
- Frontend Issues: Open DevTools (F12) → Console tab
- Database Issues: Use MySQL Workbench or command line

---

## 📝 Submission Checklist

Before submitting to MS Teams:

- [ ] Backend running and all endpoints tested
- [ ] Frontend all pages working
- [ ] GitHub repository is public
- [ ] README.md is updated
- [ ] TASK_CHECKLIST.md shows completion status
- [ ] ERD.md exists in /docs
- [ ] UML_DIAGRAMS.md exists in /docs
- [ ] UI screenshots taken and documented
- [ ] Database working with sample data
- [ ] No hardcoded credentials in code

---

**Ready to start? Run:**
```bash
# Terminal 1: Backend
cd backend && mvn spring-boot:run

# Terminal 2: Frontend  
cd web && npm start
```

---

**Last Updated**: February 6, 2026  
**Status**: Ready for Testing ✅
