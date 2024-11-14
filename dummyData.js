export const testDataReact = [
  {
    id: 1,
    questionName: "What is React?",
    options: [
      "A programming language",
      "A JavaScript library for building user interfaces",
      "A database",
      "A framework for styling web pages",
    ],
    correctOption: 1,
    type: "mcq",
    explanation:
      "React is a JavaScript library developed by Facebook. It allows developers to create dynamic and interactive UIs by managing the state and rendering views efficiently.",
  },
  {
    id: 2,
    questionName:
      "Which of the following is used to create components in React?",
    options: [
      "class",
      "function",
      "both class and function",
      "none of the above",
    ],
    correctOption: 2,
    type: "mcq",
    explanation:
      "In React, components can be created using both class-based and function-based syntax. Class components were used initially, but functional components are now more common due to the introduction of hooks.",
  },
  {
    id: 3,
    questionName:
      "Which hook is used to handle state in functional components?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    correctOption: 1,
    type: "mcq",
    explanation:
      "`useState` is a hook specifically designed to manage state in functional components. It allows you to declare state variables and update their values, bringing stateful functionality to function-based components.",
  },
  {
    id: 4,
    questionName: "What does JSX stand for in React?",
    options: [
      "JavaScript Extension",
      "JavaScript XML",
      "JavaScript X",
      "JavaScript Exception",
    ],
    correctOption: 1,
    type: "mcq",
    explanation:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax within JavaScript code, making the creation of UI components easier and more readable.",
  },
  {
    id: 5,
    questionName: "What is the default port number for a React app?",
    options: ["3000", "8080", "4000", "5000"],
    correctOption: 0,
    type: "mcq",
    explanation:
      "The default port for a React app created with `create-react-app` is 3000. This can be changed if needed, but 3000 is the standard port React applications start on.",
  },
  {
    id: 6,
    questionName:
      "Which lifecycle method is called after the component is mounted?",
    options: [
      "componentDidMount",
      "render",
      "componentWillUnmount",
      "getDerivedStateFromProps",
    ],
    correctOption: 0,
    type: "mcq",
    explanation:
      "`componentDidMount` is a lifecycle method in class components that executes after the component is added to the DOM. It's commonly used for operations like data fetching or setting up subscriptions.",
  },
  {
    id: 7,
    questionName: "What is the purpose of the 'key' prop in React?",
    options: [
      "To set the value of a component",
      "To help React identify components uniquely",
      "To define CSS styles",
      "To pass data between components",
    ],
    correctOption: 1,
    type: "mcq",
    explanation:
      "The `key` prop in React helps uniquely identify elements in a list. It allows React to optimize the rendering process by efficiently tracking which items have changed, been added, or removed.",
  },
  {
    id: 8,
    questionName:
      "Which of the following is NOT a valid way to define a React component?",
    options: [
      "function MyComponent() {}",
      "const MyComponent = () => {}",
      "class MyComponent extends React.Component {}",
      "component MyComponent() {}",
    ],
    correctOption: 3,
    type: "mcq",
    explanation:
      "`component MyComponent() {}` is not a valid syntax in JavaScript or React for defining a component. React components are typically defined as functions or ES6 classes.",
  },
  {
    id: 9,
    questionName: "What is the function of 'props' in React?",
    options: [
      "To store data that changes over time",
      "To pass data from parent to child components",
      "To handle user input",
      "To store state in a component",
    ],
    correctOption: 1,
    type: "mcq",
    explanation:
      "`props` in React allow data to be passed from a parent component to a child component, making components reusable and modular. `props` are read-only and cannot be modified by the child component.",
  },
  {
    id: 10,
    questionName:
      "Which hook is used to perform side effects in React functional components?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctOption: 1,
    type: "mcq",
    explanation:
      "`useEffect` is used to perform side effects in functional components, such as data fetching, subscriptions, and directly manipulating the DOM. It runs after the component renders or when dependencies change.",
  },
];

const testDataJava = [
  {
    id: 1,
    questionName: "What is Java?",
    options: [
      "A database management system",
      "A programming language",
      "A web server",
      "A type of hardware",
    ],
    correctOption: 1,
    type: "mcq",
  },
  {
    id: 2,
    questionName: "Which keyword is used to define a class in Java?",
    options: ["def", "function", "class", "class"],
    correctOption: 2,
    type: "mcq",
  },
  {
    id: 3,
    questionName:
      "Which method is used as the entry point in a Java application?",
    options: ["start()", "run()", "main()", "execute()"],
    correctOption: 2,
    type: "mcq",
  },
  {
    id: 4,
    questionName: "Which of the following is NOT a primitive type in Java?",
    options: ["int", "boolean", "String", "float"],
    correctOption: 2,
    type: "mcq",
  },
  {
    id: 5,
    questionName:
      "What is the default value of an uninitialized int variable in Java?",
    options: ["0", "-1", "null", "undefined"],
    correctOption: 0,
    type: "mcq",
  },
  {
    id: 6,
    questionName: "What is the purpose of the 'final' keyword in Java?",
    options: [
      "To make a variable mutable",
      "To allow a class to be inherited",
      "To prevent inheritance or modification",
      "To declare an interface",
    ],
    correctOption: 2,
    type: "mcq",
  },
  {
    id: 7,
    questionName: "Which operator is used for comparison in Java?",
    options: ["=", "==", "===", "equals"],
    correctOption: 1,
    type: "mcq",
  },
  {
    id: 8,
    questionName:
      "Which of the following is a valid way to start a thread in Java?",
    options: [
      "thread.run()",
      "new Thread().run()",
      "thread.start()",
      "new Thread().begin()",
    ],
    correctOption: 2,
    type: "mcq",
  },
  {
    id: 9,
    questionName: "What does JVM stand for?",
    options: [
      "Java Virtual Machine",
      "Java Variable Memory",
      "Java Version Manager",
      "Java Visual Model",
    ],
    correctOption: 0,
    type: "mcq",
  },
  {
    id: 10,
    questionName: "Which keyword is used to inherit a class in Java?",
    options: ["implement", "extend", "inherit", "instanceof"],
    correctOption: 1,
    type: "mcq",
  },
];

export const allQuizData = [
  { id: 1, quizName: "React Quiz", noOfQuestion: 10 },
  { id: 1, quizName: "React Quiz", noOfQuestion: 10 },
  { id: 1, quizName: "React Quiz", noOfQuestion: 10 },
  { id: 1, quizName: "React Quiz", noOfQuestion: 10 },
  { id: 1, quizName: "React Quiz", noOfQuestion: 10 },
];
