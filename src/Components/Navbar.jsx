import React from "react";
import Switcher from "../Darktheme/Switcher";

function Navbar() {
  return (
    <div className="sticky top-0 dark:bg-slate-900 dark:text-slate-50">
      <div className="mb-14 w-full dark:bg-gray-700 dark:text-slate-50  sticky top-0 bg-gray-100 shadow-lg">
        <div className="py-4 flex relative container mx-auto flex-row items-center justify-between">
          <h1 className=" md:text-2xl text-lg font-bold">Where in the World</h1>
          <div className="flex flex-row items-center space-x-4">
            <Switcher />
            <h1>Dark/white mode</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
