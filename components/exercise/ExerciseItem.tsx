import styles from "../../styles/Exercise.module.css"

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ExerciseItem ({ exercise, toggleEditModal } : any) {
  return (
    <div onClick={toggleEditModal} className="max-h-60 rounded-lg overflow-hidden shadow-lg bg-gray-200 mx-5 mt-4 p-4 flex justify-between cursor-pointer">
      <div>
        <h2 className="text-xl font-bold">{exercise.name}</h2>
        <p> Muscle Group: {exercise.muscle_group}</p>
        <p> Estimated Calories Burned: {exercise.total_calories_burned}</p>
      </div>
      <div className="border-gray-300 border-l-2 w-3/6 pl-5">
        {/* <AiOutlineEdit />
        <AiOutlineDelete /> */}
        <h3 className="text-lg font-bold">Goals:</h3>
        {exercise.sets.map( (set:any) => {
          return <p key={set.id}>{set.reps} reps</p>
        })}
      </div>
    </div>
  )
};