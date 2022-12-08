import styles from "../../styles/Exercise.module.css"

export default function ExerciseItem ({ exercise } : any) {
  return (
    <div className={styles.card}>
      <div>
        <h2>{exercise.name}</h2>
        <p> Muscle Group: {exercise.muscle_group}</p>
      </div>
      <div>
        Goals:
        {exercise.sets.map( (set:any) => {
          return <p key={set.id}>{set.reps} reps</p>
        })}
      </div>
    </div>
  )
};