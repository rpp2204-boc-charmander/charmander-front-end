import FoodCard from "./FoodCard";
import axios from 'axios';

import { useState, useEffect } from "react";

const appId = process.env.EDAMAM_APPLICATION_ID;
const appKey = process.env.EDAMAM_APPLICATION_KEYS;

const Modal = () => {

  const [foodList, setFoodList] = useState([1])
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios({
      method: 'get',
      url:'/search'
    })
    console.log(appId)
  }, [search])


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
          foodList.map(food => {
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