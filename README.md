#  Guess The Number Game

This is a simple Command Line Interface (CLI) game built using JavaScript.
The system randomly generates a number between 1 and 100.
The user must guess the number within a limited number of attempts.

------------------------------------------------------------

##  Features

- Random number generation between 1–100
- User input using prompt-sync
- Input validation
- Attempt counter
- Hint system after 5 attempts
- Displays range hint based on previous guesses
- Prevents invalid inputs above 100

------------------------------------------------------------

##  Technologies Used

- JavaScript (Node.js)
- prompt-sync (for user input)
- Math.random() for random number generation

------------------------------------------------------------

##  How The Game Works

1. A random number is generated between 1 and 100.
2. User is prompted to enter a number.
3. The program:
   - Stores all guesses in an array
   - Tracks number of attempts
   - Gives feedback after each guess
4. After 5 attempts:
   - The program gives a hint showing the possible range.
5. If the user guesses correctly:
   - It displays success message
   - Shows total attempts taken
6. If attempts exceed 100:
   - The game stops automatically.

------------------------------------------------------------

## 📥 Important: Running This Project
⚠️ The `prompt()` function does NOT work directly in VS Code for Node.js.
Node.js does not have built-in browser-style prompt.

To run this project, you must install:
prompt-sync

### Install It First:
Open terminal inside project folder and run:
npm init -y
npm install prompt-sync

Then run:
node filename.js
