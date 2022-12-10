import React, { useState } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import foodData from "../mocks/foodData.json";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Nutrition = () => {

  return (
    <>
    <div className="flex flex-row mb-10">
    <GiForkKnifeSpoon className="text-3xl mr-5"/>
    <div className="text-3xl">Nutrition</div>
    <p style={{marginLeft: "400px"}}>{`< 10 Dec 2022 >`}</p>
    </div>
    <div className="flex flex-row">
      <CaloriesWidget foodData={foodData}/>
      <FoodList foodData={foodData}/>
    </div>
    </>
  )
}

export default Nutrition;