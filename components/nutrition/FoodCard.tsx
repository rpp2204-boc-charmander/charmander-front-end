import { calculateOverrideValues } from 'next/dist/server/font-utils'
import Image from 'next/Image'
import { useState } from 'react'

const FoodCard = ({ info }) => {

  const [amount, setAmount] = useState(0)

  const handleAmountChange = (e) => {
    // console.log(e.target.value)
    setAmount(Number(e.target.value));
  }

  return (
    <div className="flex-col items-center border">
      <Image src={info.food.image} alt='' width={50} height={50}/>
      <div>{info.food.label}</div>
      <div>{Math.round(info.food.nutrients.ENERC_KCAL)} Kcal/100g</div>
      {
        typeof(amount) === 'number' && amount > 0 ? (
          <div>Calculated calories: {Math.round(amount*info.food.nutrients.ENERC_KCAL/100)} Kcal</div>
        ) : (
          <div>Please enter amount</div>
        )
      }
      <form>
        <label>Amount</label>
        <input placeholder="enter number in grams" onChange={(e) => {
          handleAmountChange(e)
        }}></input>
        <label>Custom amount</label>
        <input placeholder="value"></input>
      </form>
    </div>
  )
}

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg mb-4">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "90px"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}>
          <h3 className="font-bold">{food.ITEM}</h3>
          <p className="italic">Estimated calories gained: {calories}</p>
        </div>
        {/* <div style={{height: "80px", width: "2px", backgroundColor: "black"}}></div> */}
        <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between"}}>
          <div className="flex flex-row">
          <AiOutlineEdit onClick={(e) => {
            const servingSize : number = prompt("Confirm serving size");
            setCalories(servingSize * food.CAL);
          }}/>
          <BsTrash onClick={(e) => {
            prompt(`Are you sure you want to remove ${food.ITEM}`)
          }}/>
          </div>
        <button
        className="bg-white hover:bg-green-700 text-black text-xl py-2 px-4 rounded-full border border-black w-32 h-7 flex justify-center items-center mb-4 shadow"
        onClick={(e) => {
          console.log("color: ", e.target.style.backgroundColor)
          if(e.target.style.backgroundColor = "white"){
            e.target.style.backgroundColor = "green";
          } else {
            e.target.style.backgroundColor = "white";
          }
        }}
        >
          consumed
        </button>
        </div>
      </div>
    </div>
  )
};