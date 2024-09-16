# Redux Tutorials

Redux is a state management library, commonly used with React to handle the state of large applications in a **predictable and maintainable way**.

## Key Components of Redux

### 1. Store
The **Store** holds the entire state of your application in a single JavaScript object. This makes Redux the **single source of truth**, ensuring that the state is predictable and easier to debug.

### 2. Actions
**Actions** are plain JavaScript objects that represent events happening in the application. Each action must have a `type` property, which specifies the type of action being performed. Optionally, actions can have a `payload` property containing additional data.

### 3. Reducers
**Reducers** are pure functions that take the current state and an action as arguments, then return a new state based on the action. Reducers define **how the application state changes** in response to different actions.

### 4. Dispatch
The **Dispatch** function sends actions to the Redux store. Dispatching actions triggers the reducers, which calculate the new state and update the application accordingly.

### 5. Selectors
**Selectors** are functions that extract and return a piece of the state from the Redux store. Selectors make it easier to access specific parts of the state in a **reusable** way.

---

## Main Workflow of Redux with React Components

In React-Redux applications, data flow is **predictable** and **unidirectional**:

1. **User interaction**: A user interacts with the UI (e.g., by clicking a button).
2. **Component dispatches an action**: The React component sends an action to the Redux store, triggering the process of updating the state.
3. **Reducer processes the action**: The reducer handles the action and updates the state.
4. **New state updates the component**: The updated state is passed back to the component, which re-renders the UI accordingly.

---

## What Does "Dispatch" Mean?

When we **dispatch an action**, we send it to the Redux store so it can be processed. The store receives the action and passes it to the appropriate reducer, which then updates the state.

Dispatching is like saying:  
“Hey Redux, here’s what happened (the action), do something with it!”

### Role of the Component in Dispatching

When we say "the component dispatches an action," it means a React component triggers the process of sending an action to the store. This typically occurs in response to a user interaction, such as clicking a button or submitting a form.

### Example Scenario

Imagine you have a React component with a button. When the user clicks this button, you want to add a new to-do item to the list.

Here’s what happens:

1. The user clicks the button.
2. The component **dispatches an action** (e.g., `ADD_TODO`).
3. The action is sent to the Redux store.
4. The Redux store processes the action using a reducer and updates the global state.
5. React updates the UI based on the new state.

---

This predictable flow helps in managing the application's state efficiently and consistently.
