// SKInput.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SKInput(props) {
  const {
    placeholder,
    type,
    width,
    className,
    onChange,
    value,
    shown,
    multiple,
    ref,
    name
  } = props;

  // Check if the type is "date" and render the DatePicker component
  if (type === "date") {
    return (
      <DatePicker
        placeholderText={placeholder}
        className={className}
        style={{ width: width }}
        onChange={(date) => onChange(date)}
        isClearable
        showYearDropdown
        dateFormat="MM/dd/yyyy"
        selected={value}
      />
    );
  }

  // Render the standard input for other types
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      style={{ width: width }}
      onChange={onChange}
      hidden={shown}
      value={value}
      multiple={multiple}
      ref={ref}
      name={name}
    />
  );
}
