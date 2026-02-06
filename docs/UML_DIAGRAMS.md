# UML Diagrams

## Class Diagram

```
┌─────────────────────────────────────────────┐
│              User (Entity)                  │
├─────────────────────────────────────────────┤
│ - id: Long                                  │
│ - username: String                          │
│ - email: String                             │
│ - password: String                          │
│ - firstName: String                         │
│ - lastName: String                          │
│ - createdAt: LocalDateTime                  │
├─────────────────────────────────────────────┤
│ + prePersist(): void                        │
└─────────────────────────────────────────────┘
         △
         │ implements
         │
┌─────────────────────────────────────────────┐
│         UserDTO (Data Transfer)             │
├─────────────────────────────────────────────┤
│ - id: Long                                  │
│ - username: String                          │
│ - email: String                             │
│ - firstName: String                         │
│ - lastName: String                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│       RegisterRequest (Request DTO)         │
├─────────────────────────────────────────────┤
│ - username: String                          │
│ - email: String                             │
│ - password: String                          │
│ - firstName: String                         │
│ - lastName: String                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│       LoginRequest (Request DTO)            │
├─────────────────────────────────────────────┤
│ - username: String                          │
│ - password: String                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│       AuthResponse (Response DTO)           │
├─────────────────────────────────────────────┤
│ - success: boolean                          │
│ - message: String                           │
│ - token: String                             │
│ - user: UserDTO                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│        UserRepository (Repository)          │
├─────────────────────────────────────────────┤
│ + findByUsername(username): Optional<User>  │
│ + findByEmail(email): Optional<User>        │
└─────────────────────────────────────────────┘
         △
         │ uses
         │
┌─────────────────────────────────────────────┐
│         AuthService (Service)               │
├─────────────────────────────────────────────┤
│ - userRepository: UserRepository            │
│ - passwordEncoder: BCryptPasswordEncoder    │
├─────────────────────────────────────────────┤
│ + register(RegisterRequest): User           │
│ + login(LoginRequest): User                 │
│ + convertToDTO(User): UserDTO               │
│ + getUserById(id): Optional<User>           │
└─────────────────────────────────────────────┘
         △
         │ uses
         │
┌─────────────────────────────────────────────┐
│       AuthController (Controller)           │
├─────────────────────────────────────────────┤
│ - authService: AuthService                  │
├─────────────────────────────────────────────┤
│ + register(RegisterRequest): ResponseEntity │
│ + login(LoginRequest): ResponseEntity       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│       UserController (Controller)           │
├─────────────────────────────────────────────┤
│ - authService: AuthService                  │
├─────────────────────────────────────────────┤
│ + getCurrentUser(userId): ResponseEntity    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│    SecurityConfig (Configuration)           │
├─────────────────────────────────────────────┤
│ + passwordEncoder(): BCryptPasswordEncoder  │
└─────────────────────────────────────────────┘
```

## Sequence Diagram - Registration Flow

```
User                Browser            Backend              Database
 │                    │                  │                    │
 │  1. Fill Form      │                  │                    │
 │───────────────────>│                  │                    │
 │                    │  2. POST /api/auth/register
 │                    │─────────────────>│                    │
 │                    │                  │  3. Validate Input
 │                    │                  │  4. Hash Password
 │                    │                  │  5. INSERT User
 │                    │                  │───────────────────>│
 │                    │                  │                    │ 6. Confirm
 │                    │                  │<───────────────────│
 │                    │  7. Return 200 OK
 │                    │<─────────────────│
 │  8. Success Message│                  │                    │
 │<───────────────────│                  │                    │
 │                    │                  │                    │
 │  9. Redirect Login │                  │                    │
 │───────────────────>│                  │                    │
 │                    │                  │                    │
```

## Sequence Diagram - Login Flow

