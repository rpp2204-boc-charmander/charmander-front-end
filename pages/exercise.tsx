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
import IncompleteModal from '../components/exercise/IncompleteModal';

import styles from '../styles/Exercise.module.css';
import { MdOutlineFitnessCenter } from 'react-icons/md';

import mockData from '../mocks/exercisedata.json';

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

  //Confirmations
  const [ workoutConfirm, setWorkoutConfirm ] = useState(false);

  useEffect(() => {
    getUserExercises()
      .then(({ data }) => {
        setExercises(data.result);
        setCaloriesBurned(data.total_cals_burned)
      })
      .catch(error => {
        console.log(error.stack)
      })
  }, [addSetModalState, editModalState, completedModalState])

  //GET FUNCTIONS

  const getUserExercises = () => {
    //get username and log_date from index im assuming
    return axios.get('api/exercise/workout/list', { params: { user_id: 7, log_date: '2022-12-13' } });
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

      setExercises(newWorkout.result);
    } catch (error: any) {
      console.log(error.stack);
    }
  };

  //COMPLETE FUNCTIONS

  const completeSet = (actual_reps: number, set_id: number) => {
    axios.put('api/exercise/set', null, { params: { set_id, actual_reps, user_id: 7 }})
      .then( () => {
        toggleCompletedModal(set_id);
      })
      .catch( error => {
        console.log(error.stack);
      })
   }

  const completeExercise = async (workout_exercise_id: number) => {
  //get sets for exercise
  try {
    const { data: sets } = await getExerciseSets(workout_exercise_id);

    if (!sets.length) {
      console.log('No Sets ):')
      setWorkoutConfirm(true);
      return;
    }

    for (var i = 0; i < sets.length; i++) {
      if (!sets[i].reps_actual) {
        setWorkoutConfirm(true);
        return;
      }
    }

    await axios.put('api/exercise/workout', null, { params: { workout_exercise_id, user_id: 7, log_date: '2022-12-13' }});
    const { data: newWorkout } = await getUserExercises();

    setExercises(newWorkout.result);
    setCaloriesBurned(newWorkout.total_cals_burned);
    setWorkoutConfirm(false)
  } catch (error: any) {
    console.log(error.stack);
  }
}

  //TOGGLE MODALS

  const toggleAddModal = () => {
    setAddModalState( prevState => !prevState)
  }

  const toggleEditModal = (workout_id: number, repsRefs: [], weightsRefs: [], setIDs: []) => {
    //if repsRefs and weightRefs are both defined, call put request

    if (repsRefs && weightsRefs) {
      setIDs.sort();

      let reps = repsRefs.map( (rep: any) => {
        return Number(rep?.value);
      })

      let weights = weightsRefs.map( (weight: any) => {
        return Number(weight?.value);
      })

      axios.put('api/exercise/workout/sets', {
        reps,
        weights,
        setIDs
      })
      .then(({ data }) => {
        console.log('Successfully Updated Sets')
        setEditModalState( prevState => !prevState)
      })
      .catch( error => {
        console.log(error.stack)
      })

    } else {

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
      { workoutConfirm && <IncompleteModal setWorkoutConfirm={setWorkoutConfirm}/>}

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