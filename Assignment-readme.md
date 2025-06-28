For this assignment, you will update the Counter.jsx, TextInput.jsx, and App.jsx files as per the instructions below.

# Week 4 - Day 2: React useState, Controlled Forms & Event Handling

## 🧠 Real-World Scenario
You are tasked with building interactive React components using the useState hook, event handling, and controlled forms. You will create a Counter and a TextInput component, and integrate them into your app.

## 🎯 Assignment Overview

1. Set up a Vite React app in a folder named `./Week04/Day02/`.
2. Follow the steps below to complete the assignment tasks:
   - Update `Counter.jsx` to display a count, and add "+", "-", and "Reset" buttons to control the count using useState.
   - Update `TextInput.jsx` to display an input field and show the live value as you type, using useState and onChange.
   - Update `App.jsx` to import and display both `Counter` and `TextInput` components.
3. Refer to any provided images or resources for setup help if needed.


## 📁 Folder Structure
Your project should be inside a folder named `./Week04/Day02/`:

```
Week04/
  Day02/
    node_modules/
    public/
    src/
      components/
        Counter.jsx
        TextInput.jsx
      App.jsx
      main.jsx
    package.json
    ...other Vite files
```

## 🧪 Testing & Scoring
- There will be 5 test cases for this assignment:
  1. The `src/components` folder exists and contains both `Counter.jsx` and `TextInput.jsx` files.
  2. The `vite.config.js` file is present in the project root directory.
  3. The `.gitignore` file is present in the project root directory.
  4. The `src/App.jsx` file imports both `Counter` and `TextInput` from the `src/components` folder using import statements (e.g., `import Counter from './components/Counter'`).
  5. The `package.json` file lists `vite` as a dependency or devDependency.

## 🚩 What to Build

### Counter Component (`Counter.jsx`)
- Display a count value on the screen.
- Add "+" and "–" buttons to increment and decrement the count.
- Add a "Reset" button to set the count to 0.
- Use the `useState` hook to manage the count state.
- Use event handlers (e.g., `onClick`) for button actions.

### TextInput Component (`TextInput.jsx`)
- Add an input field.
- Display the value as the user types (live update).
- Use the `useState` hook to manage the input value.
- Use the `onChange` event to update state.
- Make sure your input is a controlled component (value comes from state).

### App Integration (`App.jsx`)
- Import and display both `Counter` and `TextInput` components in your main app.

## Tips
- Use the `useState` hook for state management.
- Use event handlers like `onClick` and `onChange`.
- Never mutate state directly (e.g., avoid `count++`).
- Keep your event handler functions clean and readable.
- Try both direct and functional updates with `setState`.

## How to Start
1. Run `npm install` to install dependencies (if not already done).
2. Run `npm run dev` to start the development server.
3. Edit the files in `src/` as per the instructions above.

## Bonus
- Add some basic styling to your components.
- Try tracking multiple pieces of state (e.g., first name and last name in TextInput).
- Experiment with different event handlers (e.g., `onDoubleClick`).

Good luck and have fun learning React!
