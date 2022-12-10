import { useState } from "react";
import Head from "next/head";
import Header from "../components/overview/Header";
import Container from "../components/overview/Container";

interface ExerciseObjProps {
  text: string,
  calorie: number
}

interface NutritionObjProps {
  text: string,
  calorie: number
}

interface OverviewProps {
  day: Date,
  caloriesConsumed: number,
  caloriesBurned: number ,
  exercises: Array<ExerciseObjProps>,
  nutrition: Array<NutritionObjProps>
}

export default function Overview({
  day = new Date(),
  caloriesConsumed = 0,
  caloriesBurned = 0,
  exercises = [],
  nutrition = []}: OverviewProps) {
  const netCalories = caloriesConsumed - caloriesBurned;

  const [currentDate, setCurrentDate] = useState(day);
  const [currrentExercises, setCurrentExercises] = useState(exercises);

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
            <Container title="Daily Calories" type="calories" cards={[
              {calorie: caloriesConsumed, text: "Calories consumed"},
              {calorie: caloriesBurned, text: "Calories burned"},
              {calorie: netCalories, text: "Net Calories"}
            ]}/>

            <Container
              title="Exercise"
              type="exercise"
              cards={exercises}
              currrentExercises={currrentExercises}
              setCurrentExercises={setCurrentExercises}
            />

            <Container title="Nutrition" type="nutrition" cards={nutrition} />
          </div>
        </div>
      </div>
    </div>
  )
}