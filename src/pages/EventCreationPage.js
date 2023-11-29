// src/App.js
import React from "react";
import Header from "../components/Header";
import EventCreationSection from "../components/EventCreationSection";
import { PageHeader } from "../components/PageHeader";
function EventCreationPage() {
  return (
    <>
      <PageHeader title="Create Event" />
      <div className="flex flex-col bg-gray-50 px-14 py-8 ml-40 mr-40  mt-10 mb-20  sm:ml-0-mr-0 ">
        {/* Header at the top */}
        <Header />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 bg-white py-4 px-4 border rounded-lg">
          <div className="flex-1 p-4">
            <EventCreationSection />
          </div>
          <div className="flex-1 p-4">
            Your content for the second div goes here
          </div>
          <div className=" flex-col w-auto flex-wrap p-4">
            <button
              className="bg-slate-900 text-white p-2 rounded-md"
              style={{ width: "100%" }}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCreationPage;
