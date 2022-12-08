import mockData from '../../mocks/exercisedata.json';
import ExerciseItem from './ExerciseItem';
import styles from '../../styles/Exercise.module.css';

export default function ExerciseList() {
  return (
    <div className={styles.list}>
      {mockData.data.map( exercise => {
        return <ExerciseItem key={exercise.id} exercise={exercise}/>
      })}
    </div>
  )
}