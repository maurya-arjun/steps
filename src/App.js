import React, { useState } from "react";

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

          <p className="message">
            Step - {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
