import React, { useState } from "react";
import FoodCard from "./FoodCard";


const FoodList = ({foodData, setPendingItem, setIsRemoveShowing}) => {
  return (
  <div className="w-3/4">
    {
    foodData.map((food) => {
        return <FoodCard key={food.ITEM} food={food} setPendingItem={setPendingItem} setIsRemoveShowing={setIsRemoveShowing}/>
      })
    }
  </div>
  )
}

export default FoodList;