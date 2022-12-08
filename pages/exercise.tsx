import ExerciseList from "../components/exercise/ExerciseList"
import CalorieCounter from "../components/exercise/CalorieCounter";
import CurrDate from "../components/exercise/CurrDate";
import styles from '../styles/Exercise.module.css';

export default function Exercise() {
  return (
    <>
      <header className={styles.header}>
        <h1 className="text-8xl font-bold"> Exercise </h1>
        <CurrDate />
      </header>
      <div className={styles.content}>
        <CalorieCounter />
        <ExerciseList />
      </div>
    </>
  )
}