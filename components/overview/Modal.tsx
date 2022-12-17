import { MouseEventHandler } from "react";
import ModalCard from "./ModalCard";

interface ModalProps {
  children: String,
  open: Boolean,
  onClose: MouseEventHandler
}

export default function Modal(props: ModalProps ) {
  if (!props.open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">

      </div>

      <div className="fixed top-50% left-50% text-black bg-gray-300 p-[50px] z-50 flex flex-col items-center">

        <div className="header">
          <div className="title"> {props.children} </div>
          <div className="cross"></div>
        </div>

        <div className="search">
          <input type="text" className="bg-white w-[50rem] h-[5rem]"></input>
        </div>

        <div className="modalCardContainer">
          <ModalCard />
        </div>

        <div className="buttonContainer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[5rem]" onClick={props.onClose}> Close Modal </button>
        </div>

      </div>
    </>
  )
}