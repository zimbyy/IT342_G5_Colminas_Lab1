# 📖 Lab 2 Complete Implementation Guide

## 🎬 Getting Started - Step by Step

### Phase 1: Environment Setup (5 minutes)

#### Step 1.1: MySQL Database
```bash
# Open MySQL command line
mysql -u root -p
# Enter your MySQL password

# Create database
CREATE DATABASE auth_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Verify creation
SHOW DATABASES;
# Should see: auth_db in the list

# Exit MySQL
EXIT;
```

#### Step 1.2: Backend Configuration
```bash
# Navigate to backend
cd backend

# Edit application.properties (optional - if your MySQL credentials differ)
# Linux/Mac:
nano src/main/resources/application.properties

# Windows (in VS Code):
# Open: backend/src/main/resources/application.properties
# Check the default values:
# spring.datasource.username=root
# spring.datasource.password=password
# Adjust if needed

# If you changed credentials, save and close
```

---

### Phase 2: Backend Startup (3 minutes)

#### Step 2.1: Build and Run Backend
```bash
# In backend directory
mvn clean install

# This will:
# - Download dependencies
# - Compile Java code
# - Run tests
# - Package the application

# Start the backend
mvn spring-boot:run

# Wait for this message:
# "Started BackendApplication in X.XXX seconds"
# Backend is now running at: http://localhost:8080
```

#### Step 2.2: Verify Backend
```bash
# In a new terminal, test the API
curl -X GET http://localhost:8080/api/user/me?userId=1

# Expected output:
# {"id":null,"username":null,"email":null,"firstName":null,"lastName":null}
# (null because no user exists yet, but server is running)
```

**Keep this terminal open - Backend stays running!**

---

### Phase 3: Frontend Startup (2 minutes)

#### Step 3.1: Install Dependencies
```bash
# In a new terminal, navigate to web directory
cd web

# Install all React dependencies
npm install

# This will create node_modules folder (~500MB)
# Wait for: "added X packages"
```

#### Step 3.2: Start Frontend
```bash
# Still in web directory
npm start

# This will:
# - Start development server
# - Open browser automatically to http://localhost:3000
# - Show "Compiled successfully!"

# If browser doesn't open, manually go to: http://localhost:3000
```

**Keep this terminal open - Frontend stays running!**

---

### Phase 4: Testing the Application (5 minutes)

#### Test 4.1: Registration
```
1. On web page, click "Register here" link
   URL should be: http://localhost:3000/register

2. Fill in the form:
   ┌─────────────────────────────────┐
   │ First Name:    John             │
   │ Last Name:     Doe              │
   │ Username:      john_doe         │
   │ Email:         john@example.com │
   │ Password:      TestPass123      │
   │ Confirm Pwd:   TestPass123      │
   └─────────────────────────────────┘

3. Click "Register" button

4. Expected Result:
   ✅ "Registration successful!" message
   ✅ Auto-redirect to login page after 2 seconds

5. Verify Database:
   mysql -u root -p auth_db
   SELECT * FROM users;
   # Should see the new user (password will be encrypted)
```

#### Test 4.2: Login
```
1. On login page (auto-redirected or go to localhost:3000/login)

2. Enter credentials:
   ┌─────────────────────────────────┐
   │ Username:   john_doe            │
   │ Password:   TestPass123         │
   └─────────────────────────────────┘

3. Click "Login" button

4. Expected Result:
   ✅ Redirected to dashboard automatically
   ✅ URL: http://localhost:3000/dashboard

5. Check Browser Storage:
   Press F12 → Application tab → localStorage
   Should see:
   - userId: 1
   - username: john_doe
```

#### Test 4.3: Dashboard
```
1. Now on dashboard page showing:
   ┌─────────────────────────────────┐
   │ Dashboard          [Logout]      │
   │                                 │
   │ 👤 Profile Information          │
   │ ├─ ID: 1                        │
   │ ├─ First Name: John             │
   │ ├─ Last Name: Doe               │
   │ ├─ Username: john_doe           │
   │ └─ Email: john@example.com      │
   │                                 │
   │ ✅ Account Status               │
   │ └─ Status: Active               │
   └─────────────────────────────────┘

2. Verify:
   ✅ All user information displayed correctly
   ✅ Status shows "Active"
   ✅ Logout button visible

3. Test Protected Route:
   Press F12 → Console
   Clear localStorage: localStorage.clear()
   Try to navigate to dashboard manually
   Expected: Auto-redirect to login page
```

#### Test 4.4: Logout
```
1. On dashboard page

2. Click "Logout" button

3. Expected Result:
   ✅ localStorage cleared
   ✅ Redirected to login page
   ✅ Cannot access dashboard without login

4. Verify:
   Try to go directly to: http://localhost:3000/dashboard
   Expected: Redirect to http://localhost:3000/login
```

---

## 🔍 Testing Additional Scenarios

### Test 5: Error Handling

#### Scenario 5.1: Duplicate Username
```
1. Go to register page
2. Try to register with username: john_doe (already exists)
3. Expected Error: "Username already exists"
4. Form clears error when you edit the field
```

#### Scenario 5.2: Duplicate Email
```
1. Go to register page
2. Try to register with email: john@example.com (already exists)
3. Expected Error: "Email already exists"
```

#### Scenario 5.3: Password Mismatch
```
1. Go to register page
2. Fill form with:
   Password: TestPass123
   Confirm: Different123
3. Expected Error: "Passwords do not match"
```

#### Scenario 5.4: Invalid Login Credentials
```
1. Go to login page
2. Try username: john_doe with password: WrongPassword
3. Expected Error: "Invalid username or password"
```

---

## 🛠️ API Testing with Postman or cURL

