import { calculateOverrideValues } from 'next/dist/server/font-utils'
import Image from 'next/Image'
import { useState } from 'react'
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const FoodCard = ({ food } : any) => {
  const [calories, setCalories] = useState(food.CAL)

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg mb-4">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "90px"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
          <h3 className="w-3/5 font-bold">{food.ITEM}</h3>
          <p className="italic">Estimated calories gained: {calories}</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between"}}>
          <div className="flex flex-row">
          <AiOutlineEdit onClick={(e) => {
            const servingSize : number = prompt("Confirm serving size");
            setCalories(servingSize * food.CAL);
          }}/>
          <BsTrash onClick={(e) => {
            setIsRemoveShowing(true)
            setPendingItem(food);
          }}/>
          </div>
        <button
        className="bg-white hover:bg-green-600 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow"
        onClick={() => {
          setConsumed(!consumed);
        }}
        >
          consumed
        </button>
        </div>
      </div>
    </div>
  )
};

export default FoodCard;