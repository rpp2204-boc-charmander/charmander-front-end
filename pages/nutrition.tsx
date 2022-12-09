import React, { useState } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import Modal from '../components/nutrition/Modal';

const Nutrition = () => {

  return (
    <CaloriesWidget />
    <div>
      <Modal />
    </div>
  )
}

export default Nutrition;