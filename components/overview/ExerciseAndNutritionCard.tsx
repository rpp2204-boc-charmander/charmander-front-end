import { useState, useEffect } from "react";

interface ExerciseAndNutritionCardProps {
  idx: number,
  type: string,
  name: string,
  calorie: number,
  sets?: number,
  reps?: number,
  weight?: number,
  portion?: number,
  completed: boolean,
  setExercises?: any,
  setNutrition?: any
}

export default function Card({ idx, type, name, calorie, sets, reps, weight, portion, completed, setExercises, setNutrition }: ExerciseAndNutritionCardProps) {
  let bgColor;
  if (completed) {
    bgColor = "bg-yellow-300";
  } else {
    bgColor = "bg-white";
  }

  const handleClick = (e: any) => {
    if (type === "exercise") {
      setExercises((prevState: any) => {
        let items = [...prevState];
        let item = {...items[idx]};
        item.completed = !item.completed;
        items[idx] = item;
        return items;
      })
    } else {
      setNutrition((prevState: any) => {
        let items = [...prevState];
        let item = {...items[idx]};
        item.completed = !item.completed;
        items[idx] = item;
        return items;
      })
    }
  }

  return (
    <div onClick={handleClick} className={`${bgColor} flex flex-col text-black mr-[2rem] rounded-3xl h-[11rem] sm:w-[18rem] min-w-[18rem]
      justify-center items-center last:mr-[0rem] shadow-xl hover:shadow-2xl cursor-pointer`}
    >
      <div className="text-[2rem] font-bold">
        {name}
      </div>

      <div className="text-[1.5rem] text-right">
        {calorie} calories
      </div>

      <div className="pt-1">
        {portion && (
          <div className="text-[1rem]">
            {portion} g
          </div>
        )}

        {sets && reps && weight && (
          <div className="text-[1rem]">
            {weight} lbs | {sets} x {reps}
          </div>
        )}
      </div>
    </div>
  )
}