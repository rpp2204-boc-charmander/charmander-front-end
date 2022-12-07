import mockData from '../../mocks/exercisedata.json';
import ExerciseItem from './ExerciseItem';

export default function ExerciseList() {
  return (
    <div>
      {mockData.data.map( exercise => {
        return <ExerciseItem key={exercise.id} exercise={exercise}/>
      })}
    </div>
  )
}