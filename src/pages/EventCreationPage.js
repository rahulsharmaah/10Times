import React, { useState } from "react";
import Header from "../components/Header";
import EventCreationSection from "../components/EventCreationSection";
import { PageHeader } from "../components/PageHeader";
import ImageUploader from "../components/ImageUploader";
import ColorAndTypefaceSelector from "../components/ColorAndTypefaceSelector";
import ThemeSelector from "../components/ThemeSelector";
import { Footer } from "../components/Footer";

function EventCreationPage() {
  const [theme, setTheme] = useState(null);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const containerClasses = `flex flex-col bg-gray-50 px-4 py-4 sm:px-14 sm:py-8 ml-0 mr-0 mt-6 sm:mt-10 sm:mb-20 ${theme}`;

  return (
    <>
      <PageHeader title="Create Event" />
      <div className={containerClasses}>
        {/* Header at the top */}
        <Header />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 bg-white py-4 px-4 border rounded-lg">
          <div className="flex-1 p-4">
            <EventCreationSection />
          </div>
          <div className="flex-1 p-4">
            <ImageUploader />
            <ThemeSelector onThemeChange={handleThemeChange} />
            <ColorAndTypefaceSelector />
          </div>
          <div className="flex-col w-full p-1">
            <button className="bg-slate-900 text-white p-3 rounded-md w-full">
              Create Event
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventCreationPage;
