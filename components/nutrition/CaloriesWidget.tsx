import React, { useState } from "react";

interface CaloriesProp {
  calories: number;
}

const CaloriesWidget = ({ calories }: CaloriesProp) => {
  const prompter = () => {
    alert("Loading food search......");
  };

  return (
    <>
      <div className="caloriesWidget">
        <div className="mx-auto flex w-48 max-w-sm items-center justify-center space-x-5 rounded-xl bg-gray-300 p-2 shadow-lg">
          <div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-white">
              <div className="p-8">
                <div className="flex justify-center truncate text-sm font-medium text-black">
                  calories gained
                </div>
                <div className="flex justify-center text-sm font-medium italic text-black">
                  (estimated)
                </div>
              </div>
              <p className="flex justify-center p-4 text-3xl text-black">
                {calories}
              </p>
              <button
                className="mb-4 flex h-7 w-32 items-center justify-center rounded-full border border-black bg-white py-2 px-4 text-3xl text-black shadow hover:bg-green-700"
                onClick={prompter}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaloriesWidget;
