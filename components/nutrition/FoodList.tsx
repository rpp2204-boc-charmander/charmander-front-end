import React, { useState } from "react";
import FoodCard from "./FoodCard";

interface foodDataType {
  CAL: string,
  FAT: string,
  SFAT: string,
  TFAT: string,
  CHOL: string,
  SALT: string,
  CARB: string,
  FBR: string,
  SGR: string,
  PRO: string,
  ITEM: string,
  CATEGORY: string
}

<<<<<<< HEAD
const FoodList = ({foodData}) => {
=======
interface FoodListProps {
  foodData: foodDataType[],
  setPendingItem: Function,
  setIsRemoveShowing: Function,
  setIsEditShowing: Function
}

const FoodList = ({foodData, setPendingItem, setIsRemoveShowing, setIsEditShowing}: FoodListProps) => {
>>>>>>> f3bcf0b (Typescript refactor, removing no longer updates calories widget)
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