import { useRef } from "react";
import { MdClose } from "react-icons/md";

import axios from "axios";

export default function AddSet({ toggleAddSetModal, workoutID }: any) {
  const weightRef: any = useRef();
  const repsRef: any = useRef();

  const onSubmit = () => {
    axios
      .post("api/exercise/create/set", {
        weight_lbs: Number(weightRef.current.value),
        reps: Number(repsRef.current.value),
        workout_exercise_id: workoutID,
      })
      .then(() => {
        toggleAddSetModal();
        console.log("Successfully Added Set");
      })
      .catch((error) => {
        toggleAddSetModal();
        console.log(error.stack);
      });
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={toggleAddSetModal}
      ></div>

      <div
        className="fixed top-[50%] left-[50%] z-50 flex h-[35%] w-[40%] translate-x-[-50%]
      translate-y-[-50%] flex-col items-center rounded-3xl bg-gray-300 pl-10 pr-10 text-black"
      >
        <div className="header flex w-[100%] flex-row items-center justify-between pt-4 pb-4">
          <div className="title text-[2rem] font-bold"> Add Set </div>
          <MdClose
            className="cursor-pointer text-[2rem]"
            onClick={toggleAddSetModal}
          />
        </div>

        <div className="no-scrollbar flex h-[50%] w-full flex-col items-center justify-around overflow-y-scroll rounded-2xl bg-gray-500 shadow-well">
          <div className="flex h-5/6 w-11/12 flex-col items-center justify-evenly rounded-2xl bg-slate-100 py-3 shadow-lg">
            <div className="flex w-[290px]">
              <h3 className="w-20 text-center font-bold"> Reps </h3>
              <input
                className="rounded-lg shadow-md"
                type="number"
                ref={repsRef}
              ></input>
            </div>

            <div className="flex">
              <h3 className="w-20 text-center font-bold"> Weight </h3>
              <input
                className="rounded-lg shadow-md"
                type="number"
                ref={weightRef}
              ></input>
              <span className="ml-3"> lbs </span>
            </div>
          </div>
        </div>

        <button
          className="mt-4 w-full rounded-full bg-slate-50 px-10 py-4 font-bold shadow-md hover:bg-slate-200"
          onClick={onSubmit}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
}
