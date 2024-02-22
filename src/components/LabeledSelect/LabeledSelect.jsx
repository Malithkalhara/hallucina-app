import React from "react";

export const LabeledSelect = ({ label , options}) => {
  return (
    <div className="d-flex justify-content-between gap-4">
      <label>{label}</label>
      <select className="w-100">
        {options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
};
