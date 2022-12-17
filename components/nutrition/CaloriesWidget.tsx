import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
const CaloriesWidget = ({ handleShowModal, foodData }) => {
  let calculatedCalories : number = 0;
  foodData.map((food) => {
    calculatedCalories += Number(food.CAL);
  })
  const [totalCalories, setTotalCalories] = useState(calculatedCalories);
=======
const CaloriesWidget = ({calories}) => {
>>>>>>> 2321af3 (Moved remove item modal and created edit item modal)
=======

interface CaloriesProp {
calories: number
}

const CaloriesWidget = ({calories} : CaloriesProp) => {
>>>>>>> f3bcf0b (Typescript refactor, removing no longer updates calories widget)

  const prompter = () => {
    alert('Loading food search......')
  }

  return (
    <>
    <div className="caloriesWidget">
      <div className="flex items-center justify-center p-2 max-w-sm mx-auto bg-gray-300 rounded-xl shadow-lg space-x-5 w-48">
        <div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl">
            <div className="p-8">
            <div className="text-sm font-medium text-black flex justify-center truncate">calories gained</div>
            <div className="italic text-sm font-medium text-black flex justify-center">(estimated)</div>
          </div>
          <p className="p-4 text-3xl text-black flex justify-center">{calories}</p>
        <button
        className="bg-white hover:bg-green-700 text-black font-bold py-2 px-4 rounded-full border border-black w-32 h- flex justify-center items-center mb-4 shadow"
        onClick={() => {
          handleShowModal()
        }}
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