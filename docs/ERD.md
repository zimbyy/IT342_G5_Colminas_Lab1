# Entity Relationship Diagram (ERD)

## Database Design

```
┌─────────────────────────────────────────┐
│              USERS                      │
├─────────────────────────────────────────┤
│ PK │ id (BIGINT)                         │
│    │ username (VARCHAR(100)) UNIQUE      │
│    │ email (VARCHAR(255)) UNIQUE         │
│    │ password (VARCHAR(255))             │
│    │ first_name (VARCHAR(100))           │
│    │ last_name (VARCHAR(100))            │
│    │ created_at (TIMESTAMP)              │
└─────────────────────────────────────────┘
```

## Table Details

### Users Table
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | BIGINT | PK, AUTO_INCREMENT | Unique user identifier |
| username | VARCHAR(100) | UNIQUE, NOT NULL | User login username |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User email address |
| password | VARCHAR(255) | NOT NULL | BCrypt hashed password |
| first_name | VARCHAR(100) | NOT NULL | User's first name |
| last_name | VARCHAR(100) | NOT NULL | User's last name |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |

## Future Extensions

### Sessions Table (For future JWT implementation)
```
┌─────────────────────────────────────────┐
│           SESSIONS                      │
├─────────────────────────────────────────┤
│ PK │ id (BIGINT)                         │
│    │ user_id (BIGINT) FK → USERS.id      │
│ FK │ token (TEXT)                        │
│    │ expires_at (TIMESTAMP)              │
│    │ created_at (TIMESTAMP)              │
└─────────────────────────────────────────┘
```

### Audit Logs Table (For future auditing)
```
┌─────────────────────────────────────────┐
│          AUDIT_LOGS                     │
├─────────────────────────────────────────┤
│ PK │ id (BIGINT)                         │
│    │ user_id (BIGINT) FK → USERS.id      │
│ FK │ action (VARCHAR(50))                │
│    │ details (TEXT)                      │
│    │ created_at (TIMESTAMP)              │
└─────────────────────────────────────────┘
```

## Relationships

### Current Implementation
- **No relationships** (Single table design for MVP)
- All user data is denormalized into the USERS table

### Future Implementation
- SESSIONS → USERS (One-to-Many)
- AUDIT_LOGS → USERS (One-to-Many)

## Normalization

### Current State
- **Normalization Level**: 3NF (Third Normal Form)
- **Status**: Fully normalized for MVP

### Indexes
```sql
CREATE UNIQUE INDEX idx_users_username ON users(username);
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);
```

## SQL Schema Creation

```sql
-- Create Users Table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

**Note**: This ERD is for the current MVP. Additional tables for sessions, audit logs, and user roles will be added in future phases.
