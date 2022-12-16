import { useState } from "react";
import { IoBarbell } from "react-icons/io5";

interface ModalCardProps {
  newExerciseInfo: any,
  setNewExerciseInfo: any,
  handleSubmit: any
}

export default function ModalCard({ newExerciseInfo, setNewExerciseInfo, handleSubmit }: ModalCardProps) {
  const handleChange = (e: any) => {
    setNewExerciseInfo((prevState: any) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
    e.preventDefault();
  }

  return (
    <form className="container flex flex-row justify-between items-center bg-gray-300 p-5 w-[100%] mb-5 last:mb-0">
      <div className="flex basis-[10%] justify-center">
        <IoBarbell className="text-[4rem]" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between pb-2">
          <label className="flex text-sm font-bold pr-2">
            Exercise
          </label>

          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Exercise" value={newExerciseInfo.name} onChange={handleChange}></input>
        </div>

        <div className="flex flex-row items-center justify-between">
          <label className="block text-sm font-bold pr-2">
            Calorie
          </label>

          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="calorie" type="text" placeholder="Calorie" value={newExerciseInfo.calorie} onChange={handleChange}></input>
        </div>
      </div>

      <div className="flex flex-col h-[100%] justify-between">
        <div className="flex flex-row items-center justify-between pb-2">
          <label className="block text-sm font-bold pr-2">
            Weight
          </label>

          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="weight" type="text" placeholder="Weight" value={newExerciseInfo.weight} onChange={handleChange}></input>
        </div>

        <div className="flex flex-row items-center justify-between pb-2">
          <label className="block text-sm font-bold">
            Sets
          </label>
          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="sets" type="text" placeholder="Sets" value={newExerciseInfo.sets} onChange={handleChange}></input>
        </div>

        <div className="flex flex-row items-center justify-between">
          <label className="block text-sm font-bold">
            Reps
          </label>
          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="reps" type="text" placeholder="Reps" value={newExerciseInfo.reps} onChange={handleChange}></input>
        </div>
      </div>

    </form>
  )
}