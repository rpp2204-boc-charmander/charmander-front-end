import { useState, useEffect } from 'react';

import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import axios from 'axios';

export default function EditModal({ toggleEditModal, workoutID }: any) {
  const [ workoutSets, setWorkoutSets ] = useState([]);

  useEffect(() => {
    getWorkoutSets(workoutID)
  }, []);


  const getWorkoutSets = (workout_id: number) => {
    axios.get('api/exercise/list/sets', { params: { workout_exercise_id: workout_id }})
      .then(({ data }) => {
        setWorkoutSets(data);
      })
      .catch(error => {
        console.log(error.stack);
      })
  }

  return  <div>
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleEditModal}></div>

  <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
  flex flex-col items-center w-[40%] h-[60%] rounded-3xl pl-10 pr-10">

     <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
      <div className="title text-[2rem] font-bold"> Edit Workout </div>
      <MdClose
        className="text-[2rem] cursor-pointer"
        onClick={toggleEditModal}
      />
     </div>

     <div className="bg-gray-500 flex flex-col rounded-2xl h-[70%] w-full items-center overflow-y-scroll shadow-well">

      { workoutSets.map( (set: any, index: number) => {
        return (
          <div className="flex flex-col items-center w-10/12 my-4">
              <h3 className="pb-2 font-bold text-white">Set {index + 1}</h3>
              <div className="flex bg-slate-200 shadow-lg w-full py-3 justify-evenly items-center rounded-full" key={set.set_id}>
                <label> Reps: </label> <input type="number" className="w-1/6 rounded-lg shadow-md" defaultValue={set.reps}></input>
                <label> Weight: </label> <input type="number" className="w-1/6 rounded-lg shadow-md" defaultValue={set.weight_lbs}></input>
                <button className="bg-red-500 hover:bg-red-400 py-2 px-2 rounded-full shadow-lg text-white" > <MdDeleteOutline /> </button>
              </div>
          </div>
          )
      })}

     </div>

    <button className="bg-blue-500 hover:bg-blue-400 text-slate-50 w-4/6 rounded-full px-10 py-4 font-bold mt-4 shadow-lg"> Confirm Changes </button>

  </div>
</div>
}