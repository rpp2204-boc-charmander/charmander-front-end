import React, { useState, useRef } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import EditItemModal from "../components/nutrition/EditItemModal";
import RemoveItemModal from "../components/nutrition/RemoveItemModal";
import foodData from "../mocks/foodData.json";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Modal from '../components/nutrition/Modal';

const Nutrition = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      <>
    <div className="flex flex-row mb-10">
    <GiForkKnifeSpoon className="text-3xl mr-5"/>
    <div className="text-3xl">Nutrition</div>
    <p style={{marginLeft: "400px"}}>{`< 10 Dec 2022 >`}</p>
    </div>
    <div className="flex flex-row">
      <CaloriesWidget handleShowModal={handleShowModal} foodData={foodData}/>
      <FoodList foodData={foodData}/>
    </div>
    </>
      {
        showModal ? ( <Modal />) : ( null )
      }
    </div>
  )
}

export default Nutrition;