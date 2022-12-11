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

export interface NutritionObjProps {
  text: string,
  calorie: number,
  portion?: number,
  completed: boolean
}

export default function Overview() {
  // States
  const [day, setDay] = useState(new Date());
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
  const sex = 'female';

  // Load dummy data
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
      {text: "Big Mac", calorie: 300, portion: 5, completed: true},
      {text: "Big Mac", calorie: 300, completed: false},
      {text: "Big Mac", calorie: 300, completed: false}
    ];
    setExercises(exercises);
    setNutrition(nutrition);
  }, [])

  // Calculate BMR with Mifflin-St Jeor equation
  useEffect(() => {
    // Need to query
    const weight = 70; // in kg
    const height = 175; // in cm
    const age = 30;
    const sex = 'female';

    let bmr = 0;
    let s;
    if (sex === 'male') {
      s = 5;
    } else {
      s = -161;
    }

    bmr = 10 * weight + 6.25 * height - 5 * age + s;
    setBmr(bmr);
  }, [weight, height, age, sex]);

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
      if (food.completed) {
        sum += food.calorie;
      }
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

      <div className="bg-white flex flex-col w-[100%]">
        <Header />

        <div className="flex flex-col items-center pt-4">
          <Container
            type="calories"
            title="Daily Calories"
            cards={[
              {calorie: caloriesConsumed, text: "Calories Consumed"},
              {calorie: caloriesBurned, text: "Calories Burned"},
              {calorie: netCalories, text: "Net Calories"}
            ]}
            bmr={bmr}
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
  )
}