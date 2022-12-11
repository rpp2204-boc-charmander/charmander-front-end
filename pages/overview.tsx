import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/overview/Header";
import Container from "../components/overview/Container";

export interface ExerciseObjProps {
  text: string,
  calorie: number,
  sets?: number,
  reps?: number,
  weight?: number,
  completed: boolean
}

interface NutritionObjProps {
  text: string,
  calorie: number
}

export default function Overview() {
  const [day, setDay] = useState(new Date());
  const [caloriesConsumed, setcaloriesConsumed] = useState(0);
  const [caloriesBurned, setcaloriesBurned] = useState(0);
  const [netCalories, setNetCalories] = useState(0);
  const [exercises, setExercises] = useState(Array<ExerciseObjProps>);
  const [nutrition, setNutrition] = useState(Array<NutritionObjProps>);

  useEffect(() => {
    const day = new Date();
    const exercises = [
      {text: "Bench Press", calorie: 500, sets: 3, reps: 5, weight: 15, completed: true},
      {text: "Chair Press", calorie: 500, sets: 3, reps: 5, completed: false},
      {text: "Desk Press", calorie: 500, sets: 3, reps: 5, completed: false},
      {text: "Table Press", calorie: 1000, completed: false},
      {text: "Squats", calorie: 500, completed: false}
    ];
    const nutrition = [
      {text: "Big Mac", calorie: 300},
      {text: "Big Mac", calorie: 300},
      {text: "Big Mac", calorie: 300}
    ];
    setExercises(exercises);
    setNutrition(nutrition);
  }, [])

  // Calculate total calorie burned
  useEffect(() => {
    let sum = 0;
    exercises.map(exercise => {
      if (exercise.completed) {
        sum += exercise.calorie;
      }
    })
    setcaloriesBurned(prevState => sum);
  }, [exercises])

  // Calculate total calorie consumed
  useEffect(() => {
    let sum = 0;
    nutrition.map(food => {
      sum += food.calorie;
    })
    setcaloriesConsumed(prevState => sum);
  }, [nutrition])

  // Calculate net calories
  useEffect(() => {
    setNetCalories(prevState => caloriesConsumed - caloriesBurned)
  }, [caloriesConsumed, caloriesBurned])

  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <div className="sidebar bg-gray-400 w-[10%]">
          SIDEBAR
        </div>

        <div className="bg-white flex flex-col w-[90%]">
          <Header />

          <div className="flex flex-col items-center">
            <Container
              type="calories"
              title="Daily Calories"
              cards={[
                {calorie: caloriesConsumed, text: "Calories Consumed"},
                {calorie: caloriesBurned, text: "Calories Burned"},
                {calorie: netCalories, text: "Net Calories"}
              ]}
            />

            <Container
              type="exercise"
              title="Exercise"
              cards={exercises}
              setExercises={setExercises}
            />

            <Container
              type="nutrition"
              title="Nutrition"
              cards={nutrition}
              setNutrition={setNutrition}
            />
          </div>
        </div>
      </div>
    </div>
  )
}