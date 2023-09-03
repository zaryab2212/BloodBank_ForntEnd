import React from "react";

const InputType = ({
  name,
  value,
  onChange,
  inputType,
  labelText,
  labelfor,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelfor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
