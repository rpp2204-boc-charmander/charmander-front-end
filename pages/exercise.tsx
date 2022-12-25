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
  const [ setID, setSetID ] = useState(1);

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
  }, [addSetModalState, editModalState, completedModalState])

  //GET FUNCTIONS

  const getUserExercises = () => {
    //get username and log_date from index im assuming
    return axios.get('api/exercise/workout/list', { params: { user_id: 4, log_date: '2022-12-13' } });
  }

  const getExerciseSets = (workout_id: number) => {
    return axios.get('api/exercise/list/sets', { params: { workout_exercise_id: workout_id }})
  }

  //DELETE FUNCTIONS

  const deleteSet = async (set_id: number) => {
    try {
      await axios.delete('api/exercise/sets', { params: { set_id }});
      const { data: newSets } = await getExerciseSets(workoutID);

      setEditSets(newSets);
    } catch (error :any) {
      console.log(error.stack);
    }
  }

  const deleteExercise = async (workout_exercise_id: number) => {
    try {
      await axios.delete('api/exercise/workout', { params: { workout_exercise_id }});
      const { data: newWorkout } = await getUserExercises();

      setExercises(newWorkout);
    } catch (error: any) {
      console.log(error.stack);
    }
  };

  //COMPLETE FUNCTIONS

  const completeSet = (actual_reps: number, set_id: number) => {
    axios.put('api/exercise/set', null, { params: { set_id, actual_reps }})
      .then( () => {
        toggleCompletedModal(set_id);
      })
      .catch( error => {
        console.log(error.stack);
      })
   }

  //TOGGLE MODALS

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

  const toggleCompletedModal = (set_id: number) => {
    setCompletedModalState( prevState => !prevState)
    setSetID(set_id);
  }

  const toggleAddSetModal = (workout_id: number) => {
    setAddSetModalState( prevState => !prevState)
    setWorkoutID(workout_id)
  }

  return (
    <>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} title='Exercise' Icon={MdOutlineFitnessCenter}/>

      { addModalState && <SearchModal toggleAddModal={toggleAddModal}/>}
      { editModalState && <EditModal toggleEditModal={toggleEditModal} deleteSet={deleteSet} workoutID={workoutID} sets={editSets}/>}
      { completedModalState && <CompletedModal toggleCompletedModal={toggleCompletedModal} completeSet={completeSet} setID={setID}/>}
      { addSetModalState && <AddSet toggleAddSetModal={toggleAddSetModal} workoutID={workoutID}/>}

      <div className="grid grid-cols-[25%_75%]">
        <CalorieComponent caloriesBurned={caloriesBurned} toggleAddModal={toggleAddModal}/>
        <ExerciseList exercises={exercises}
                      toggleEditModal={toggleEditModal}
                      deleteExercise={deleteExercise}
                      toggleCompletedModal={toggleCompletedModal}
                      toggleAddSetModal={toggleAddSetModal}
                      getExerciseSets={getExerciseSets}
                      getUserExercises={getUserExercises}
                      setExercises={setExercises}/>
      </div>
    </>
  )
}