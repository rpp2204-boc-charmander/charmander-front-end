import { useState } from 'react';

import ExerciseList from '../components/exercise/ExerciseList';
import CalorieComponent from '../components/exercise/CalorieComponent';
import SearchModal from '../components/exercise/SearchModal';
import EditModal from '../components/exercise/EditModal';
import Header from '../components/overview/Header';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import mockData from '../mocks/exercisedata.json';

const getCaloriesBurned = (exercises: []): number => {
  let total = 0;

  exercises.forEach((exercise: { total_calories_burned: number }) => {
    total += exercise.total_calories_burned;
  });

  return total;
};

export default function Exercise(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [exercises, setExercises] = useState(mockData.data);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(
    getCaloriesBurned(exercises)
  );

  const toggleAddModal = () => {
    setAddModalState((prevState) => !prevState);
  };

  const toggleEditModal = () => {
    setEditModalState((prevState) => !prevState);
  };

  const deleteExercise = (id: number) => {
    alert('Are you sure you want to remove this exercise?');
  };

  return (
    <>
      <Header
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        title="Exercise"
        Icon={MdOutlineFitnessCenter}
      />

      {addModalState && <SearchModal toggleAddModal={toggleAddModal} />}
      {editModalState && <EditModal toggleEditModal={toggleEditModal} />}

      <div className="grid grid-cols-[25%_75%]">
        <CalorieComponent
          caloriesBurned={caloriesBurned}
          toggleAddModal={toggleAddModal}
        />
        <ExerciseList
          exercises={exercises}
          toggleEditModal={toggleEditModal}
          deleteExercise={deleteExercise}
        />
      </div>
    </>
  );
}
