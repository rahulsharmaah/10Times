// IconAndCategory.js
import React, { useState } from "react";
import { ImageIcon } from "./ImageIcon";

const IconAndCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setValidationError(""); // Clear validation error when the selection changes
  };

  // const handleSubmit = () => {
  //   if (!selectedCategory) {
  //     setValidationError("Please select a category");
  //     return;
  //   }
  //   console.log("Selected Category:", selectedCategory);
  // };

  return (
    <div className="flex items-center mb-4">
      <div className="flex-1">
        <ImageIcon />
      </div>
      <div className="block px-4">
        <div className=" px-3 py-1 text-gray-500 font-medium">Create Under</div>
        <select
          className="px-2 py-0   text-slate-900 font-medium border border-none rounded-md outline-none w-full"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {/* Options for event categories */}
          <option value="">Select an option</option>
          <option value="PersonalCalender">Personal Calender</option>
          <option value="BusinessCalender">Business Calender</option>
          <option value="SocialCalender">Social Events</option>
        </select>
        {/* Validation message */}
        {validationError && (
          <div className="text-red-500 mt-2">{validationError}</div>
        )}
      </div>
    </div>
  );
};

export default IconAndCategory;
