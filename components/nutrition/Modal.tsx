import FoodCard from "./FoodCard";
import { useState } from "react"

const Modal = () => {

  const [foodList, setFoodList] = useState([])
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  return (
    <div className="">
      <h4>Nutrition Search</h4>
      <div className="searchbar">
        <form>
          <input placeholder="search by name" onChange={(e) => {
            handleSearch(e)
          }}></input>
        </form>
        <div className="results"></div>
      </div>
      <div className="list">
        {
          foodList.forEach(food => {
            return (
              <FoodCard />
            )
          })
        }
      </div>

    </div>
  )
}

export default Modal;