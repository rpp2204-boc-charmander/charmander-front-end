import { useState, useEffect, useRef } from 'react';


import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import axios from 'axios';
import { resolveProjectReferencePath } from 'typescript';

export default function EditModal({ toggleEditModal, workoutID, deleteSet, sets }: any) {
  let setIDs: number[] = [];
  const repRefs: any = useRef([]);
  const weightRefs: any = useRef([]);

  return (
      <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={ () => { toggleEditModal(workoutID) }}></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:bg-slate-500 bg-gray-300 z-50
      flex flex-col items-center lg:w-[40%] sm:w-[95%] h-[60%] rounded-3xl pl-10 pr-10">

        <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Edit Exercise </div>
          <MdClose
            className="text-[2rem] cursor-pointer"
            onClick={ () => { toggleEditModal(workoutID) }}
          />
        </div>

        <div className="bg-gray-500 dark:bg-gray-700 flex flex-col rounded-2xl h-[70%] w-full items-center overflow-y-scroll shadow-well">

          { sets.map( (set: any, i: number) => {

            setIDs.push(set.set_id);

            return (
              <div className="flex flex-col items-center w-10/12 my-4" key={set.set_id}>
                  <h3 className="pb-2 font-bold text-white">Set {i + 1}</h3>
                  <div className="flex bg-slate-200 shadow-lg w-full py-3 justify-evenly items-center rounded-full">
                    <label className="text-black"> Reps: </label>
                    <input type="number"
                           className="w-1/6 rounded-lg shadow-md bg-slate-50 text-black"
                           defaultValue={set.reps}
                           ref={(el) => { repRefs.current[i] = el }}></input>

                    <label className="text-black"> Weight: </label>
                    <input type="number"
                           className="w-1/6 rounded-lg shadow-md bg-slate-50 text-black"
                           defaultValue={set.weight_lbs}
                           ref={(el) => { weightRefs.current[i] = el }}></input>

                    <button className="bg-red-500 hover:bg-red-400 py-2 px-2 rounded-full shadow-lg text-white" onClick={ () => { deleteSet(set.set_id) } } > <MdDeleteOutline /> </button>
                  </div>
              </div>
                );
            })}

        </div>

        <button className="bg-blue-500 hover:bg-blue-400 text-slate-50 w-4/6 rounded-full px-10 py-4 font-bold lg:mb-0 sm:mb-4 mt-4 shadow-lg"
                onClick={ () => { toggleEditModal(workoutID, repRefs.current, weightRefs.current, setIDs ) }}> Confirm Changes </button>

        </div>

    </div>
  )
}

