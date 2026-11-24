# Login api with protected middleware

## Course Context
**Course:** Newton School Course  
**Problem Slug:** `sz4y537k4waq`  
**Submission Time:** 2026-11-24T17:05:42.604Z

## Problem Statement

Objective

Your task is to implement a secure authentication system for a simple Express.js application. You will be responsible for creating a user login endpoint and a middleware function to protect a specific route. This will involve handling user credentials, generating JSON Web Tokens (JWT), and validating these tokens to control access to protected resources.

Scenario

You are a backend developer at a startup. The team has built the basic structure of a user management API, including a user registration endpoint. Your assignment is to complete the authentication flow. You need to allow registered users to log in, receive an access token, and use that token to access a special "protected" area of the API.

Project Structure

You have been provided with boilerplate code that sets up the Express server and includes a /register route. You do not need to modify the registration logic. Your focus will be on the /login route, the /protected route, and the authenticateToken middleware.

Your Tasks

Task 1: Implement the User Login Endpoint

In the index.js file, you need to complete the logic for the POST /login endpoint.

 * 
 Functionality:

 
 * 
 Receive email and password from the request body. If either is missing, return a 400 status with { "message": "Email and password are required" }.

 

 * 
 Find if a user with the given email exists in the in-memory users array.

 

 * 
 If the user does not exist, respond with a 400 Bad Request status and a message: { "message": "Invalid credentials" }.

 

 * 
 If the user exists, use bcrypt.compare() to check if the provided password matches the stored hashed password.

 

 * 
 If the passwords do not match, respond with a 400 Bad Request status and a message: { "message": "Invalid credentials" }.

 

 * 
 If the passwords match, generate a JWT using the jsonwebtoken library.

 
 * 
 The token&#39;s payload should be an object containing the user&#39;s email: { email: user.email }.

 

 * 
 Sign the token using the provided JWT_SECRET.

 

 * 
 Set the token to expire in 1h.

 

 
 

 * 
 Respond with a 200 OK status and a JSON object containing the token: { "token": "YOUR_GENERATED_TOKEN" }.

 

 
 

Task 2: Implement the Authentication Middleware

In the middleware/validate.js file, you need to complete the authenticateToken function.

 * 
 Functionality:

 
 * 
 Extract the JWT from the request&#39;s Authorization header. The header format will be Bearer &lt;TOKEN&gt;.

 

 * 
 If the Authorization header is missing or does not contain a token, respond with a 401 Unauthorized status and the message: { "message": "Access Denied: No token provided" }.

 

 * 
 Extract just the token string from the header (i.e., remove "Bearer ").

 

 * 
 Use jwt.verify() to decode and validate the token against the JWT_SECRET.

 

 * 
 If the token is invalid or expired, jwt.verify() will call its callback with an error. You should handle this by responding with a 403 Forbidden status and the message: { "message": "Access Denied: Invalid or expired token" }.

 

 * 
 If the token is valid, the verify callback will receive the decoded payload. Attach this payload to the req object as req.user.

 

 * 
 Call next() to pass control to the next middleware or route handler.

 

 
 

Task 3: Complete the Protected Route

In the index.js file, complete the GET /protected route handler. The authenticateToken middleware is already applied to this route.

 * 
 Functionality:

 
 * 
 This route should only be accessible to users who provide a valid JWT.

 

 * 
 Inside the route handler, req.user will contain the authenticated user&#39;s data (from the middleware).

 

 * 
 Respond with a 200 OK status and a JSON object containing a welcome message and the user&#39;s data, for example: { "message": "Welcome to the protected data, testuser@example.com!", "user": { "email": "testuser@example.com" } }.

 

 
 

Testing Your Implementation

The provided test suite (test/auth.test.js) will be used to verify your solution. Ensure your implementation passes all the following checks:

 * 
 Login:

 
 * 
 A user can log in with correct credentials and receive a token (200 OK).

 

 * 
 A login attempt with a wrong password fails (400 Bad Request with "Invalid credentials").

 

 * 
 A login attempt with a non-existent email fails (400 Bad Request with "Invalid credentials").

 

 
 

 * 
 Protected Route Access:

 
 * 
 An attempt to access /protected without a token is rejected (401 Unauthorized with "Access Denied: No token provided").

 

 * 
 An attempt to access /protected with an invalid token is rejected (403 Forbidden with "Access Denied: Invalid or expired token").

 

 * 
 A successful request to /protected with a valid token returns the protected data and user info (200 OK).

## Solution

```js
res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;
```

---
*Auto-generated by [UniSync Chrome Extension](https://github.com).*
