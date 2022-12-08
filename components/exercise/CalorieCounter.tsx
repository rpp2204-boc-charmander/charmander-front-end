import styles from "../../styles/Exercise.module.css"
import mockData from '../../mocks/exercisedata.json';

export default function CalorieCounter() {
  return (
    <div className={styles.calories}>
      <p>{mockData.data[0].total_calories_burned} Calories Burned</p>
      <button> Add Exercise </button>
    </div>
  )
}