import React from "react";

export default function OutPut({ bill, tip }) {
  return (
    <div>
      <h2>
        You Pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}