```
User                Browser            Backend              Database
 │                    │                  │                    │
 │  1. Enter Creds    │                  │                    │
 │───────────────────>│                  │                    │
 │                    │  2. POST /api/auth/login
 │                    │─────────────────>│                    │
 │                    │                  │  3. Query User
 │                    │                  │───────────────────>│
 │                    │                  │                    │ 4. Return User
 │                    │                  │<───────────────────│
 │                    │                  │  5. Verify Password
 │                    │                  │     (BCrypt.matches)
 │                    │  6. Return 200 OK
 │                    │<─────────────────│ + Auth Token
 │  7. Save Token     │                  │                    │
 │<───────────────────│                  │                    │
 │                    │                  │                    │
 │  8. Redirect       │                  │                    │
 │    Dashboard       │                  │                    │
 │───────────────────>│                  │                    │
 │                    │                  │                    │
```

## Sequence Diagram - Dashboard Access Flow

```
User                Browser            Backend              Database
 │                    │                  │                    │
 │  1. Access         │                  │                    │
 │    Dashboard       │                  │                    │
 │───────────────────>│                  │                    │
 │                    │  2. GET /api/user/me
 │                    │    + userId      │                    │
 │                    │─────────────────>│                    │
 │                    │                  │  3. Query User
 │                    │                  │───────────────────>│
 │                    │                  │                    │ 4. Return User Data
 │                    │                  │<───────────────────│
 │                    │  5. Return UserDTO
 │                    │<─────────────────│
 │  6. Display        │                  │                    │
 │    Profile Data    │                  │                    │
 │<───────────────────│                  │                    │
 │                    │                  │                    │
```

## Use Case Diagram

```
                        ┌─────────────────────────────┐
                        │      Auth System            │
                        └─────────────────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
            ┌───▼────────────┐  ┌───▼────────────┐  ┌──▼─────────────┐
            │   Register     │  │   Login        │  │  View Profile  │
            └────────────────┘  └────────────────┘  └────────────────┘
                    │                   │                   │
                    │                   │                   │
                    └─────────┬─────────┴───────────────────┘
                              │
                              ▼
                        ┌─────────────┐
                        │    User     │
                        └─────────────┘
                              △
                              │
                              │ <<include>>
                              │
                        ┌─────▼──────────┐
                        │   Logout       │
                        └────────────────┘
```

## Component Diagram

```
┌───────────────────────────────────────────────────────────────┐
│                       Frontend (React)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐                │
│  │ Register │  │  Login   │  │  Dashboard   │                │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘                │
│       │             │               │                        │
│       └─────────────┼───────────────┘                        │
│                     │                                        │
│                 ┌───▼────────────┐                           │
│                 │  App Component │                           │
│                 └───┬────────────┘                           │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │ REST API (HTTP/CORS)
                      │
┌─────────────────────▼────────────────────────────────────────┐
│                    Backend (Spring Boot)                     │
│  ┌──────────────┐      ┌──────────────────┐                 │
│  │ AuthController│      │ UserController   │                 │
│  └──────┬───────┘      └────────┬─────────┘                 │
│         │                       │                           │
│         └───────────┬───────────┘                           │
│                     │                                       │
│                 ┌───▼────────────┐                          │
│                 │  AuthService   │                          │
│                 └───┬────────────┘                          │
│                     │                                       │
│         ┌───────────┴───────────┐                          │
│         │                       │                          │
│    ┌────▼──────────────┐   ┌───▼──────────────┐           │
│    │ UserRepository    │   │ SecurityConfig   │           │
│    └────┬──────────────┘   └──────────────────┘           │
│         │                                                  │
└─────────┼──────────────────────────────────────────────────┘
          │ JPA/Hibernate
          │
┌─────────▼──────────────────────────────────────────────────┐
│              Database (MySQL)                              │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                USERS Table                          │  │
│  │  id │ username │ email │ password │ firstName ...  │  │
│  └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

**Note**: These UML diagrams represent the current MVP architecture. Additional diagrams for advanced features will be added in future iterations.
