import { useState, useEffect } from "react";
import axios from "axios";

import ExerciseList from "../components/exercise/ExerciseList";
import CalorieComponent from "../components/exercise/CalorieComponent";
import SearchModal from "../components/exercise/SearchModal";
import EditModal from "../components/exercise/EditModal";
import CompletedModal from "../components/exercise/CompletedModal";
import AddSet from "../components/exercise/AddSet";
import { ChildProps } from "../components/Layout";

import { MdOutlineFitnessCenter } from "react-icons/md";

const getCaloriesBurned = (exercises: any): number => {
  let total = 0;

  exercises.forEach((exercise: any) => {
    total += exercise.total_calories_burned;
  });

  return total;
};

export default function Exercise({
  query_date,
  currentDate,
  setTitle,
  setIcon,
  setShowCalendar,
  user_id,
  default_exercises,
  muscle_groups,
}): JSX.Element {
  // IDs
  const [workoutID, setWorkoutID] = useState(1);

  // Exercises
  const [exercises, setExercises] = useState([]);

  // Modals
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [completedModalState, setCompletedModalState] = useState(false);
  const [addSetModalState, setAddSetModalState] = useState(false);
  const [fetchExercises, setfetchExercises] = useState(false);

  // Calories
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  console.log("query_date: ", query_date);

  useEffect(() => {
    setTitle("Exercise");
    setIcon((prevState: any) => MdOutlineFitnessCenter);
    setShowCalendar(true);
  }, [setTitle, setIcon, setShowCalendar]);

  useEffect(() => {
    const getUserExercises = async (): Promise<any> => {
      try {
        const { data } = await axios.get("api/exercise/workout/list", {
          params: { user_id, log_date: query_date },
        });
        setExercises(data);
      } catch (error) {
        console.log(error);
      }
    };

    void getUserExercises();
  }, [addSetModalState, fetchExercises, currentDate, user_id]);

  const deleteSet = (set_id: number): void => {
    axios
      .delete("api/exercise/sets", { params: { set_id } })
      .then(() => {
        console.log("Successfully Deleted Set");
      })
      .catch((error) => {
        console.log(error.stack);
      });
  };

  const deleteExercise = (workout_exercise_id: number): void => {
    axios
      .delete("api/exercise/workout", { params: { workout_exercise_id } })
      .then(() => {
        console.log("Successfully Deleted Workout");
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

  const toggleAddSetModal = (workout_id: number) => {
    setAddSetModalState((prevState) => !prevState);

    if (workout_id) {
      setWorkoutID(workout_id);
    }
  };

  const handleFetchExercises = (workout_id: number): void => {
    setfetchExercises((prevState) => !prevState);
  };

  const completeExercise = (): void => {
    alert("Complete Exercise?");
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
      {addModalState && (
        <SearchModal
          query_date={query_date}
          user_id={user_id}
          toggleAddModal={toggleAddModal}
          default_exercises={default_exercises}
          muscle_groups={muscle_groups}
          handleFetchExercises={handleFetchExercises}
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
