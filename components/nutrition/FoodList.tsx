import React, { useState } from "react";
import FoodCard from "./FoodCard";


const FoodList = ({foodData, setPendingItem, setIsRemoveShowing, setIsEditShowing}) => {
  return (
  <div className="w-3/4">
    {
    foodData.map((food) => {
        return <FoodCard key={food.ITEM} food={food} setPendingItem={setPendingItem} setIsRemoveShowing={setIsRemoveShowing} setIsEditShowing={setIsEditShowing}/>
      })
    }
  </div>
  )
}

export default FoodList;