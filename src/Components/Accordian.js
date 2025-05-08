import { useState } from "react";

export default function Accordian() {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <>
      {reactQuestions.map((question, index) => (
        <AccordianItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          question={question}
          key={question.id}
          num={index}
        />
      ))}
    </>
  );
}

function AccordianItem({ question, num, currOpen, onOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);

  const isOpen = num === currOpen;

  function handleOpen() {
    onOpen(!isOpen ? num : null);
  }

  return (
    <div>
      <h3 onClick={handleOpen} style={{ cursor: "pointer" }}>
        <span> {num < 9 ? `0${num + 1}` : num + 1} </span>
        {question.question}
        {isOpen ? <span>➖</span> : <span>➕</span>}
      </h3>
      {isOpen && <p> {question.answer} </p>}
    </div>
  );
}

const reactQuestions = [
  {
    id: 1,
    question: "What is a React component?",
    answer:
      "A React component is a reusable building block in a React application that defines how a part of the UI should appear and behave. It can be a function or a class that returns JSX to describe the UI.",
  },
  {
    id: 2,
    question: "What is the difference between state and props in React?",
    answer:
      "State is a local data storage within a component that can change over time, managed by the component itself. Props are read-only data passed from a parent component to a child component to configure its behavior or appearance.",
  },
  {
    id: 3,
    question: "What are Reactarius hooks in React?",
    answer:
      "Hooks are functions that enable functional components to use React features like state and lifecycle methods without using class components. Examples include useState for managing state and useEffect for handling side effects.",
  },
  {
    id: 4,
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript used in React to describe the UI. It looks like HTML but is compiled into JavaScript function calls that create React elements.",
  },
  {
    id: 5,
    question: "What is the purpose of the useEffect hook?",
    answer:
      "The useEffect hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM, and it runs after every render or when specified dependencies change.",
  },
];
