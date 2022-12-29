import { useState, useEffect } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import axios from "axios";

export default function EditModal({ toggleEditModal, workoutID }: any) {
  const [workoutSets, setWorkoutSets] = useState([]);

  useEffect(() => {
    getWorkoutSets(workoutID);
  }, []);

  const getWorkoutSets = (workout_id: number) => {
    axios
      .get("api/exercise/list/sets", {
        params: { workout_exercise_id: workout_id },
      })
      .then(({ data }) => {
        setWorkoutSets(data);
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={toggleEditModal}
      ></div>

      <div
        className="fixed top-[50%] left-[50%] z-50 flex h-[60%] w-[40%] translate-x-[-50%]
  translate-y-[-50%] flex-col items-center rounded-3xl bg-gray-300 pl-10 pr-10 text-black"
      >
        <div className="header flex w-[100%] flex-row items-center justify-between pt-4 pb-4">
          <div className="title text-[2rem] font-bold"> Edit Workout </div>
          <MdClose
            className="cursor-pointer text-[2rem]"
            onClick={toggleEditModal}
          />
        </div>

        <div className="flex h-[70%] w-full flex-col items-center overflow-y-scroll rounded-2xl bg-gray-500 shadow-well">
          {workoutSets.map((set: any, index: number) => {
            return (
              <div className="my-4 flex w-10/12 flex-col items-center">
                <h3 className="pb-2 font-bold text-white">Set {index + 1}</h3>
                <div
                  className="flex w-full items-center justify-evenly rounded-full bg-slate-200 py-3 shadow-lg"
                  key={set.set_id}
                >
                  <label> Reps: </label>{" "}
                  <input
                    type="number"
                    className="w-1/6 rounded-lg shadow-md"
                    defaultValue={set.reps}
                  ></input>
                  <label> Weight: </label>{" "}
                  <input
                    type="number"
                    className="w-1/6 rounded-lg shadow-md"
                    defaultValue={set.weight_lbs}
                  ></input>
                  <button className="rounded-full bg-red-500 py-2 px-2 text-white shadow-lg hover:bg-red-400">
                    {" "}
                    <MdDeleteOutline />{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-4 w-4/6 rounded-full bg-blue-500 px-10 py-4 font-bold text-slate-50 shadow-lg hover:bg-blue-400">
          {" "}
          Confirm Changes{" "}
        </button>
      </div>
    </div>
  );
}
