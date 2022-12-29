import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export default function FoodCard({
  food,
  setPendingItem,
  setIsRemoveShowing,
  setIsEditShowing,
}: any) {
  const [calories, setCalories] = useState(food.CAL);
  const [consumed, setConsumed] = useState(false);

  return (
    <div className="mb-4 rounded-xl bg-white p-4 shadow-lg hover:bg-slate-200">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <h3 className="w-3/5 font-bold">{food.ITEM}</h3>
          <p className="italic">Estimated calories gained: {calories}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <div className="flex flex-row">
            <AiOutlineEdit
              onClick={(e) => {
                setIsEditShowing(true);
                setPendingItem(food);
              }}
            />
            <BsTrash
              onClick={(e) => {
                setIsRemoveShowing(true);
                setPendingItem(food);
              }}
            />
          </div>
          <button
            className={
              consumed
                ? "mb-4 flex h-7 w-32 items-center justify-center rounded-full border border-black bg-green-500 py-2 px-4 text-xl text-black shadow hover:bg-green-200"
                : "mb-4 flex h-7 w-32 items-center justify-center rounded-full border border-black bg-white py-2 px-4 text-xl text-black shadow hover:bg-green-500"
            }
            onClick={() => {
              setConsumed(!consumed);
            }}
          >
            consumed
          </button>
        </div>
      </div>
    </div>
  );
}
