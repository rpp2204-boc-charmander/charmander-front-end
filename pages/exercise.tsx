import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import ExerciseList from "../components/exercise/ExerciseList"
import CalorieComponent from "../components/exercise/CalorieComponent";
import SearchModal from "../components/exercise/SearchModal";
import EditModal from "../components/exercise/EditModal";
import CompletedModal from '../components/exercise/CompletedModal';
import AddSet from '../components/exercise/AddSet';
import Header from "../components/overview/Header";
import Modal from "../components/overview/Modal";

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
  //Date
  const [ currentDate, setCurrentDate ] = useState(new Date());

  //IDs
  const [ workoutID, setWorkoutID ] = useState(1);

  //Exercises
  const [ exercises, setExercises ] = useState([]);

  //Sets
  const [ editSets, setEditSets ] = useState([]);

  //Modals
  const [ addModalState, setAddModalState ] = useState(false);
  const [ editModalState, setEditModalState ] = useState(false);
  const [ completedModalState, setCompletedModalState ] = useState(false);
  const [ addSetModalState, setAddSetModalState ] = useState(false);

  //Calories
  const [ caloriesBurned, setCaloriesBurned ] = useState(0)

  useEffect(() => {
    getUserExercises()
      .then(({ data }) => {
        setExercises(data);
      })
      .catch(error => {
        console.log(error.stack)
      })
  }, [addSetModalState, editModalState])

  const getUserExercises = () => {
    //get username and log_date from index im assuming
    return axios.get('api/exercise/workout/list', { params: { user_id: 4, log_date: '2022-12-13' } });
  }

  const getExerciseSets = (workout_id: number) => {
    return axios.get('api/exercise/list/sets', { params: { workout_exercise_id: workout_id }})
  }

  const deleteSet = async (set_id: number) => {
    try {
      const result = await axios.delete('api/exercise/sets', { params: { set_id }});
      const newSets = await getExerciseSets(workoutID);

      setEditSets(newSets.data);
    } catch (error :any) {
      console.log(error.stack);
    }
  }

  const deleteExercise = async (workout_exercise_id: number) => {
    try {
      const result = await axios.delete('api/exercise/workout', { params: { workout_exercise_id }});
      const newWorkout = await getUserExercises();

      setExercises(newWorkout.data);
    } catch (error: any) {
      console.log(error.stack);
    }
  };

  const toggleAddModal = () => {
    setAddModalState( prevState => !prevState)
  }

  const toggleEditModal = (workout_id: number) => {
    getExerciseSets(workout_id)
      .then(({ data }) => {
        setEditSets(data);
        setEditModalState( prevState => !prevState)
        setWorkoutID(workout_id)
      })
      .catch( error => {
        console.log(error.stack);
      })
  }

  const toggleCompletedModal = () => {
    setCompletedModalState( prevState => !prevState)
  }

  const toggleAddSetModal = (workout_id: number) => {
    setAddSetModalState( prevState => !prevState)
    setWorkoutID(workout_id)
  }


  const completeExercise = () => {
    alert('Complete Exercise?')
  }

  return (
    <>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} title='Exercise' Icon={MdOutlineFitnessCenter}/>

      { addModalState && <SearchModal toggleAddModal={toggleAddModal}/>}
      { editModalState && <EditModal toggleEditModal={toggleEditModal} deleteSet={deleteSet} workoutID={workoutID} sets={editSets}/>}
      { completedModalState && <CompletedModal toggleCompletedModal={toggleCompletedModal}/>}
      { addSetModalState && <AddSet toggleAddSetModal={toggleAddSetModal} workoutID={workoutID}/>}

      <div className="grid grid-cols-[25%_75%]">
        <CalorieComponent caloriesBurned={caloriesBurned} toggleAddModal={toggleAddModal}/>
        <ExerciseList exercises={exercises}
                      toggleEditModal={toggleEditModal}
                      deleteExercise={deleteExercise}
                      toggleCompletedModal={toggleCompletedModal}
                      toggleAddSetModal={toggleAddSetModal}
                      completeExercise={completeExercise}/>
      </div>
    </>
  )
}