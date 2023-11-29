// IconAndCategory.js
import React from 'react';

const IconAndCategory = () => (
  <div className="flex items-center mb-4">
    <div className="w-1/6"> { /* Icon */ } </div>
    <div className="w-1/3"> Create Under </div>
    <select className="w-1/2 p-2 border rounded-md">
      {/* Options for event categories */}
    </select>
  </div>
);

export default IconAndCategory;
