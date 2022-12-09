import styles from "../../styles/Exercise.module.css"
import mockData from '../../mocks/exercisedata.json';

export default function CalorieCounter() {
  return (
    <div className="max-w max-h-60 rounded-lg overflow-hidden shadow-lg bg-gray-100 mt-4 cursor-pointer">
      <p>{mockData.data[0].total_calories_burned} Calories Burned</p>
      <button> Add Exercise </button>
    </div>
  )
}