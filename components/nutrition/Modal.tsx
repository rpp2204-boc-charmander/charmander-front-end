import FoodCardModal from "./FoodCardModal";
import axios from 'axios';
import Image from 'next/image';

import { useState, useEffect } from "react";

const appId = process.env.EDAMAM_APPLICATION_ID;
const appKey = process.env.EDAMAM_APPLICATION_KEYS;

const Modal = ({ showModal }) => {

  const [foodList, setFoodList] = useState([])
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState([]);
  const [parameters, setParameters] = useState([]);

  const handleParameterChange = () => {

  }

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  const handleSelect = (food) => {
    axios.get('http://localhost:4000/nutrition/list/foods',{
      params: food
      })
      .then((response) => {
        console.log('response: ', response);
      })

    setFoodList(foodList.concat([food]));
    setPreview([]);
    document.getElementById('search-form').value = ""
  }

  const handleAdd = () => {
    console.log(foodList)
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
            <input id="search-form"placeholder="search by name" className="shadow-lg w-5/6 h-10 rounded-lg mt-3" onChange={(e) => {
              handleSearch(e)
            }}></input>
          </form>
        </div>
        <div className="z-10 bg-slate-600">
          {
            preview.length > 0 ? (
              preview.map((food: any, index) => {
                return (
                  <div key={index} className=" hover:bg-slate-400 flex flex-row w-96 space-x-8" onClick={(e) => {
                    handleSelect(food);
                  }}>
                    <Image src={food.food.image} alt='' width={50} height={50} />
                    <div>{food.food.label}</div>
                    <div>{Math.round(food.food.nutrients.ENERC_KCAL)} calories</div>
                  </div>
                )
              })
            ) : (
              null
            )
          }

        </div>
        <div className="overflow-y-auto w-full">
          {
            foodList.map((food, index) => {
              return (
                <FoodCardModal key={index} info={food} />
              )
            })
          }
        </div>
        <div className="space-x-12 mt-5 mb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            handleAdd();
            showModal();
          }}>Add</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            handleAdd();
            showModal();
          }}>Add as completed</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;