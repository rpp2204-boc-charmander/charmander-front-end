import styles from "../../styles/Exercise.module.css"

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import { GiMuscleUp } from "react-icons/gi";


export default function ExerciseItem ({ exercise, toggleEditModal, deleteExercise, toggleCompletedModal, toggleAddSetModal, completeExercise } : any) {
  return (
    <div className="h-64 max-h-72 rounded-lg overflow-hidden shadow-lg bg-gray-200 mx-5 mt-8 p-4 flex justify-between relative">
        <AiOutlineDelete size={25} className="absolute top-2 left-2 cursor-pointer" onClick={deleteExercise}/>
        <AiOutlineEdit size={25} className="absolute top-2 left-10 cursor-pointer" onClick={ () => { toggleEditModal(exercise.id) }}/>

      <div className="flex flex-col w-[80%] items-center justify-evenly">

        <h2 className="text-2xl font-bold text-center">{exercise.exercise}</h2>

        <div className="flex w-[80%] justify-between">
          <p className="flex bg-slate-50 shadow-md w-36 h-8 rounded-full justify-evenly items-center font-bold"> <GiMuscleUp /> {exercise.muscle_group}</p>
          <p className="flex bg-slate-50 shadow-md w-72 h-8 rounded-full justify-evenly items-center font-bold"> Estimated Calories Burned: {exercise.est_cals_burned}</p>
        </div>

        <button className="bg-green-500 hover:bg-green-400 shadow-lg rounded-full w-[50%] h-[20%] font-bold text-slate-50"
                onClick={completeExercise}> Complete Workout </button>

      </div>

      <div className="border-gray-300 border-l-2 w-3/6 pl-5 relative flex flex-col justify-between">

          <div className="bg-gray-500 flex flex-col rounded-2xl h-[75%] justify-between overflow-y-scroll no-scrollbar border-2 shadow-[inset_0_2px_8px_0_#404040]">

          {exercise.sets?.map( (exercise: any) => {
            return <button className="bg-slate-50 hover:bg-slate-300 w-[95%] rounded-2xl py-3 text-center shadow-md mx-2 my-2 font-bold"
                           onClick={toggleCompletedModal}
                           > {exercise.reps} Reps | {exercise.weight_lbs} lbs | Actual: {exercise.reps_actual} </button>
          })}

          </div>

        <button className="bg-slate-50 hover:bg-slate-300 px-5 py-2 w-full rounded-full shadow-lg self-center font-bold" onClick={toggleAddSetModal}> Add Set </button>

      </div>
    </div>
  )
};