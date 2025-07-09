export default {
  beginner: [
    {
      id: "q1",
      text: "Which of the following definitions best describes React.js?",
      answers: [
        "A library to build user interfaces with help of declarative code.",
        "A library for managing state in web applications.",
        "A framework to build user interfaces with help of imperative code.",
        "A library used for building mobile applications only.",
      ],
    },
    {
      id: "q2",
      text: "What purpose do React hooks serve?",
      answers: [
        "Enabling the use of state and other React features in functional components.",
        "Creating responsive layouts in React applications.",
        "Handling errors within the application.",
        "Part of the Redux library for managing global state.",
      ],
    },
    {
      id: "q3",
      text: "Can you identify what JSX is?",
      answers: [
        "A JavaScript extension that adds HTML-like syntax to JavaScript.",
        "A JavaScript library for building dynamic user interfaces.",
        "A specific HTML version that was explicitly created for React.",
        "A tool for making HTTP requests in a React application.",
      ],
    },
    {
      id: "q4",
      text: "What is React?",
      answers: [
        "A front-end JavaScript library.",
        "A server-side framework",
        "A back-end JavaScript framework",
        "A database management system",
      ],
    },
    {
      id: "q5",
      text: "Which company developed ReactJS?",
      answers: [
        "Facebook.",
        "Google",
        "Microsoft",
        "Apple",
      ],
    },
    {
      id: "q6",
      text: "What is the virtual DOM?",
      answers: [
        "A virtual representation of the DOM.",
        "A direct representation of the actual DOM",
        "A tool for debugging React applications",
        "A way to style React components",
      ],
    },
    {
      id: "q7",
      text: "How do you pass data to a component from outside?",
      answers: [
        "props.",
        "setState",
        "state",
        "getInitialState",
      ],
    },
    {
      id: "q8",
      text: "What is the command to create a new React app?",
      answers: [
        "npx create-react-app my-app",
        "npm install create-react-app",
        "npm start",
        "react new-app",
      ],
    },
    {
      id: "q9",
      text: "What are the building blocks of a React application?",
      answers: [
        "Components.",
        "Functions",
        "Variables",
        "Classes",
      ],
    },
    {
      id: "q10",
      text: "What is the purpose of the `render()` function in React?",
      answers: [
        "To render HTML to the web page.",
        "To update the state of a component",
        "To handle user events",
        "To fetch data from an API",
      ],
    },
  ],
  intermediate: [
    {
      id: "q11",
      text: "What is the most common way to create a component in React?",
      answers: [
        "By defining a JavaScript function that returns a renderable value.",
        "By defining a custom HTML tag in JavaScript.",
        "By creating a file with a .jsx extension.",
        'By using the "new" keyword followed by the component name.',
      ],
    },
    {
      id: "q12",
      text: 'What does the term "React state" imply?',
      answers: [
        "An object in a component that holds values and may cause the component to render on change.",
        "The lifecycle phase a React component is in.",
        "The overall status of a React application, including all props and components.",
        "A library for managing global state in React applications.",
      ],
    },
    {
      id: "q13",
      text: "What is the difference between state and props?",
      answers: [
        "Props are immutable, state is mutable.",
        "State is immutable, props is mutable.",
        "Both are mutable.",
        "Both are immutable.",
      ],
    },
    {
      id: "q14",
      text: "What is conditional rendering in React?",
      answers: [
        "Rendering different components based on conditions.",
        "Rendering components in a specific order.",
        "Rendering components with a specific style.",
        "Rendering components on the server.",
      ],
    },
    {
      id: "q15",
      text: "What is the difference between a controlled and an uncontrolled component?",
      answers: [
        "Controlled components are controlled by React, uncontrolled by the DOM.",
        "Controlled components are controlled by the DOM, uncontrolled by React.",
        "There is no difference.",
        "Controlled components are for forms only.",
      ],
    },
    {
      id: "q16",
      text: "What is prop drilling and how can you avoid it?",
      answers: [
        "Passing props down multiple levels, can be avoided with Context API or Redux.",
        "A performance issue with props.",
        "A way to debug props.",
        "A new feature in React 18.",
      ],
    },
    {
      id: "q17",
      text: "What is the purpose of the `useEffect` hook?",
      answers: [
        "To perform side effects in functional components.",
        "To manage state in functional components.",
        "To create custom hooks.",
        "To replace `useState`.",
      ],
    },
    {
      id: "q18",
      text: "What is the difference between `componentDidMount` and `componentDidUpdate`?",
      answers: [
        "`componentDidMount` runs once after initial render, `componentDidUpdate` runs on re-renders.",
        "`componentDidUpdate` runs once after initial render, `componentDidMount` runs on re-renders.",
        "They are the same.",
        "They are hooks.",
      ],
    },
    {
      id: "q19",
      text: "What are Higher-Order Components (HOCs)?",
      answers: [
        "A function that takes a component and returns a new component.",
        "A component that is rendered at the top of the component tree.",
        "A component that is used to handle routing.",
        "A component that is used to manage state.",
      ],
    },
    {
      id: "q20",
      text: "What is lazy loading in React?",
      answers: [
        "Loading components asynchronously when they are needed.",
        "Loading all components at once.",
        "A way to improve performance by reducing the bundle size.",
        "A feature of Redux.",
      ],
    },
  ],
  advanced: [
    {
      id: "q21",
      text: "How do you typically render list content in React apps?",
      answers: [
        "By using the map() method to iterate over an array of data and returning JSX.",
        "By using the for() loop to iterate over an array of data and returning JSX.",
        "By using the forEach() method to iterate over an array of data and returning JSX.",
        "By using the loop() method to iterate over an array of data and returning JSX.",
      ],
    },
    {
      id: "q22",
      text: "Which approach can NOT be used to render content conditionally?",
      answers: [
        "Using a the #if template syntax.",
        "Using a ternary operator.",
        "Using the && operator.",
        "Using an if-else statement.",
      ],
    },
    {
      id: "q23",
      text: "What is the purpose of the `useCallback` hook and how does it differ from `useMemo`?",
      answers: [
        "`useCallback` memoizes functions, `useMemo` memoizes values.",
        "`useMemo` memoizes functions, `useCallback` memoizes values.",
        "They are the same.",
        "They are used for state management.",
      ],
    },
    {
      id: "q24",
      text: "Explain the concept of \"stale closures\" in the context of React hooks, and how to avoid them.",
      answers: [
        "A closure that captures an old state value, avoided by using dependency arrays correctly.",
        "A feature of JavaScript closures.",
        "A performance optimization technique.",
        "A type of error in React.",
      ],
    },
    {
      id: "q25",
      text: "When would you use `useReducer` over `useState`?",
      answers: [
        "For complex state logic or when next state depends on previous.",
        "For simple state logic.",
        "They are interchangeable.",
        "`useReducer` is deprecated.",
      ],
    },
    {
      id: "q26",
      text: "What is the significance of the `key` prop in React lists, and what are the potential issues with using an array index as a key?",
      answers: [
        "Keys help identify items, using index as key can cause issues with reordering.",
        "Keys are not important.",
        "Index is the best key.",
        "Keys are only for strings.",
      ],
    },
    {
      id: "q27",
      text: "How can you prevent unnecessary re-renders in a React application?",
      answers: [
        "Using `React.memo`, `useMemo`, `useCallback`, and `PureComponent`.",
        "By avoiding state.",
        "By using only functional components.",
        "It is not possible.",
      ],
    },
    {
      id: "q28",
      text: "What is code splitting and how can it be implemented in a React application?",
      answers: [
        "Breaking code into smaller chunks, implemented with `React.lazy` and `Suspense`.",
        "A way to organize code.",
        "A feature of webpack.",
        "A way to write CSS in JS.",
      ],
    },
    {
      id: "q29",
      text: "What is \"prop drilling\" and how does the Context API help to solve this problem?",
      answers: [
        "Passing props down multiple levels, Context API provides a better way to share data.",
        "A performance issue.",
        "A way to debug props.",
        "A new feature in React 18.",
      ],
    },
    {
      id: "q30",
      text: "What are Higher-Order Components (HOCs) and what are their use cases?",
      answers: [
        "A function that takes a component and returns a new component, used for reusing logic.",
        "A component that is rendered at the top of the component tree.",
        "A component that is used to handle routing.",
        "A component that is used to manage state.",
      ],
    },
  ],
};