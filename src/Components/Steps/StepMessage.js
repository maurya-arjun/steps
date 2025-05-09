import React from "react";

export default function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step - {step}: {children}
    </p>
  );
}
