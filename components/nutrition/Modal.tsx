import FoodCard from "./FoodCard";
import axios from 'axios';
import Image from 'next/Image';

import { useState, useEffect } from "react";

const appId = process.env.EDAMAM_APPLICATION_ID;
const appKey = process.env.EDAMAM_APPLICATION_KEYS;

const Modal = () => {

  const [foodList, setFoodList] = useState([])
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState([])

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  const handleSelect = (food) => {
    // console.log(food);
    setFoodList(foodList.concat([food]));
    setPreview([]);
    document.getElementById('search-form').value = ""
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
    <div className="border top-1/2 left-1/2 ml-px150 mt-px150">
      <div>
        <h4>Nutrition Search</h4>
        <form>
          <input id="search-form"placeholder="search by name" onChange={(e) => {
            handleSearch(e)
          }}></input>
        </form>
      </div>

      {
        preview.length > 0 ? (
          preview.map((food, index) => {
            return (
              <div key={index} className="border hover:bg-slate-400" onClick={(e) => {
                handleSelect(food);
              }}>
                <div>{food.food.label}</div>
                <Image src={food.food.image} alt='' width={50} height={50} />
                <div>{Math.round(food.food.nutrients.ENERC_KCAL)} calories</div>
              </div>
            )
          })
        ) : (
          null
        )
      }
      <div className="list">
        {
          foodList.map((food, index) => {
            return (
              <FoodCard key={index} info={food}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Modal;