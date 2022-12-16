import styles from "../../styles/Exercise.module.css"

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import { GiBiceps } from "react-icons/gi";


export default function ExerciseItem ({ exercise, toggleEditModal, deleteExercise, toggleCompletedModal } : any) {
  return (
    <div className="h-60 max-h-72 rounded-lg overflow-hidden shadow-lg bg-gray-200 mx-5 mt-8 p-4 flex justify-between relative">
        <AiOutlineDelete size={25} className="absolute top-2 left-2 cursor-pointer" onClick={deleteExercise}/>
        <AiOutlineEdit size={25} className="absolute top-2 left-10 cursor-pointer" onClick={toggleEditModal}/>

      <div className="flex flex-col w-[80%] items-center justify-evenly">

        <h2 className="text-2xl font-bold text-center">{exercise.exercise}</h2>

        <div className="flex w-[80%] justify-between">
          <p className="flex bg-slate-50 shadow-md w-36 h-8 rounded-full justify-evenly items-center font-bold"> <GiBiceps /> {exercise.muscle_group}</p>
          <p className="flex bg-slate-50 shadow-md w-72 h-8 rounded-full justify-evenly items-center font-bold"> Estimated Calories Burned: {exercise.est_cals_burned}</p>
        </div>

        <button className="bg-green-500 hover:bg-green-400 shadow-lg rounded-full w-[50%] h-[20%] font-bold text-slate-50"> Complete Workout </button>

      </div>

      <div className="border-gray-300 border-l-2 w-3/6 pl-5 relative flex flex-col justify-between">

        <div className="flex flex-col h-full justify-between overflow-y-scroll no-scrollbar">

          {exercise.sets?.map( (exercise: any) => {
            return <div key={exercise.set_id} className="flex">
                      <p
                      className="bg-slate-50 w-60 rounded-2xl py-2 text-center shadow-md my-2"> {exercise.reps} Reps | {exercise.weight_lbs} lbs </p>

                      <p className="bg-slate-50 hover:bg-green-200 rounded-2xl w-4/6 text-center shadow-md py-2 my-2 ml-2 cursor-pointer"
                         onClick={toggleCompletedModal}> Actual: 0 </p>
                   </div>
          })}

        </div>


      </div>
    </div>
  )
};