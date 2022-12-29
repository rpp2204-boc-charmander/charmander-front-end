import { useState, useEffect } from 'react';
import axios from 'axios';

import ExerciseList from '../components/exercise/ExerciseList';
import CalorieComponent from '../components/exercise/CalorieComponent';
import SearchModal from '../components/exercise/SearchModal';
import EditModal from '../components/exercise/EditModal';
import CompletedModal from '../components/exercise/CompletedModal';
import AddSet from '../components/exercise/AddSet';
import Header from '../components/overview/Header';
import { MdOutlineFitnessCenter } from 'react-icons/md';

/**
   *
  TODO:
  1. Fetch data for default exercise and muscle groups on page load

   */

export default function Exercise({
  user_id,
  date,
  default_exercises,
  muscle_groups,
}): JSX.Element {
  // Date
  const [currentDate, setCurrentDate] = useState(new Date());

  // IDs
  const [workoutID, setWorkoutID] = useState(1);

  // Exercises
  const [exercises, setExercises] = useState([]);

  // Modals
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [completedModalState, setCompletedModalState] = useState(false);
  const [addSetModalState, setAddSetModalState] = useState(false);

  // Calories
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    getUserExercises()
      .then(({ data }) => {
        setExercises(data);
      })
      .catch((error) => {
        console.log(error.stack);
      });
  }, [addSetModalState]);

  const getUserExercises = async () => {
    // get username and log_date from index im assuming
    return await axios.get('api/exercise/workout/list', {
      params: { user_id, log_date: date },
    });
  };

  const deleteSet = (set_id: number): void => {
    axios
      .delete('api/exercise/sets', { params: { set_id } })
      .then(() => {
        console.log('Successfully Deleted Set');
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };

  const deleteExercise = (workout_exercise_id: number): void => {
    axios
      .delete('api/exercise/workout', { params: { workout_exercise_id } })
      .then(() => {
        console.log('Successfully Deleted Workout');
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };

  const toggleAddModal = (): void => {
    setAddModalState((prevState) => !prevState);
  };

  const toggleEditModal = (workout_id: number): void => {
    setEditModalState((prevState) => !prevState);

    if (workout_id !== 0) {
      setWorkoutID(workout_id);
    }
  };

  const toggleCompletedModal = (): void => {
    setCompletedModalState((prevState) => !prevState);
  };

  const toggleAddSetModal = (workout_id: number): void => {
    setAddSetModalState((prevState) => !prevState);

    if (workout_id !== 0) {
      setWorkoutID(workout_id);
    }
  };

  const completeExercise = (): void => {
    alert('Complete Exercise?');
  };

  const getCaloriesBurned = (exercises: []): number => {
    let total = 0;

    exercises.forEach((exercise: { total_calories_burned: number }) => {
      total += exercise.total_calories_burned;
    });

    return total;
  };

  return (
    <>
      <Header
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        title="Exercise"
        Icon={MdOutlineFitnessCenter}
      />

      {addModalState && (
        <SearchModal
          user_id={user_id}
          toggleAddModal={toggleAddModal}
          default_exercises={default_exercises}
          muscle_groups={muscle_groups}
        />
      )}
      {editModalState && (
        <EditModal toggleEditModal={toggleEditModal} workoutID={workoutID} />
      )}
      {completedModalState && (
        <CompletedModal toggleCompletedModal={toggleCompletedModal} />
      )}
      {addSetModalState && (
        <AddSet toggleAddSetModal={toggleAddSetModal} workoutID={workoutID} />
      )}

      <div className="grid grid-cols-[25%_75%]">
        <CalorieComponent
          caloriesBurned={caloriesBurned}
          toggleAddModal={toggleAddModal}
        />
        <ExerciseList
          exercises={exercises}
          toggleEditModal={toggleEditModal}
          deleteExercise={deleteExercise}
          toggleCompletedModal={toggleCompletedModal}
          toggleAddSetModal={toggleAddSetModal}
          completeExercise={completeExercise}
        />
      </div>
    </>
  );
}

interface Exercises {
  exercise_id: number;
  exercise: string;
  muscle_group_id: number;
  muscle_group: string;
}

interface MuscleGroups {
  muscle_group_id: number;
  muscle_group: string;
}

interface GetDefaultExerciseList {
  exercises: Exercises[];
  muscle_groups: MuscleGroups[];
}

export async function getStaticProps(): Promise<any> {
  try {
    const { data } = await axios.get<GetDefaultExerciseList>(
      `${String(process.env.BACKEND_URL)}/exercise/default/list`
    );

    return {
      props: {
        default_exercises: data.exercises,
        muscle_groups: data.muscle_groups,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
