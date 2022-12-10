import { prependListener } from "process";
import { useState, MouseEventHandler } from "react";
import { MdClose } from "react-icons/md";
import ModalCard from "./ModalCard";

interface ModalProps {
  open: Boolean,
  setIsOpen: any,
  onClose: MouseEventHandler,
  currrentExercises?: any,
  setCurrentExercises?: any
}

export default function Modal( {open, onClose, setIsOpen, currrentExercises, setCurrentExercises}: ModalProps ) {
  const [cardInfo, setCardInfo] = useState({
    name: '',
    weight: 0,
    sets: 0,
    reps: 0
  });

  if (!open) return null;

  const handleAddExercise = () => {
    let exerciseObj = {
      text: cardInfo.name,
      calorie: 100
    }

    setCurrentExercises(prevState => prevState.unshift(exerciseObj));
    setIsOpen(false);
  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
      flex flex-col items-center w-[70%] h-[80%] rounded-3xl pl-10 pr-10"
      >
        <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Exercise Search </div>
          <MdClose className="text-[2rem] cursor-pointer" onClick={onClose} />
        </div>

        <div className="search w-[100%] flex flex-row pb-6">
          <input className="bg-white shadow rounded w-full h-[4rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-xl" id="search" type="text" placeholder="Seach by name or body part"></input>
        </div>

        <div className="modalCardContainer w-[100%] bg-gray-500 flex flex-col p-5 overflow-hidden overflow-y-scroll scrollbar-hide border">
          <ModalCard cardInfo={cardInfo} setCardInfo={setCardInfo} />
        </div>

        <div className="buttonContainer flex w-[50%] justify-between p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddExercise}> Add Exercise </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}> Mark All Completed </button>
        </div>

      </div>
    </div>
  )
}