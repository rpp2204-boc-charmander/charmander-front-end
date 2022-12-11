import { useState, useEffect } from "react";

interface ExerciseAndNutritionCardProps {
  idx: number,
  name: string,
  calorie: number,
  sets?: number,
  reps?: number,
  weight?: number,
  portion?: number,
  completed: boolean,
  exercises: any,
  setExercises: any
}

export default function Card({ name, calorie, sets, reps, weight, portion, completed, exercises, setExercises, idx }: ExerciseAndNutritionCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  let bgColor;
  if (completed) {
    bgColor = "bg-yellow-400";
  } else {
    bgColor = "bg-white";
  }

  const handleClick = (e: any) => {
    let exerciseObj = {
      text: 'blah',
      calorie:400,
      weight: '',
      sets: '',
      reps: '',
      completed: ''
    };

    setExercises((prevState: any) => {
      let items = [...prevState];
      let item = {...items[idx]};
      item.completed = !item.completed;
      items[idx] = item;
      return items;
    })
  }

  return (
    <div onClick={handleClick} className={`${bgColor} flex flex-col text-black mr-[2rem] rounded-3xl h-[11rem] min-w-[18rem]
      justify-center items-center last:mr-[0rem] shadow-xl hover:shadow-2xl cursor-pointer`}
    >
      <div className="text-[2rem] font-bold">
        {name}
      </div>

      <div className="text-[1.5rem]">
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