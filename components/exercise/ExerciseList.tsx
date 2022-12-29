import ExerciseItem from "./ExerciseItem";
import styles from "../../styles/Exercise.module.css";

export default function ExerciseList({
  exercises,
  toggleEditModal,
  deleteExercise,
  toggleCompletedModal,
  toggleAddSetModal,
  completeExercise,
}: any) {
  return (
    <div className="no-scrollbar h-[90vh] max-w-screen-lg overflow-auto">
      {exercises.map((exercise: any) => {
        return (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            toggleEditModal={toggleEditModal}
            deleteExercise={deleteExercise}
            toggleCompletedModal={toggleCompletedModal}
            toggleAddSetModal={toggleAddSetModal}
            completeExercise={completeExercise}
          />
        );
      })}
    </div>
  );
}
