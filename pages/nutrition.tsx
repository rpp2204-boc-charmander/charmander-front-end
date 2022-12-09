import React, { useState } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import Modal from '../components/nutrition/Modal';

const Nutrition = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      <CaloriesWidget handleShowModal={handleShowModal}/>
      {
        showModal ? ( <Modal />) : ( null )
      }
    </div>
  )
}

export default Nutrition;