* Authentication System Using MERN Stack:
This project is a simple login and registration system. It is built using the MERN stack. 
Its main job is to help users create accounts and keep their data safe while they log in and out.

* Main Features:
Secure Login:- Users can sign up and log in safely using their email and password.
Roles:- There are two types of users: Regular Users and Admins. Admins have special access to the dashboard.
Protected Pages:- If you are not logged in, you cannot see private pages like your profile.
State Management:- The app remembers if you are logged in using Redux.
Modern Design:- The website is styled with Tailwind CSS, making it look clean and professional on all devices.

* Tools Used:
Frontend:- React.js, Redux, Tailwind CSS.
Backend:- Node.js, Express.js.
Database:- MongoDB

* How to Use the API:
Endpoint                      -- Method   -- What it does

/api/v1/auth/registration     -- POST     -- Creates a new user account
/api/v1/auth/login            -- POST     -- Logs in an existing user
/api/v1/auth/logout           -- POST     -- Signs the user out
/api/v1/auth/dashboard        -- GET      -- Shows the User's personal dashboard
/api/v1/auth/admindashboard   -- GET      -- Shows the Admin's special dashboard


* How to Start the Project:

1. Download the code: Get the project on your computer using git clone.

2. Setup the Server (Backend):
    * Open the Back_End folder.
    * Create a file named .env and add your database link and security keys there.
    * Type npm install in your terminal to get the necessary files.
    * Run node server.js to start the backend.

3. Setup the Website (Frontend):
    * Open the Front_End folder.
    * Type npm install in your terminal.
    * Run npm run dev to see the website in your browser.


