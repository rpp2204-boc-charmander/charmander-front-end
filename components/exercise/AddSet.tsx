import { useState, useRef } from 'react';
import { MdClose } from "react-icons/md";

import axios from 'axios';

export default function AddSet({ toggleAddSetModal, workoutID }: any) {
  const [ confirm, setConfirm ] = useState(false);


  const weightRef: any = useRef();
  const repsRef: any = useRef();

  const onSubmit = () => {
    let weight_lbs = Number(weightRef.current.value);
    let reps = Number(repsRef.current.value);

    if (weight_lbs && reps) {
      axios.post('api/exercise/create/set', {
          weight_lbs,
          reps,
          workout_exercise_id: workoutID
        })
        .then(() => {
          toggleAddSetModal();
          console.log('Successfully Added Set')
        })
        .catch((error) => {
          toggleAddSetModal();
          console.log(error.stack)
        })
    } else {
      setConfirm(true);
    }

  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleAddSetModal}></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
      flex flex-col items-center w-[40%] h-[35%] rounded-3xl pl-10 pr-10">

         <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Add Set </div>
          <MdClose
            className="text-[2rem] cursor-pointer"
            onClick={toggleAddSetModal}
          />
         </div>

         <div className="bg-gray-500 flex flex-col rounded-2xl h-[50%] w-full justify-around items-center overflow-y-scroll no-scrollbar shadow-well">

          <div className="bg-slate-100 flex flex-col h-5/6 w-11/12 py-3 rounded-2xl shadow-lg justify-evenly items-center relative">

          { confirm && <p className="absolute text-red-500 top-0"> Please Set Reps and Weight </p>}

            <div className="flex w-[290px]">
              <h3 className="font-bold w-20 text-center"> Reps </h3>
              <input className="rounded-lg shadow-md" type="number" ref={repsRef}></input>
            </div>

            <div className="flex">
              <h3 className="font-bold w-20 text-center"> Weight </h3>
              <input className="rounded-lg shadow-md" type="number" ref={weightRef}></input>
              <span className="ml-3"> lbs </span>
            </div>

          </div>

         </div>

        <button className="bg-slate-50 hover:bg-slate-200 rounded-full w-full px-10 py-4 font-bold mt-4 shadow-md" onClick={onSubmit}> Add </button>

      </div>
    </div>
  )
};