### Register API Test
```bash
# Option 1: cURL
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_smith",
    "email": "jane@example.com",
    "firstName": "Jane",
    "lastName": "Smith",
    "password": "TestPass123"
  }'

# Option 2: PowerShell (Windows)
$body = @{
    username = "jane_smith"
    email = "jane@example.com"
    firstName = "Jane"
    lastName = "Smith"
    password = "TestPass123"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/auth/register" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Login API Test
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_smith",
    "password": "TestPass123"
  }'
```

### Get Profile API Test
```bash
# Get user with ID 2
curl -X GET "http://localhost:8080/api/user/me?userId=2"
```

---

## 🐛 Troubleshooting

### Issue 1: Backend won't start
```
Error: "Port 8080 already in use"

Solution:
# Find process using port 8080
# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :8080
kill -9 <PID>

# Or change port in application.properties:
server.port=8081
```

### Issue 2: MySQL connection fails
```
Error: "Access denied for user 'root'@'localhost'"

Solution:
1. Verify MySQL is running
2. Check credentials in application.properties
3. Verify password is correct:
   mysql -u root -p
   # Enter password

4. If forgotten, reset MySQL password
```

### Issue 3: Frontend can't connect to backend
```
Error: "CORS error" or "Failed to fetch"

Solution:
1. Verify backend is running: http://localhost:8080
2. Check console (F12) for exact error
3. Verify CORS in AuthController (should say localhost:3000)
4. Try accessing backend directly in browser
```

### Issue 4: npm install fails
```
Error: "npm ERR! code ERESOLVE"

Solution:
npm install --legacy-peer-deps
```

### Issue 5: Database doesn't auto-create
```
Error: "Table 'auth_db.users' doesn't exist"

Solution:
1. Verify database was created: SHOW DATABASES;
2. Check application.properties spring.jpa.hibernate.ddl-auto=update
3. Restart backend
4. If still fails, manually create:
   USE auth_db;
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

---

## 📊 Expected Project Size

After completing all setup:
- Backend source: ~50 KB
- Backend with Maven dependencies: ~300 MB
- Frontend source: ~30 KB  
- Frontend with node_modules: ~500 MB
- **Total disk space needed: ~1 GB**

---

## 🎨 UI Color Reference

For documentation/screenshots:
- **Primary Background Gradient**: 
  - From: `#667eea` (Purple-Blue)
  - To: `#764ba2` (Deep Purple)
- **Text Primary**: `#333333`
- **Text Secondary**: `#666666`
- **Input Border**: `#ddd`
- **Focus Color**: `#667eea`
- **Error Color**: `#e74c3c`
- **Success Color**: `#27ae60`
- **White Cards**: `#ffffff` with shadow

---

## 🔄 Development Workflow

### Making Changes to Backend
```bash
# 1. Edit Java files
# 2. Ctrl+S to save
# 3. Spring Boot will auto-reload (may take few seconds)
# 4. Check terminal for "Started BackendApplication in X seconds"
# 5. Test the endpoint
```

### Making Changes to Frontend
```bash
# 1. Edit React files
# 2. Ctrl+S to save
# 3. Browser will auto-refresh
# 4. Check for compilation errors in terminal/browser
```

---

## 📝 Commit Messages for Git

As you develop, use clear commit messages:
```bash
git add .
git commit -m "Feature: Add user registration endpoint"
git commit -m "Feature: Create React login page"
git commit -m "Fix: CORS configuration for frontend"
git commit -m "Docs: Add ERD and UML diagrams"
git commit -m "Docs: Complete testing guide"
```

---

## ✅ Pre-Submission Checklist

Before submitting to MS Teams:

**Backend**
- [ ] mvn clean install runs successfully
- [ ] mvn spring-boot:run starts without errors
- [ ] All 3 endpoints working (tested with cURL)
- [ ] Database is populated with test users
- [ ] No hardcoded sensitive data

**Frontend**
- [ ] npm install completes successfully
- [ ] npm start opens browser without errors
- [ ] All pages load (register, login, dashboard)
- [ ] Forms validate correctly
- [ ] Error messages display properly
- [ ] Navigation works (register ↔ login)
- [ ] Protected routes work (redirects when not logged in)

**Documentation**
- [ ] README.md is complete
- [ ] TASK_CHECKLIST.md shows completion status
- [ ] ERD.md exists with database diagram
- [ ] UML_DIAGRAMS.md has all diagrams
- [ ] QUICKSTART.md has setup instructions
- [ ] UI_SCREENSHOTS_AND_TESTING_GUIDE.md exists
- [ ] VERIFICATION_CHECKLIST.md exists

**Repository**
- [ ] Repository is PUBLIC on GitHub
- [ ] All files committed and pushed
- [ ] .gitignore prevents build files
- [ ] README visible on GitHub
- [ ] No node_modules in git (ignored)
- [ ] No target/ folder in git (ignored)

---

## 🚀 Submission Steps

### Step 1: Final Git Commit
```bash
git add .
git commit -m "Lab 2: Complete User Registration and Authentication System"
git push origin main
```

### Step 2: Test the GitHub Link
```
1. Go to: https://github.com/your-username/IT342_G5_Lab1
2. Verify:
   - Repository is PUBLIC
   - All folders visible (/backend, /web, /mobile, /docs)
   - README.md visible
   - TASK_CHECKLIST.md visible
```

### Step 3: Submit to MS Teams
1. Open Microsoft Teams
2. Find Lab 2 assignment
3. Submit:
   - GitHub repository link
   - Brief note: "Lab 2 complete with working backend and frontend"
4. Submit

---

**🎉 Congratulations! Your Lab 2 is ready for submission!**

---

**Last Updated**: February 6, 2026  
**Status**: Ready to Deploy ✅
