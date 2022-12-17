import { useState } from "react";
import Head from "next/head";
import Header from "../components/overview/Header";
import Container from "../components/overview/Container";

export default function Overview({
  calorieConsumed,
  calorieBurned,
  exercises,
  nutrition
}) {
  const [currentDate, setCurrentDate] = useState<any>();

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
              {calorie: 1650, text: "Calories gained"},
              {calorie: 2500, text: "Calories burned"},
              {calorie: -850, text: "Net Calories"}
            ]}/>

            <Container title="Exercise" type="exercise" cards={[
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500},
              {text: "Bench Press", calorie: 500}
            ]} />

            <Container title="Nutrition" type="nutrition" cards={[
              {text: "Big Mac", calorie: 300},
              {text: "Big Mac", calorie: 300},
              {text: "Big Mac", calorie: 300}
            ]} />
          </div>
        </div>
      </div>


    </div>
  )
}