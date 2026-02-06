# Lab 2 - UI Screenshots and Implementation Guide

## 📸 Web Application Screenshots

### 1. Register Page
**URL**: `http://localhost:3000/register`

```
┌──────────────────────────────────────────────────┐
│                                                  │
│              ┌─────────────────────────┐         │
│              │    Create Account       │         │
│              ├─────────────────────────┤         │
│              │                         │         │
│              │ First Name:             │         │
│              │ ┌─────────────────────┐ │         │
│              │ │                     │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Last Name:              │         │
│              │ ┌─────────────────────┐ │         │
│              │ │                     │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Username:               │         │
│              │ ┌─────────────────────┐ │         │
│              │ │                     │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Email:                  │         │
│              │ ┌─────────────────────┐ │         │
│              │ │                     │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Password:               │         │
│              │ ┌─────────────────────┐ │         │
│              │ │ ••••••••••          │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Confirm Password:       │         │
│              │ ┌─────────────────────┐ │         │
│              │ │ ••••••••••          │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ ┌─────────────────────┐ │         │
│              │ │     Register        │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Already have account?   │         │
│              │ Login here              │         │
│              │                         │         │
│              └─────────────────────────┘         │
│                                                  │
│     (Gradient background: Purple to Blue)       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Features**:
- Form validation for all fields
- Password confirmation validation
- Error messages for duplicate username/email
- Success message with auto-redirect to login
- Link to login page

---

### 2. Login Page
**URL**: `http://localhost:3000/login`

```
┌──────────────────────────────────────────────────┐
│                                                  │
│              ┌─────────────────────────┐         │
│              │       Login             │         │
│              ├─────────────────────────┤         │
│              │                         │         │
│              │ Username:               │         │
│              │ ┌─────────────────────┐ │         │
│              │ │                     │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Password:               │         │
│              │ ┌─────────────────────┐ │         │
│              │ │ ••••••••••          │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ ┌─────────────────────┐ │         │
│              │ │      Login          │ │         │
│              │ └─────────────────────┘ │         │
│              │                         │         │
│              │ Don't have account?     │         │
│              │ Register here           │         │
│              │                         │         │
│              └─────────────────────────┘         │
│                                                  │
│     (Gradient background: Purple to Blue)       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Features**:
- Simple username/password form
- Input validation
- Error handling for invalid credentials
- Link to registration page
- Secure password field
- Redirect to dashboard on successful login

---

### 3. Dashboard/Profile Page
**URL**: `http://localhost:3000/dashboard` (Protected)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   Dashboard            ┌──────────────┐          │
│                        │   Logout     │          │
│                        └──────────────┘          │
│                                                  │
│   ┌──────────────────────────────────────┐      │
│   │ 👤 Profile Information               │      │
│   ├──────────────────────────────────────┤      │
│   │                                      │      │
│   │ ID:              │ 1                 │      │
│   │                                      │      │
│   │ First Name:      │ John              │      │
│   │                                      │      │
│   │ Last Name:       │ Doe               │      │
│   │                                      │      │
│   │ Username:        │ john_doe          │      │
│   │                                      │      │
│   │ Email:           │ john@example.com  │      │
│   │                                      │      │
│   └──────────────────────────────────────┘      │
│                                                  │
│   ┌──────────────────────────────────────┐      │
│   │ ✅ Account Status                    │      │
│   ├──────────────────────────────────────┤      │
│   │                                      │      │
│   │ Status:          │ Active (green)    │      │
│   │                                      │      │
│   └──────────────────────────────────────┘      │
│                                                  │
│     (Gradient background: Purple to Blue)       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Features**:
- Protected route (redirects to login if not authenticated)
- Displays user profile information
- Account status indicator
- Logout button
- Profile cards with clean styling
- Loading spinner while fetching data

---

### 4. Logout Functionality
**Action**: Clicking "Logout" button on Dashboard

```
BEFORE LOGOUT:
└─ Dashboard (Authenticated)
    └─ User ID: 1 (stored in localStorage)

DURING LOGOUT:
└─ Clearing localStorage
    └─ Remove userId
    └─ Remove username

AFTER LOGOUT:
└─ Redirects to Login page
    └─ Session cleared
    └─ User must login again
```

---

## 🚀 How to Test the UI

### Prerequisites
```bash
# 1. Start MySQL
# 2. Create database
mysql -u root -p
CREATE DATABASE auth_db;

# 3. Start Backend
cd backend
mvn spring-boot:run
# Wait for: "Started BackendApplication in X seconds"

# 4. Start Frontend
cd web
npm install  # (if not done)
npm start
# Browser opens at http://localhost:3000
```

