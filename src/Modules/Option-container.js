import React from "react";

const OptionContainer = ({ label }) => {
  return (
    <div className="option-container">
      <input type="checkbox" />
      <span className="option-label">{label}</span>
    </div>
  );
};

export default OptionContainer;
