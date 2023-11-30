// EventOptionsSection.js
import React from "react";
import EditIcon from "./EditIcon";
import { TicketIcon } from "./TicketIcon";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const EventOptionsSection = () => (
  <div className="mb-4 bg-gray-50 text-gray-500 border rounded-lg font-medium p-2">
    <div className="flex items-center mb-2 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Tickets </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Free</span>
        <span>
          <EditIcon />
        </span>
      </div>
    </div>
    {/* ... (other similar blocks) */}
    <div className="flex items-center mb-2  border-gray-200 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Required Approval </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <label
          htmlFor="AcceptConditions"
          className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            className="peer sr-only"
          />
          <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
      </div>
    </div>
    {/* othr */}
    <div className="flex items-center mb-2 border-b-2 pb-1">
      <div>
        <TicketIcon />
      </div>
      <div className="pl-3"> Capacity </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Unlimited</span>
        <span>
          <EditIcon />
        </span>
      </div>
    </div>
    {/* visibility */}
    <div className="flex items-center mb-2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="pl-3"> Visibility </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <span className="mr-2">Edit</span>
        <span>
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  </div>
);

export default EventOptionsSection;
