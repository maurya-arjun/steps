import React from "react";

export default function ServiceRating({
  serviceRating,
  children,
  onServiceRating,
}) {
  return (
    <div>
      <label> {children} </label>
      <select
        value={serviceRating}
        onChange={(e) => onServiceRating(Number(e.target.value))}
      >
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
