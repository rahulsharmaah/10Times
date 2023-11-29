import React, { useState } from "react";
import { ImageIcon } from "./ImageIcon";

const IconAndCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setValidationError(""); 
  };
  return (
    <div className="flex items-center mb-4">
      <div className="flex-1">
        <ImageIcon />
      </div>
      <div className="flex">
        <label
          for="CreateUnder"
          class="block overflow-hidden border border-gray-200 px-1 py-0  border-none rounded-md outline-none "
        >
          <span class=" px-3 py-1 text-gray-500 font-medium ">
            Create Under{" "}
          </span>

          <select
            id="CreateUnder"
            className="px-2 py-0 text-slate-900 font-medium border border-none rounded-md outline-none w-full mb-2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="PersonalCalender">Personal Calendar</option>
            <option value="BusinessCalender">Business Calendar</option>
            <option value="SocialCalender">Social Events</option>
          </select>
        </label>
        {/* Validation message */}
        {validationError && (
          <div className="text-red-500 mt-2">{validationError}</div>
        )}
      </div>
    </div>
  );
};

export default IconAndCategory;
