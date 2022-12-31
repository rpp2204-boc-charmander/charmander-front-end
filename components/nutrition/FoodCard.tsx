// @ts-nocheck
import { calculateOverrideValues } from 'next/dist/server/font-utils'
import { useState } from 'react'
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Image from 'next/image';
import axios from "axios";

interface FoodListProps {
  food: object,
  setPendingItem: Function,
  setIsRemoveShowing: Function,
  setIsEditShowing: Function,
  setLoaded: Function
}

export default function FoodCard ({ food, setPendingItem, setIsRemoveShowing, setIsEditShowing , setLoaded} : FoodListProps) {
  const [consumed, setConsumed] = useState(food.consumed);
  const [calories, setCalories] = useState(0);
  console.log(food.food_image.slice(0, 4));



  return (
    <div className="p-4 m-10 bg-white rounded-xl shadow-lg mb-4 hover:bg-slate-200 text-black">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "90px"}}>
        <div className="flex flex-row">
          <div style={{display: "flex", alignItems: "center"}}>
          <Image src={food.food_image.slice(0, 4) != "http" ?
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" :
          food.food_image} alt="" width={100} height={100} style={{height: "100px"}}></Image>
          </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between", paddingLeft: "30px"}}>
          <h3 className="w-3/5 text-2xl font-bold">{food.food_name}</h3>
          <p className="italic">Estimated calories gained: {food.nutrients.CAL ? food.nutrients.CAL : food.nutrients.ENERC_KCAL}</p>
        </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between"}}>
          <div className="flex flex-row">
          <AiOutlineEdit className="h-6 w-6" onClick={(e) => {
            setIsEditShowing(true);
            setPendingItem(food);
          }}/>
          <BsTrash className="h-6 w-6" onClick={(e) => {
            setIsRemoveShowing(true)
            setPendingItem(food);
          }}/>
          </div>
        {/* <button
        className={
          consumed ? "bg-green-500 hover:bg-green-200 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow" :
          "bg-white hover:bg-green-500 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow"
        }

        >
          consumed
        </button> */}

        <button className={consumed ?
        "bg-green-500 text-slate-50 font-bold h-12 w-52 rounded-3xl  self-center"
        : "bg-white outline outline-black outline-10 text-black-50 font-bold h-12 w-52 rounded-3xl hover:bg-green-400 self-center"
      }
        onClick={() => {
          console.log(food);
            axios.put('http://localhost:4000/nutrition/update/foodLog', {
              logId: food.id,
              consumed: !food.consumed,
              portion: food.portion,
              measurement: food.measurement
            })
            setLoaded(false);
            setConsumed(!consumed);
      }}> Consumed </button>
      </div>
      </div>
    </div>
  );
}
