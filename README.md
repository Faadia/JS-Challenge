# JavaScript Imports/Exports Challenge

### Setting Up
1. Run `npm install`
2. Run `npm start`
3. Vist `http://localhost:5000` in your browser

### Create a folder called `components` in src

### Create a user component
1. Create a component with the name `user`.
2. This component must export **TWO** functions: `getName` and `getSurname`
3. These functions should **RETURN** the name and surname from `#name` and `#surname` in the DOM respectively.

### Create a fullname component
1. Create a component with the name `fullname`.
2. This component must export a *function* which has a `name` and `surname` parameter.
3. When this this function must be called passing in `getName` and `getSurname`
4. The function must set the DOM element `#fullname`'s text to `name` and `surname`.
5. You must make use of a *Template String* and there must be a space between the name and surname.
