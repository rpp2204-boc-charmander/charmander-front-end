import Head from "next/head";
import Header from "../components/overview/Header";
import Container from "../components/overview/Container";

export default function Overview() {
  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col items-center">
        <Container title="Daily Calories" type="calories" cards={[
          {calorie: 1650, text: "Calories gained"},
          {calorie: 2500, text: "Calories burned"},
          {calorie: -850, text: "Net Calories"}
        ]}/>

        <Container title="Exercise" type="exercise" cards={[
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500},
          {name: "Bench Press", calorie: 500}
        ]} />

        <Container title="Nutrition" type="nutrition" cards={[
          {name: "Big Mac", calorie: 300},
          {name: "Big Mac", calorie: 300},
          {name: "Big Mac", calorie: 300}
        ]} />
      </div>
    </div>
  )
}