import FoodCardModal from "./FoodCardModal";
import axios from 'axios';
import Image from 'next/image';

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
    console.log(JSON.stringify(food.measures));
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
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
      flex flex-col items-center w-[70%] h-[80%] rounded-3xl pl-10 pr-10">
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
                <FoodCardModal key={index} info={food}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Modal;