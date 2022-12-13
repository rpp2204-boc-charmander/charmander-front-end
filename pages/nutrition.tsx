import React, { useState } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import foodData from "../mocks/foodData.json";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { getDisplayName } from "next/dist/shared/lib/utils";

const Nutrition = () => {
  const [pendingItem, setPendingItem] = useState('');
  const [isRemoveShowing, setIsRemoveShowing] = useState(false);
  const [allFoods, setAllFoods] = useState(foodData);

const RemoveItemModal = ({pendingItem}) => {
  const modalStyling = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: "1000"
  }

  return (
    <>
      <div style={modalStyling} className="shadow-2xl">
        {/* <GrClose className="absolute top-2 right-2"/> */}
        <p>{`Are you sure you want to remove ${pendingItem.ITEM}?`}</p>
        <div className="p-10 flex flex-row justify-center">
          <button className="mr-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          onClick={() => {
            let newFoodsList = allFoods;
            for(let item in newFoodsList){
              if(newFoodsList[item].ITEM === pendingItem.ITEM){
                delete newFoodsList[item];
              }
            }
            setAllFoods(newFoodsList);
            setIsRemoveShowing(false);
          }}>
            Confirm
          </button>
          <button className="ml-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={() => setIsRemoveShowing(false)}>
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

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
          <p className="flex items-center">Today</p>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 w-auto">
        <CaloriesWidget foodData={allFoods}/>
          {isRemoveShowing ? <RemoveItemModal pendingItem={pendingItem}/> : null}
        <FoodList foodData={allFoods} setPendingItem={setPendingItem} setIsRemoveShowing={setIsRemoveShowing}/>
      </div>
    </>
  )
}

export default Nutrition;