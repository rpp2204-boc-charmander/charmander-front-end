import { MdClose } from 'react-icons/md';
import React, { useState } from 'react';
// import getDefaultExercises from './libs/getDefaultExercises';

export default function SearchModal({
  toggleAddModal,
  default_exercises,
  muscle_groups,
}: any): JSX.Element {
  // const [defaultExercises, setDefaultExercises] = useState([]);
  // const [muscleGroups, setMscleGroups] = useState([]);

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={toggleAddModal}
      ></div>

      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
            flex flex-col items-center w-[70%] h-[80%] rounded-3xl pl-10 pr-10"
      >
        <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Exercise Search </div>
          <MdClose
            className="text-[2rem] cursor-pointer"
            onClick={toggleAddModal}
          />
        </div>

        <div className="search w-[100%] flex flex-row pb-6">
          <input
            className="bg-white shadow rounded w-full h-[4rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-xl"
            id="search"
            type="text"
            placeholder="Seach by name or body part"
          ></input>
        </div>

        <div className="bg-gray-500 flex flex-col rounded-2xl h-[70%] w-full items-center overflow-y-scroll shadow-well">
          {' '}
        </div>

        <div className="buttonContainer flex w-[50%] justify-between p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {' '}
            Add Exercise{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
