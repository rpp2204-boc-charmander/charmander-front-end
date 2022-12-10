import ExerciseList from "../components/exercise/ExerciseList"
import CalorieComponent from "../components/exercise/CalorieComponent";
import SearchModal from "../components/exercise/SearchModal";
import EditModal from "../components/exercise/EditModal";
import CurrDate from "../components/exercise/CurrDate";

import { useState } from 'react';
import styles from '../styles/Exercise.module.css';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import mockData from '../mocks/exercisedata.json';

const getTotalCaloriesBurned = (exercises: any): number => {
  let total = 0;

  exercises.forEach( (exercise: any) => {
    total += exercise.total_calories_burned;
  })

  return total;
}

export default function Exercise() {
  const [ exercises, setExercises ] = useState(mockData.data);
  const [ addModalState, setAddModalState ] = useState(false);
  const [ editModalState, setEditModalState ] = useState(false);

  const total_calories_burned = getTotalCaloriesBurned( exercises );

  const toggleAddModal = () => {
    if ( addModalState ) {
      return setAddModalState(false);
    }
    return setAddModalState(true);
  }

  const toggleEditModal = () => {
    if ( editModalState ) {
      return setEditModalState(false);
    }
    return setEditModalState(true);
  }

  return (
    <>
      <header className={styles.header}>
        <MdOutlineFitnessCenter size="6rem"/>
        <h1 className="text-7xl font-bold ml-3"> Exercise </h1>
        {/* <CurrDate /> */}
      </header>
      { addModalState && <SearchModal toggleAddModal={toggleAddModal}/>}
      { editModalState && <EditModal toggleEditModal={toggleEditModal}/>}
      <div className={styles.content}>
        <CalorieComponent total={total_calories_burned} toggleAddModal={toggleAddModal}/>
        <ExerciseList exercises={exercises} toggleEditModal={toggleEditModal}/>
      </div>
    </>
  )
}