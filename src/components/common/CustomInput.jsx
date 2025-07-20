import React from "react";

const CustomInput = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-md border border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none"
      />
    </div>
  );
};

export default CustomInput;
