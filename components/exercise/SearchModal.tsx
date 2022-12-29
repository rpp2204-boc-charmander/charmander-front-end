import { MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import SelectExercises from "./SelectExercises";
import MuscleGroups from "./MuscleGroups";
import axios from "axios";
// import getDefaultExercises from './libs/getDefaultExercises';

export default function SearchModal({
  toggleAddModal,
  default_exercises,
  muscle_groups,
  user_id,
}: any): JSX.Element {
  const [customExercises, setCustomExercises] = useState([]);
  const [showDefault, setShowDefault] = useState(true);
  const [showCustom, setShowCustom] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCustomExercises = async () => {
      try {
        const { data } = await axios.get(
          `${String(
            process.env.BACKEND_URL
          )}/exercise/custom/list?user_id=${user_id}`
        );

        setCustomExercises(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    getCustomExercises();
  }, []);

  const all_exercises = [...default_exercises, ...customExercises];

  const filtered_exercises = all_exercises.filter((exercise) =>
    exercise.exercise.toLowerCase().includes(query)
  );

  const filtered_custom_exercises = customExercises.filter((exercise) =>
    exercise.exercise.toLowerCase().includes(query)
  );

  return (
    <div>
      <div
        className="fixed top-[50%] left-[50%] z-50 flex h-[80%] w-[70%] translate-x-[-50%]
            translate-y-[-50%] flex-col items-center rounded-3xl bg-gray-400  pl-10 pr-10 text-black"
      >
        <div className="header flex w-[100%] flex-row items-center justify-between pt-4 pb-4">
          <div className="title text-[2rem] font-bold"> Exercise Search </div>
          <MdClose
            className="cursor-pointer text-[2rem]"
            onClick={toggleAddModal}
          />
        </div>

        <div className="search flex w-[100%] flex-row pb-6 ">
          <input
            className="focus:shadow-outline h-[4rem] w-full rounded bg-white py-2 px-3 text-xl leading-tight shadow focus:outline-none"
            id="search"
            type="text"
            placeholder="Seach by name or body part"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-row content-center space-x-4">
          <div
            className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            onClick={() => {
              setShowDefault(true);
              setShowCustom(false);
            }}
          >
            All Exercises
          </div>
          <div
            className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            onClick={() => {
              setShowDefault(false);
              setShowCustom(true);
            }}
          >
            Custom Exercises
          </div>
        </div>
        <MuscleGroups
          muscle_groups={muscle_groups}
          clearSearchOnClick={(e) => setQuery("")}
        />
        {showDefault && (
          <SelectExercises exercises={filtered_exercises} query={query} />
        )}
        {showCustom && (
          <SelectExercises
            exercises={filtered_custom_exercises}
            query={query}
          />
        )}

        <div className="buttonContainer flex w-[50%] justify-between p-5">
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Add Exercise
          </button>
        </div>
      </div>
    </div>
  );
}
