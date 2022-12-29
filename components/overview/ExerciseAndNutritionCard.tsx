import { useState, useEffect } from "react";

interface ExerciseAndNutritionCardProps {
  idx: number;
  type: string;
  name: string;
  calorie: number;
  sets?: number;
  reps?: number;
  weight?: number;
  portion?: number;
  completed: boolean;
  setExercises?: any;
  setNutrition?: any;
}

export default function Card({
  idx,
  type,
  name,
  calorie,
  sets,
  reps,
  weight,
  portion,
  completed,
  setExercises,
  setNutrition,
}: ExerciseAndNutritionCardProps) {
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
        let item = { ...items[idx] };
        item.completed = !item.completed;
        items[idx] = item;
        return items;
      });
    } else {
      setNutrition((prevState: any) => {
        let items = [...prevState];
        let item = { ...items[idx] };
        item.completed = !item.completed;
        items[idx] = item;
        return items;
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${bgColor} mr-[2rem] flex h-[16vh] w-[50vw] cursor-pointer flex-col items-center justify-center rounded-3xl
      text-center text-black shadow-xl last:mr-[0rem] hover:shadow-2xl lg:h-[11rem] lg:w-[18rem]`}
    >
      <div className="text-base font-bold lg:pb-6 lg:text-[2rem]">{name}</div>

      <div className="text-right text-base lg:text-[1.5rem]">
        {calorie} calories
      </div>

      <div className="pt-1">
        {portion && <div className="text-[1rem]">{portion} g</div>}

        {sets && reps && weight && (
          <div className="text-[1rem]">
            {weight} lbs | {sets} x {reps}
          </div>
        )}
      </div>
    </div>
  );
}
