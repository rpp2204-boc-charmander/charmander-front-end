import { useState } from "react";
import { MdOutlineFitnessCenter } from "react-icons/md";

interface ModalCardProps {
  newExerciseInfo: any,
  setNewExerciseInfo: any,
  handleSubmit: any
}

export default function ModalCard({ newExerciseInfo, setNewExerciseInfo, handleSubmit }: ModalCardProps) {
  const [numberOfSets, setNumberOfSets] = useState(1);
  const [multipleGoals, setMultipleGoals] = useState(false);

  const handleChange = (e: any) => {
    setNewExerciseInfo((prevState: any) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
    e.preventDefault();
  }

  const handleSetsSelectClick = (e: any) => {
    setNumberOfSets(parseInt(e.target.value));
  }

  const handleRadioClick = (e: any) => {
    if (e.target.value === "same") {
      setMultipleGoals(false);
      setNumberOfSets(1);
    } else {
      setMultipleGoals(true);
    }
  }

  return (
    <form className="container flex flex-row justify-between items-center bg-gray-300 p-5 w-[100%] mb-5 last:mb-0 h-[30rem]">
      <div className="flex basis-[10%] justify-center">
        <MdOutlineFitnessCenter className="text-[4rem]" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col pb-3">
          <label className="flex text-sm font-bold pr-2 pb-1">
            Exercise
          </label>

          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Exercise" value={newExerciseInfo.name} onChange={handleChange}></input>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-bold pr-2 pb-1">
            Estimated Calorie Burn
          </label>

          <input className="bg-white shadow appearance-none border rounded w-[10rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="calorie" type="text" placeholder="Calorie" value={newExerciseInfo.calorie} onChange={handleChange}></input>
        </div>
      </div>

      <fieldset className="flex flex-row">
        <legend> </legend>
        <div className="pr-2">
          <label className="block text-sm font-bold"> Same Weight
          </label>
          <input onClick={handleRadioClick} type="radio" name="goals" value="same" className="shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-10 bg-gray-400 checked:bg-yellow-400"></input>
        </div>

        <div>
          <label className="block text-sm font-bold"> Different Weights </label>
          <input onClick={handleRadioClick} type="radio" name="goals" value="different" className="shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-10 bg-gray-400 checked:bg-yellow-400"></input>
        </div>
      </fieldset>

      {!multipleGoals && (
        <div>
          <div className="flex flex-col h-[100%] justify-between">
            <div className="flex flex-row items-center justify-between pb-2">
              <label className="block text-sm font-bold pr-2">
                Weight
              </label>

              <input className="bg-white shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="weight" type="text" placeholder="Weight" value={newExerciseInfo.weight} onChange={handleChange}></input>
            </div>

            <div className="flex flex-row items-center justify-between pb-2">
              <label className="block text-sm font-bold">
                Sets
              </label>
              <input className="bg-white shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="sets" type="text" placeholder="Sets" value={newExerciseInfo.sets} onChange={handleChange}></input>
            </div>

            <div className="flex flex-row items-center justify-between">
              <label className="block text-sm font-bold">
                Reps
              </label>
              <input className="bg-white shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="reps" type="text" placeholder="Reps" value={newExerciseInfo.reps} onChange={handleChange}></input>
            </div>
          </div>
        </div>
      )}

      {multipleGoals && (
        <div className="flex flex-col items-center">
          <div>
            <label className="block text-sm font-bold">
              Sets
            </label>
            <select onChange={handleSetsSelectClick} className="bg-white shadow border rounded w-[5rem] py-2 px-3 leading-tight">
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
          </div>

          {[...Array(numberOfSets)].map((set, index) => {
            return (
              <div key={index} className="flex flex-row h-[100%] justify-between">
                <div className="flex flex-row items-center justify-between pb-2">
                  <div className="pr-1 mt-5 flex items-center">
                    Set {index + 1}
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-sm font-bold pr-2"> Weight </label>
                    <input className="bg-white shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="weight" type="text" placeholder="Weight" value={newExerciseInfo.weight} onChange={handleChange}></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-sm font-bold"> Reps </label>
                    <input className="bg-white shadow appearance-none border rounded w-[5rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="reps" type="text" placeholder="Reps" value={newExerciseInfo.reps} onChange={handleChange}></input>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

    </form>
  )
}