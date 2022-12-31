// @ts-nocheck

import React, { useState, useRef, useEffect } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import EditItemModal from "../components/nutrition/EditItemModal";
import RemoveItemModal from "../components/nutrition/RemoveItemModal";
import Modal from "../components/nutrition/Modal";
import { ChildProps } from "../components/Layout";
import { MdRestaurant } from "react-icons/md";
import axios from "axios";


interface FoodDataType {
  CAL: string;
  FAT: string;
  SFAT: string;
  TFAT: string;
  CHOL: string;
  SALT: string;
  CARB: string;
  FBR: string;
  SGR: string;
  PRO: string;
  ITEM: string;
  CATEGORY: string;
}

const Nutrition = ({
  currentDate,
  setTitle,
  setIcon,
  setShowCalendar,
  setShowReportButtons,
  setLoaded,
  loaded
}: ChildProps) => {
  const [pendingItem, setPendingItem] = useState<FoodDataType>({} as FoodDataType);
  const [isEditShowing, setIsEditShowing] = useState<boolean>(false);
  const [isRemoveShowing, setIsRemoveShowing] = useState<boolean>(false);
  const [allFoods, setAllFoods] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }


  useEffect(() => {
    setTitle("Nutrition");
    setIcon((prevState: any) => MdRestaurant);
    setShowCalendar(true);
    setShowReportButtons(false);
  }, [setTitle, setIcon, setShowCalendar]);

  const [calories, setCalories] = useState<any>(0);

  const removeItem = (logId : number) => {
    axios.delete('http://localhost:4000/nutrition/remove/foodLog', {
      logId: logId
    })
    .then((response) => {
      setLoaded(false);
    })
  };

  useEffect(() => {
    const formattedDate = currentDate.toISOString().slice(0, 10);
    if(!loaded){
      axios.get('http://localhost:4000/nutrition/list/foodLog',{
        params: {
          user: 1,
          date: formattedDate
        }
      })
      .then((response) => {
        let parsed = response.data;
        parsed.map((item) => {
          item.nutrients = JSON.parse(item.nutrients);
        })
        setAllFoods(parsed);
        updateCalories(parsed)
        setLoaded(true);
      })
    }
  });

  const updateCalories = (foods : []) => {
    let calculatedCalories : number = 0;
    foods.map((food : FoodDataType) => {
      let calories =  food.nutrients.CAL || food.nutrients.ENERC_KCAL;
      if(food.consumed){
        calculatedCalories += Number(calories);
      }
    })
    setCalories(prevCalories => calculatedCalories);
  };

  return (
    <>
      {/* <Header currentDate={currentDate} setCurrentDate={setCurrentDate} title='Nutrition' Icon={GiForkKnifeSpoon}/> */}
      {/* <div className="flex justify-between flex-row mb-10 w-auto">
        <div className="flex flex-row">
          <GiForkKnifeSpoon className="text-3xl mr-2"/>
          <div className="text-3xl">Nutrition</div>
        </div>
        <div className="inline-flex">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <p className="flex items-center ml-5 mr-5">Today</p>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 w-auto"> */}
      <div className="flex flex-row w-full h-full">
        <CaloriesWidget handleShowModal={handleShowModal} calories={calories}/>
          {isRemoveShowing ?
          <RemoveItemModal
          removeItem={removeItem}
          pendingItem={pendingItem}
          setIsRemoveShowing={setIsRemoveShowing}
          setCalories={setCalories}
          setAllFoods={setAllFoods}
          allFoods={allFoods}
          calories={calories}
          setLoaded={setLoaded}/>
          : null}
          {isEditShowing ?
          <EditItemModal
          pendingItem={pendingItem}
          setIsEditShowing={setIsEditShowing}
          setCalories={setCalories}
          setAllFoods={setAllFoods}
          allFoods={allFoods}
          calories={calories}/>
        : null}
        <FoodList foodData={allFoods} setPendingItem={setPendingItem} setIsRemoveShowing={setIsRemoveShowing} setIsEditShowing={setIsEditShowing} setLoaded={setLoaded}/>
        {
        showModal ? ( <Modal showModal={handleShowModal} currentDate={currentDate} setLoaded={setLoaded}/>) : ( null )
      }
      </div>
    </>
  );
};

export default Nutrition;
