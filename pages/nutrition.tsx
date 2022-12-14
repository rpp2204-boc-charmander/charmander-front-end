import React, { useState, useRef } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import EditItemModal from "../components/nutrition/EditItemModal";
import RemoveItemModal from "../components/nutrition/RemoveItemModal";
import foodData from "../mocks/foodData.json";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { getDisplayName } from "next/dist/shared/lib/utils";

const Nutrition = () => {
  const [pendingItem, setPendingItem] = useState('');
  const [isEditShowing, setIsEditShowing] = useState(false);
  const [isRemoveShowing, setIsRemoveShowing] = useState(false);
  const [allFoods, setAllFoods] = useState(foodData);

  const updateCalories = (foods) => {
    let calculatedCalories : number = 0;
    foods.map((food) => {
      calculatedCalories += Number(food.CAL);
    })
    return calculatedCalories;
  }

  const [calories, setCalories] = useState(updateCalories(allFoods));

  return (
    <>
      <div className="flex justify-between flex-row mb-10 w-auto">
        <div className="flex flex-row">
          <GiForkKnifeSpoon className="text-3xl mr-2"/>
          <div className="text-3xl">Nutrition</div>
        </div>
        <div className="inline-flex">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <p className="flex items-center ml-5 mr-5">Today</p>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 w-auto">
        <CaloriesWidget calories={calories}/>
          {isRemoveShowing ?
          <RemoveItemModal
          pendingItem={pendingItem}
          setIsRemoveShowing={setIsRemoveShowing}
          setCalories={setCalories}
          setAllFoods={setAllFoods}
          allFoods={allFoods}
          calories={calories}/>
          : null}
          {isEditShowing ?
          <EditItemModal
          pendingItem={pendingItem}
          setIsEditShowing={setIsEditShowing}
          setCalories={setCalories}
          setAllFoods={setAllFoods}
          allFoods={allFoods}
          calories={calories}/>
        : null}
        <FoodList foodData={allFoods} setPendingItem={setPendingItem} setIsRemoveShowing={setIsRemoveShowing} setIsEditShowing={setIsEditShowing}/>
      </div>
    </>
  )
}

export default Nutrition;