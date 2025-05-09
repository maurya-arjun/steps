import React from "react";

export default function Button({
  children,
  onButtonClick,
  bgColor,
  textColor,
}) {
  return (
    <button
      style={{ background: bgColor, color: textColor }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
