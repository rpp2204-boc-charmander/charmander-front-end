import { prependListener } from "process";
import { useState, MouseEventHandler } from "react";
import { MdClose } from "react-icons/md";
import ModalCard from "./ModalCard";

interface ModalProps {
  open: Boolean,
  setIsOpen: any,
  cards?: any,
  setExercises?: any,
  setNutrition?: any
}

export default function Modal({ open, setIsOpen, cards, setExercises }: ModalProps ) {
  const [newExerciseInfo, setNewExerciseInfo] = useState({
    name: '',
    calorie: '',
    weight:'',
    sets: '',
    reps: '',
    completed: false
  });

  if (!open) return null;

  const handleSubmit = () => {
    console.log(newExerciseInfo);
  }

  const handleClose = () => {
    setNewExerciseInfo((prevState: any) => ({
      name: '',
      calorie: '',
      weight:'',
      sets: '',
      reps: '',
      completed: false
    }))
  }

  const handleAddExercise = () => {
    let exerciseObj = {
      text: newExerciseInfo.name,
      calorie: parseInt(newExerciseInfo.calorie),
      weight: parseInt(newExerciseInfo.weight),
      sets: newExerciseInfo.sets,
      reps: newExerciseInfo.reps,
      completed: newExerciseInfo.completed
    };

    setExercises((prevState: any) => {
      let currentState = [exerciseObj, ...prevState];
      return currentState;
    })

    setIsOpen(false);
    handleSubmit();
    handleClose();
  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
      flex flex-col items-center w-[70%] h-[80%] rounded-3xl pl-10 pr-10"
      >
        <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Exercise Search </div>
          <MdClose
            className="text-[2rem] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="search w-[100%] flex flex-row pb-6">
          <input className="bg-white shadow rounded w-full h-[4rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-xl" id="search" type="text" placeholder="Seach by name or body part"></input>
        </div>

        <div className="modalCardContainer w-[100%] bg-gray-500 flex flex-col p-5 overflow-hidden overflow-y-scroll scrollbar-hide border">
          <ModalCard
            newExerciseInfo={newExerciseInfo}
            setNewExerciseInfo={setNewExerciseInfo}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="buttonContainer flex w-[50%] justify-between p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddExercise}> Add Exercise </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsOpen(false)}> Add and Mark As Completed </button>
        </div>

      </div>
    </div>
  )
}