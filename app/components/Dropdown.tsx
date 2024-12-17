import React from "react";

function Dropdown() {
  return (
    <div>
      <button
        className="flex justify-center bg-white text-lightgreen border border-lightgreen font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center w-full h-full xl:w-fit"
        type="button"
      >
        Choose a community
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Dashboard</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 ">Settings</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Earnings</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Sign out</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
