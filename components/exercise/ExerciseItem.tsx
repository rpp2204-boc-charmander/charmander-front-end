import styles from "../../styles/Exercise.module.css";

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import { GiMuscleUp } from "react-icons/gi";

export default function ExerciseItem({
  exercise,
  toggleEditModal,
  deleteExercise,
  toggleCompletedModal,
  toggleAddSetModal,
  completeExercise,
}: any) {
  return (
    <div className="x-5 mt-8 flex h-[35.3%] flex-col rounded-lg bg-gray-200 shadow-lg">
      <header className="flex items-center justify-between rounded-t-lg bg-gray-400 font-bold text-white">
        <div className="flex w-[45%] items-center justify-around py-3">
          <h1 className="w-full pl-5 text-left text-2xl">
            {exercise.exercise}
          </h1>
          <p className="font-bold">{exercise.muscle_group}</p>
        </div>

        <div className="mr-3 flex">
          <AiOutlineEdit
            size={25}
            className="cursor-pointer"
            onClick={() => {
              toggleEditModal(exercise.id);
            }}
          />
          <AiOutlineDelete
            size={25}
            className="ml-2 cursor-pointer"
            onClick={deleteExercise}
          />
        </div>
      </header>

      <section className="grid h-[250px] grid-cols-[25%_40%_35%]">
        <img
          className="aspect-square w-[225px] place-self-center rounded-lg bg-gray-300 shadow-md"
          alt="exercise-image"
          src={exercise.photo_url}
        ></img>

        <div className="h-[250px] p-2">
          <div className="no-scrollbar flex h-full flex-col overflow-y-scroll rounded-2xl border-2 bg-gray-500 shadow-[inset_0_2px_8px_0_#404040]">
            {exercise.sets?.map((exercise: any) => {
              return (
                <button
                  className="mx-2 my-2 w-[95%] rounded-2xl bg-slate-50 py-3 text-center font-bold shadow-md hover:bg-slate-300"
                  onClick={toggleCompletedModal}
                  key={exercise.set_id}
                >
                  {" "}
                  {exercise.reps} Reps | {exercise.weight_lbs} lbs | Actual:{" "}
                  {exercise.reps_actual}{" "}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex h-[250px] flex-col items-center justify-around px-2">
          <p className="justify-self-center font-bold">
            {" "}
            Estimated Calories Burned: {exercise.est_cals_burned}
          </p>

          <div className="flex h-[45%] w-full flex-col justify-evenly">
            <button
              className="w-full self-center rounded-full bg-slate-50 px-5 py-2 font-bold shadow-lg hover:bg-slate-300"
              onClick={() => {
                toggleAddSetModal(exercise.id);
              }}
            >
              {" "}
              Add Set{" "}
            </button>

            <button
              className="h-[40%] w-full rounded-full bg-blue-500 font-bold text-slate-50 shadow-lg hover:bg-blue-400"
              onClick={completeExercise}
            >
              {" "}
              Complete Workout{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
