import { useState } from "react";
import { IoBarbell } from "react-icons/io5";

interface ModalCardProps {
  cardInfo: any,
  setCardInfo: any
}

export default function ModalCard( {cardInfo, setCardInfo}: ModalCardProps ) {

  const handleChange = (e: any) => {
    e.preventDefault();
    setCardInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form className="container flex justify-between items-center bg-gray-300 p-5 w-[100%] mb-5 last:mb-0">

      {/* <div className="image bg-white h-[8rem] w-[8rem] shadow rounded flex items-center justify-center"> Image Here </div> */}
      <IoBarbell className="text-[4rem]" />

      <div className="flex flex-row items-center">
        <label className="block text-sm font-bold pr-2">
          Exercise
        </label>
        <input className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Exercise" value={cardInfo.name} onChange={handleChange}></input>
      </div>

      <div className="flex flex-col h-[100%] justify-between">
        <div className="flex flex-row items-center justify-between">
          <label className="block text-sm font-bold pr-2">
            Weight
          </label>
          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="text" placeholder="Weight"></input>
        </div>

        <div className="flex flex-row items-center justify-between">
          <label className="block text-sm font-bold">
            Sets
          </label>
          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="sets" type="text" placeholder="Sets"></input>
        </div>

        <div className="flex flex-row items-center justify-between">
          <label className="block text-sm font-bold">
            Reps
          </label>
          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="reps" type="text" placeholder="Reps"></input>
        </div>
      </div>

    </form>
  )
}