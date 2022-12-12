import ExerciseItem from './ExerciseItem';
import styles from '../../styles/Exercise.module.css';

export default function ExerciseList({ exercises, toggleEditModal }:any) {
  return (
    <div className="h-list max-w-screen-lg overflow-auto no-scrollbar">
      {exercises.map( (exercise:any) => {
        return <ExerciseItem key={exercise.id} exercise={exercise} toggleEditModal={toggleEditModal}/>
      })}
    </div>
  )
}