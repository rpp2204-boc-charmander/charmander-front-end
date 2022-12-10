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

export default FoodCard;