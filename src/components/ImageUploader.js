import React, { useState } from "react";
import { ImageIcon } from "./ImageIcon"; // Assuming you have an ImageIcon component

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setFileInputKey(Date.now()); // Reset the key to reset the input
  };

  return (
    <div className="relative w-full h-64 border-dashed border-2 border-gray-300 rounded-md overflow-hidden group">
      {/* Image Preview or Placeholder */}
      {selectedImage ? (
        <>
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 right-0 cursor-pointer p-2 bg-slate-800 rounded-md z-10">
            <div
              className="cursor-pointer p-2 bg-red-500 text-white rounded-md"
              onClick={handleRemoveImage}
            >
              Remove
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-amber-400">
          <h1 className="text-gray-800 text-8xl sm:text-4xl text-center font-semibold">
            You are invited
          </h1>
          <div className="absolute bottom-0 right-0 cursor-pointer p-2 bg-slate-800 rounded-md">
            <ImageIcon />
          </div>
        </div>
      )}

      {/* File Input */}
      <input
        key={fileInputKey} // Ensure the key changes to reset the input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default ImageUploader;
