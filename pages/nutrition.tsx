import React, { useState } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import Modal from '../components/nutrition/Modal';

const Nutrition = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <CaloriesWidget />
      {
        showModal ? ( <Modal />) : ( null )
      }
    </div>
  )
}

export default Nutrition;