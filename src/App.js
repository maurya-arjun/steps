import React, { useState } from "react";
import Accordian from "./Components/Accordian";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //   const [test, setTest] = useState({ name: "jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); // we are updated state value based on current state
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1); // we are updated state value based on current state

    // BAD PRATICE
    // test.name = "Arjun";
    // setTest({ name: "Arjun" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onButtonClick={handlePrevious}
            >
              <span>👈</span>Previoius
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onButtonClick={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}

      <Accordian />
    </>
  );
};

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step - {step}: {children}
    </p>
  );
}

function Button({ children, onButtonClick, bgColor, textColor }) {
  return (
    <button
      style={{ background: bgColor, color: textColor }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default App;
