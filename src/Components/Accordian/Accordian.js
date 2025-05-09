import { useState } from "react";
import AccordianItem from "./AccordianItem";

export default function Accordian({ reactQuestions }) {
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
