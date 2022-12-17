import React, {useState} from "react";

const EditItemModal = ({pendingItem, setAllFoods, setCalories, setIsEditShowing, allFoods, calories}) => {
  const [serving, setServing] = useState(1);

  const modalStyling = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: "1000"
  }

  return (
    <>
      <div style={modalStyling} className="shadow-2xl">
        {/* <GrClose className="absolute top-2 right-2"/> */}
        <p>{`How many servings of ${pendingItem.ITEM} will you be consuming?`}</p>
        <input type="text" className="outline black" value={serving} onChange={(e) => {
          setServing(prevServing => e.target.value);
        }}/>
        <div className="p-10 flex flex-row justify-center">
          <button className="mr-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          onClick={() => {
            setIsEditShowing(false);
            setServing(serving);
            setCalories(prevCalories => calories - (pendingItem.CAL - pendingItem.CAL * serving));
          }}>
            Confirm
          </button>
          <button className="ml-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={() => setIsEditShowing(false)}>
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default EditItemModal;