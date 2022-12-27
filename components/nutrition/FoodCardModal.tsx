import Image from 'next/image'
import { useState } from 'react'
import { measureMemory } from 'vm';

interface FoodCardModalProps {
  info: Object
}

const FoodCardModal = ({ info }) => {

  // info.unit = "Gram";
  // info.grams = 1;
  let selectedIndex = 0;
  info.measures.forEach((measure, index) => {
    if (measure.label === "Gram") {
      selectedIndex = index;
    }
  })

  const [amount, setAmount] = useState(0)
  const [unit, setUnit] = useState({
    label: "Gram",
    grams: 1
  })

  const handleAmountChange = (e) => {
    // console.log(e.target.value)
    setAmount(Number(e.target.value));
    info.amount = Number(e.target.value);
  }

  const handleUnitChange = (e) => {
    // console.log(e.target.value)
    let split = e.target.value.split(",")
    let label = split[0];
    let split2 = split[1].split(" ")
    // console.log(split2);
    let grams = split2[1]
    setUnit({
      label: label,
      grams: grams
    })
    info.unit = label;
    info.grams = grams;
  }
  console.log('ello')

  return (
    <div className="flex flex-row items-center border space-x-8">
      <Image src={info.food.image} alt='' width={50} height={50}/>
      <div className="flex flex-col">
        <div>{info.food.label}</div>
        <div>{Math.round(info.food.nutrients.ENERC_KCAL)} Kcal/100g</div>
      </div>
      {
        typeof(amount) === 'number' && amount > 0 ? (
          <div>Calculated calories: {Math.round(amount*unit.grams*info.food.nutrients.ENERC_KCAL/100)} Kcal</div>
        ) : (
          <div>Please enter amount</div>
        )
      }
      <div className="flex flex-col">
        <form>
          <label>Custom Amount</label>
          <input placeholder="enter number in grams" onChange={(e) => {
            handleAmountChange(e)
          }}></input>
        </form>
        <form>
          <label>Unit</label>
          <select defaultValue="Gram, 1 grams" onChange={(e) => {
            handleUnitChange(e)
          }}>
            {
              info.measures.map((unit: any, index: number) => {
                if (index === selectedIndex) {
                  return (
                    <option key={index} selected>{unit.label}, {Math.round(unit.weight)} grams</option>
                  )
                } else {
                  return(
                    <option key={index}>{unit.label}, {Math.round(unit.weight)} grams</option>
                  )

                }
              })
            }
          </select>
        </form>
      </div>
    </div>
  )
}

export default FoodCardModal;