import axios from "axios";
import Container from "../components/overview/Container";
import Head from "next/head";
import { useState, useEffect } from "react";
import { MdOutlineSort } from "react-icons/md";
import { ChildProps } from "../components/Layout";

export interface ExerciseObjProps {
  text: string;
  calorie: number;
  sets?: number;
  reps?: number;
  weight?: number;
  completed: boolean;
}

export interface NutritionObjProps {
  text: string;
  calorie: number;
  portion?: number;
  completed: boolean;
}

export default function Overview({
  currentDate,
  setTitle,
  setIcon,
  setShowCalendar,
  setShowReportButtons
}: ChildProps) {
  // States
  const [caloriesConsumed, setcaloriesConsumed] = useState(0);
  const [caloriesBurned, setcaloriesBurned] = useState(0);
  const [netCalories, setNetCalories] = useState(0);
  const [exercises, setExercises] = useState(Array<ExerciseObjProps>);
  const [nutrition, setNutrition] = useState(Array<NutritionObjProps>);
  const [bmr, setBmr] = useState(0);

  // Variables
  const weight = 0; // in kg
  const height = 0; // in cm
  const age = 0;
  const sex = "female";

  // Helper function
  const convertDateToString = (date: any) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  useEffect(() => {
    setTitle("Overview");
    setIcon(() => MdOutlineSort);
    setShowCalendar(true);
    setShowReportButtons(false);
  }, [setTitle, setIcon, setShowCalendar]);

  // Get workout data
  useEffect(() => {
    //axios(`http://44.198.150.13:3000/overview/exercise?date=${convertDateToString(currentDate)}`)
    axios(
      `http://44.198.150.13:3000/exercise/workout/list?user_id=1&log_date=${convertDateToString(currentDate)}`
    ).then((result) => {
      let data = result.data;
      let exercise: ExerciseObjProps = {
        text: "",
        calorie: 0,
        completed: false,
      };
      let newData = data.map((item: any) => {
        exercise.text = item.exercise;
        exercise.calorie = item.est_cals_burned;
        exercise.completed = false;
        return exercise;
      });
      setExercises(newData);
    });
  }, [currentDate]);



  // Calculate BMR with Mifflin-St Jeor equation
  useEffect(() => {
    // Need to query
    const weight = 70; // in kg
    const height = 175; // in cm
    const age = 30;
    const sex = "female";

    let bmr = 0;
    let s = -161;
    /* if (sex === 'male') {
      s = 5;
    } else {
      s = -161;
    } */

    bmr = 10 * weight + 6.25 * height - 5 * age + s;
    setBmr(bmr);
  }, [weight, height, age, sex]);

  // Calculate total calorie burned
  useEffect(() => {
    let sum = 0;
    exercises.map((exercise) => {
      if (exercise.completed) {
        sum += exercise.calorie;
      }
    });
    setcaloriesBurned((prevState) => sum);
  }, [exercises]);

  // Calculate total calorie consumed
  useEffect(() => {
    let sum = 0;
    nutrition.map((food) => {
      if (food.completed) {
        sum += food.calorie;
      }
    });
    setcaloriesConsumed((prevState) => sum);
  }, [nutrition]);

  // Calculate net calories
  useEffect(() => {
    setNetCalories((prevState) => caloriesConsumed - caloriesBurned);
  }, [caloriesConsumed, caloriesBurned]);

  return (
    <div className="h-full w-full p-3 flex flex-col justify-between lg:items-center lg:justify-center">
      <Container
        type="calories"
        title="Calories"
        cards={[
          { calorie: caloriesConsumed, text: "Calories Consumed" },
          { calorie: caloriesBurned, text: "Calories Burned" },
          { calorie: netCalories, text: "Net Calories" },
        ]}
        bmr={bmr}
      />

      <Container
        type="exercise"
        title="Exercise"
        cards={exercises}
        setExercises={setExercises}
        bmr={bmr}
      />

      <Container
        type="nutrition"
        title="Nutrition"
        cards={nutrition}
        setNutrition={setNutrition}
        bmr={bmr}
      />
    </div>
  );
}