Create a web-based app where users can register.

Fields:
Name
Surname
Telephone Number
Email Address
Password
Confirm Password
Requirements:

Validation:
All fields must be filled out and correctly formatted.
Password and Confirm Password must match.
A user must not already be registered with the same telephone number or email address.

Data Storage:
User data should be stored in an SQL database.

Login Page:
Validate the email and password against the database.
If valid, redirect the user to a welcome page.
Only logged-in users should be able to access the welcome page. Unauthorized users should be redirected to the login page.
