import { calculateOverrideValues } from 'next/dist/server/font-utils'
import { useState } from 'react'
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

interface FoodListProps {
  food: object,
  setPendingItem: Function,
  setIsRemoveShowing: Function,
  setIsEditShowing: Function
}

export default function FoodCard ({ food, setPendingItem, setIsRemoveShowing, setIsEditShowing } : FoodListProps) {
  const [calories, setCalories] = useState(food.nutrients.CAL);
  const [consumed, setConsumed] = useState(food.consumed);

  return (
    <div className="h-52 max-h-60 rounded-lg overflow-hidden shadow-lg bg-gray-200 mx-5 mt-8 p-4 flex justify-between">
      <div className="flex flex-col border-2">
        <h2 className="text-xl font-bold">{food.food_name}</h2>
        {/* <p> Muscle Group: {exercise.muscle_group}</p> */}
        <p className=""> Estimated Calories: {food.nutrients.CAL}</p>
      </div>

      <div className="border-gray-300 border-l-2 w-3/6 pl-5 relative flex flex-col justify-around">
        <AiOutlineDelete size={25} className="absolute top-0 right-0 cursor-pointer" onClick={setIsRemoveShowing}/>
        <AiOutlineEdit size={25} className="absolute top-0 right-9 cursor-pointer" onClick={setIsEditShowing}/>

        <div>
          <h3 className="text-lg font-bold">Goals:</h3>

          {/* {exercise.sets.map( (set:any) => {
            return <p key={set.id}>{set.reps} reps</p>
          })} */}

        </div>

        <button className={consumed ?
        "bg-green-500 text-slate-50 font-bold h-12 w-52 rounded-3xl  self-center"
        : "bg-white text-black-50 font-bold h-12 w-52 rounded-3xl hover:bg-green-400 self-center"
        }> Consumed </button>
      </div>
    </div>
  )

  // return (
  //   <div className="p-4 bg-white rounded-xl shadow-lg mb-4 hover:bg-slate-200">
  //     <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "90px"}}>
  //     <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
  //         <h3 className="w-3/5 font-bold">{food.food_name}</h3>
  //         <p className="italic">Estimated calories gained: {food.nutrients.CAL}</p>
  //       </div>
  //       <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between"}}>
  //         <div className="flex flex-row">
  //         <AiOutlineEdit onClick={(e) => {
  //           setIsEditShowing(true);
  //           setPendingItem(food);
  //         }}/>
  //         <BsTrash onClick={(e) => {
  //           setIsRemoveShowing(true)
  //           setPendingItem(food);
  //         }}/>
  //         </div>
  //       <button
  //       className={
  //         consumed ? "bg-green-500 hover:bg-green-200 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow" :
  //         "bg-white hover:bg-green-500 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow"
  //       }
  //       onClick={() => {
  //         setConsumed(!consumed);
  //       }}
  //       >
  //         consumed
  //       </button>
  //       </div>
  //     </div>
  //   </div>
  // )
};