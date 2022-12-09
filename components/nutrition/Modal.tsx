import FoodCard from "./FoodCard";
import axios from 'axios';
import Image from 'next/Image';

import { useState, useEffect } from "react";

const appId = process.env.EDAMAM_APPLICATION_ID;
const appKey = process.env.EDAMAM_APPLICATION_KEYS;

const Modal = () => {

  const [foodList, setFoodList] = useState([1])
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState([])

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search !== '') {
      axios({
        method: 'get',
        url:'/api/search',
        params: {
          ingr: search
        }
      }).then((data) => {
        setPreview(data.data)
      })

    }
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
      </div>
      {
        preview.length > 0 ? (
          preview.map(food => {
            return (
              <div>
                <div>{food.food.label}</div>
                <Image src={food.food.image} alt='' width={50} height={500} />
                <div>{food.food.nutrients.ENERC_KCAL} calories</div>
              </div>
            )
          })
        ) : (
          null
        )
      }
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