### Test Scenarios

#### Scenario 1: Register New User
```
1. Navigate to: http://localhost:3000/register
2. Fill form:
   - First Name: John
   - Last Name: Doe
   - Username: john_doe
   - Email: john@example.com
   - Password: TestPass123
   - Confirm Password: TestPass123
3. Click Register
4. Expected: Success message → Redirect to login
5. Check: User created in MySQL
   SELECT * FROM users WHERE username='john_doe';
```

#### Scenario 2: Login with Credentials
```
1. Navigate to: http://localhost:3000/login
2. Enter:
   - Username: john_doe
   - Password: TestPass123
3. Click Login
4. Expected: Redirect to dashboard
5. Verify: User profile information displayed
6. Check: userId stored in localStorage
   Open DevTools → Application → localStorage
```

#### Scenario 3: View Protected Dashboard
```
1. Login successfully
2. Navigate to: http://localhost:3000/dashboard
3. Expected: Profile page loads
4. Try direct access (logged out):
   - Clear localStorage
   - Navigate to http://localhost:3000/dashboard
   - Expected: Redirect to login
```

#### Scenario 4: Logout
```
1. Login successfully
2. Navigate to: http://localhost:3000/dashboard
3. Click Logout button
4. Expected: 
   - localStorage cleared
   - Redirect to login page
5. Try accessing dashboard again
   - Expected: Redirect to login (not authenticated)
```

#### Scenario 5: Error Handling
```
Test 1: Duplicate Username
- Try registering with existing username
- Expected: Error message

Test 2: Invalid Email Format
- Register with invalid email
- Expected: Browser validation

Test 3: Password Mismatch
- Password ≠ Confirm Password
- Expected: Error message

Test 4: Wrong Login Credentials
- Enter wrong username/password
- Expected: "Invalid username or password"

Test 5: SQL Injection Prevention
- Username: ' OR '1'='1
- Expected: Treated as literal string, no breach
```

---

## 🔧 API Endpoint Testing with cURL

### Register User
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_doe",
    "email": "jane@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "password": "TestPass123"
  }'

# Expected Response:
# {
#   "success": true,
#   "message": "Registration successful",
#   "token": "token_placeholder",
#   "user": {...}
# }
```

### Login User
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jane_doe",
    "password": "TestPass123"
  }'

# Expected Response:
# {
#   "success": true,
#   "message": "Login successful",
#   "token": "token_placeholder",
#   "user": {...}
# }
```

### Get User Profile
```bash
curl -X GET "http://localhost:8080/api/user/me?userId=1"

# Expected Response:
# {
#   "id": 1,
#   "username": "jane_doe",
#   "email": "jane@example.com",
#   "firstName": "Jane",
#   "lastName": "Doe"
# }
```

---

## 📋 Browser DevTools Debugging

### Check Network Requests
```
1. Open DevTools (F12)
2. Go to Network tab
3. Perform action (login, register)
4. Check:
   - Status codes (200, 400, 500)
   - Response body
   - Request headers
   - CORS headers
```

### Check localStorage
```
1. Open DevTools (F12)
2. Go to Application/Storage tab
3. Click localStorage → http://localhost:3000
4. Should see:
   - userId: (number)
   - username: (string)
```

### Check Console Errors
```
1. Open DevTools (F12)
2. Go to Console tab
3. Look for:
   - Network errors
   - CORS errors
   - JavaScript errors
```

---

## 🎨 Styling Details

### Color Scheme
- **Gradient Background**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Primary Color**: #667eea (Purple-Blue)
- **Secondary Color**: #764ba2 (Deep Purple)
- **Text Dark**: #333333
- **Text Light**: #666666
- **Error Red**: #e74c3c
- **Success Green**: #27ae60

### Form Elements
- **Input Border**: 1px solid #ddd
- **Input Focus**: Border color changes to #667eea with shadow
- **Button**: Gradient with hover animation (translateY -2px)
- **Card**: White background with 0 10px 25px shadow

### Responsive Design
- **Max Card Width**: 400px (mobile-first)
- **Padding**: 20px on smaller screens
- **Font Sizes**: Responsive typography

---

## 📝 Notes for Documentation

When submitting FRS PDF update include:
1. ✅ ERD (saved as ERD.md)
2. ✅ UML Diagrams (saved as UML_DIAGRAMS.md)
3. ✅ Register Page screenshot
4. ✅ Login Page screenshot
5. ✅ Dashboard Page screenshot
6. ✅ Logout confirmation

**Actual screenshots** should be taken from running application and embedded in the PDF document.

---

**Last Updated**: February 6, 2026
**Lab 2 - Session 1**
