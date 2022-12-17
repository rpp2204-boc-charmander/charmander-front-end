import { useRef } from 'react';
import { MdClose } from "react-icons/md";

import axios from 'axios';

export default function AddSet({ toggleAddSetModal, workoutID }: any) {
  const weightRef: any = useRef();
  const repsRef: any = useRef();

  const onSubmit = () => {
    console.log(workoutID)

    axios.post('api/exercise/create/set', {
        weight_lbs: Number(weightRef.current.value),
        reps: Number(repsRef.current.value),
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

         <div className="bg-gray-500 flex flex-col rounded-2xl h-[50%] w-full justify-around items-center overflow-y-scroll no-scrollbar shadow-[inset_0_2px_5px_0_#404040]">

          <div className="bg-slate-100 flex flex-col h-5/6 rounded-2x w-11/12 py-3 rounded-3xl shadow-lg justify-evenly items-center">
            <div className="flex">
              <h3 className="font-bold w-20 text-center"> Weight </h3>
              <input className="rounded-lg shadow-md" type="number" ref={weightRef}></input>
              <p className="ml-3"> lbs </p>
            </div>

            <div className="flex w-[290px]">
              <h3 className="font-bold w-20 text-center"> Reps </h3>
              <input className="rounded-lg shadow-md" type="number" ref={repsRef}></input>
            </div>
          </div>

          {/* <div className="bg-slate-100 flex rounded-2x w-10/12 py-3 rounded-3xl shadow-md justify-center">
          <h3 className="font-bold mr-3"> Reps </h3>
          <input className="rounded-lg shadow-md" type="number"></input>
          </div> */}

         </div>


        <button className="bg-slate-50 hover:bg-slate-200 rounded-full w-full px-10 py-4 font-bold mt-4 shadow-md" onClick={onSubmit}> Add </button>

      </div>
    </div>
  )
};
