import React from "react";

const RadioButton = ({ labelText, option1, option2, onChange }) => {
  return (
    <div>
      <label htmlFor="radio" className="form-label">
        {labelText}
      </label>
      <div class="wrapper">
        <input
          onChange={onChange}
          type="radio"
          name="select"
          id="option-1"
          value="judge"
        />
        <input
          onChange={onChange}
          type="radio"
          name="select"
          id="option-2"
          value="lawyer"
        />
        <label for="option-1" class="option option-1">
          <div class="dot"></div>
          <span>{option1}</span>
        </label>
        <label for="option-2" class="option option-2">
          <div class="dot"></div>
          <span>{option2} </span>
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
