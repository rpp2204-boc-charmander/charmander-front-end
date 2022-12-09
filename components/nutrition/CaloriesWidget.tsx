import React, { useState } from "react";
const CaloriesWidget = () => {
  const [totalCalories, setTotalCalories] = useState(1000);
  const [foodList, setFoodList] = useState(['Big Mac', 'Chicken Breast', 'Egg']);

  const prompter = () => {
    alert('It works..... gov. nor.')
  }

  return (
    <>
    <div className="caloriesWidget">
      <div className="flex items-center justify-center p-2 max-w-sm mx-auto bg-gray-300 rounded-xl shadow-lg space-x-5 w-48">
        <div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl">
            <div className="p-8">
            <div className="text-sm font-medium text-black flex justify-center truncate">calories gained</div>
            <div className="text-sm font-medium text-black flex justify-center">(estimated)</div>
          </div>
          <p className="p-4 text-3xl text-black flex justify-center">{totalCalories}</p>
        <button
        className="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 rounded-full border border-black w-32 h- flex justify-center items-center mb-4 shadow"
        onClick={prompter}
        >
          +
        </button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CaloriesWidget;