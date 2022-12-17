import styles from "../../styles/Exercise.module.css"

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ExerciseItem ({ exercise, toggleEditModal, deleteExercise } : any) {
  return (
    <div className="h-52 max-h-60 rounded-lg overflow-hidden shadow-lg bg-gray-200 mx-5 mt-8 p-4 flex justify-between">
      <div className="flex flex-col border-2">
        <h2 className="text-xl font-bold">{exercise.name}</h2>
        <p> Muscle Group: {exercise.muscle_group}</p>
        <p className=""> Estimated Calories Burned: {exercise.total_calories_burned}</p>
      </div>

      <div className="border-gray-300 border-l-2 w-3/6 pl-5 relative flex flex-col justify-around">
        <AiOutlineDelete size={25} className="absolute top-0 right-0 cursor-pointer" onClick={deleteExercise}/>
        <AiOutlineEdit size={25} className="absolute top-0 right-9 cursor-pointer" onClick={toggleEditModal}/>

        <div>
          <h3 className="text-lg font-bold">Goals:</h3>

          {exercise.sets.map( (set:any) => {
            return <p key={set.id}>{set.reps} reps</p>
          })}

        </div>

        <button className="bg-green-500 text-slate-50 font-bold h-12 w-52 rounded-3xl hover:bg-green-400 self-center" onClick={deleteExercise}> Completed </button>
      </div>
    </div>
  )
};