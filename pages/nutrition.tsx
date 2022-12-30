import React, { useState, useRef, useEffect } from "react";
import CaloriesWidget from "../components/nutrition/CaloriesWidget";
import FoodList from "../components/nutrition/FoodList";
import EditItemModal from "../components/nutrition/EditItemModal";
import RemoveItemModal from "../components/nutrition/RemoveItemModal";
import foodData from "../mocks/foodData.json";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { ChildProps } from "../components/Layout";
import { MdRestaurant } from "react-icons/md";

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
}: ChildProps) => {
  const [pendingItem, setPendingItem] = useState<FoodDataType>(
    {} as FoodDataType
  );
  const [isEditShowing, setIsEditShowing] = useState<boolean>(false);
  const [isRemoveShowing, setIsRemoveShowing] = useState<boolean>(false);
  const [allFoods, setAllFoods] = useState<any>(foodData);

  const updateCalories = (foods: []) => {
    let calculatedCalories: number = 0;
    foods.map((food: FoodDataType) => {
      calculatedCalories += Number(food.CAL);
    });
    return calculatedCalories;
  };

  const [calories, setCalories] = useState<any>(updateCalories(allFoods));

  useEffect(() => {
    setTitle("Nutrition");
    setIcon((prevState: any) => MdRestaurant);
    setShowCalendar(true);
  }, [setTitle, setIcon, setShowCalendar]);

  return (
    <>
      <div className="mb-10 flex w-auto flex-row justify-between bg-white">
        <div className="flex flex-row">
          <GiForkKnifeSpoon className="mr-2 text-3xl" />
          <div className="text-3xl">Nutrition</div>
        </div>
        <div className="inline-flex">
          <button className="rounded-l bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400">
            Prev
          </button>
          <p className="ml-5 mr-5 flex items-center">Today</p>
          <button className="rounded-r bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400">
            Next
          </button>
        </div>
      </div>
      <div className="flex w-auto flex-row justify-between p-2">
        <CaloriesWidget calories={calories} />
        {isRemoveShowing ? (
          <RemoveItemModal
            pendingItem={pendingItem}
            setIsRemoveShowing={setIsRemoveShowing}
            setCalories={setCalories}
            setAllFoods={setAllFoods}
            allFoods={allFoods}
            calories={calories}
          />
        ) : null}
        {isEditShowing ? (
          <EditItemModal
            pendingItem={pendingItem}
            setIsEditShowing={setIsEditShowing}
            setCalories={setCalories}
            setAllFoods={setAllFoods}
            allFoods={allFoods}
            calories={calories}
          />
        ) : null}
        <FoodList
          foodData={allFoods}
          setPendingItem={setPendingItem}
          setIsRemoveShowing={setIsRemoveShowing}
          setIsEditShowing={setIsEditShowing}
        />
      </div>
    </>
  );
};

export default Nutrition;
