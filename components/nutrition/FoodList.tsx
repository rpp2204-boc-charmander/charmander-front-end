import React, { useState } from "react";
import FoodCard from "./FoodCard";


const FoodList = ({foodData}) => {
  return (
  <div>
    {
    foodData.map((food) => {
        return <FoodCard key={food.ITEM} food={food} />
      })
    }
  </div>
  )
}

export default FoodList;