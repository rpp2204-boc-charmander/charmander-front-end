import { useState, useEffect, useRef } from 'react';

import ExerciseList from "../components/exercise/ExerciseList"
import CalorieComponent from "../components/exercise/CalorieComponent";
import SearchModal from "../components/exercise/SearchModal";
import EditModal from "../components/exercise/EditModal";
import Header from "../components/overview/Header";

import styles from '../styles/Exercise.module.css';
import { MdOutlineFitnessCenter } from 'react-icons/md';

import mockData from '../mocks/exercisedata.json';

const getCaloriesBurned = (exercises: any): number => {
  let total = 0;

  exercises.forEach( (exercise: any) => {
    total += exercise.total_calories_burned;
  })

  return total;
}


export default function Exercise() {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ exercises, setExercises ] = useState(mockData.data);
  const [ addModalState, setAddModalState ] = useState(false);
  const [ editModalState, setEditModalState ] = useState(false);
  const [ caloriesBurned, setCaloriesBurned ] = useState(getCaloriesBurned(exercises))

  const toggleAddModal = () => {
    setAddModalState( prevState => !prevState)
  }

  const toggleEditModal = () => {
    setAddModalState( prevState => !prevState)
  }

  const deleteExercise = (id: number) => {
    alert('Are you sure you want to remove this exercise?')

  };

  return (
    <>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} title='Exercise' Icon={MdOutlineFitnessCenter}/>

      { addModalState && <SearchModal toggleAddModal={toggleAddModal}/>}
      { editModalState && <EditModal toggleEditModal={toggleEditModal}/>}

      <div className="grid grid-cols-[25%_75%]">
        <CalorieComponent caloriesBurned={caloriesBurned} toggleAddModal={toggleAddModal}/>
        <ExerciseList exercises={exercises} toggleEditModal={toggleEditModal} deleteExercise={deleteExercise}/>
      </div>
    </>
  )
}