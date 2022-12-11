import { useRef, useEffect, useState } from "react";
import { MdAdd } from 'react-icons/md';
import CaloriesCard from "./CaloriesCard";
import ExerciseAndNutritionCard from "./ExerciseAndNutritionCard";
import Modal from "./Modal";
import { ExerciseObjProps, NutritionObjProps } from "../../pages/overview";

interface CaloriesCardProps {
  text: string
  calorie: number
}

interface ContainerProps {
  type: "calories" | "exercise" | "nutrition",
  title: string,
  cards: Array<CaloriesCardProps> | Array<ExerciseObjProps> | Array<NutritionObjProps>,
  setExercises?: any,
  setNutrition?: any,
  bmr: number | 0
}

export default function Container({ type, title, cards, setExercises, setNutrition, bmr }: ContainerProps) {
  /* const scrollRef = useRef<any>();

  const slideScroll = () => {
    console.log('Hello');
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', slideScroll)
    }
  }) */

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[20rem] items-center mb-[2rem] overflow-hidden max-w-[80vw]">
      <div className="bg-gray-500 flex w-[100%] justify-between rounded-t-3xl h-[4rem] items-center text-[2rem] text-white">
        <div className="ml-5"> {title} </div>
        {(type === "calories") && (
          <div className="text-base italic mr-5"> Daily recommended calories: {Math.round(bmr)} </div>
        )}
        {(type !== "calories") && (
          <MdAdd className="mr-5 cursor-pointer" onClick={() => setIsOpen(true)}/>
        )}
      </div>

      <Modal
        open={isOpen}
        setIsOpen={setIsOpen}
        cards={cards}
        setExercises={setExercises}
        setNutrition={setNutrition}
      ></Modal>

      <div className="relative">
        <div className="bg-gray-300 flex flex-row rounded-b-3xl h-[16rem] justify-between
          items-center bg-fixed overflow-x-scroll pl-[4rem] pr-[4rem] w-[80vw] scrollbar-hide border"
        >
          {cards.map((card, index) => {
            if (type === "calories") {
              let textColor = "text-black"
              if (index === 2) {
                if (card.calorie >= 0) {
                  textColor = "text-green-500";
                } else {
                  textColor = "text-red-500";
                }
              } else {
                textColor = "text-black";
              }
              return <CaloriesCard
                textColor={textColor}
                key={index}
                calorie={card.calorie}
                text={card.text}
              />
            } else if (type === "exercise") {
              return <ExerciseAndNutritionCard
                key={index}
                idx={index}
                type={type}
                name={card.text}
                calorie={card.calorie}
                sets={card.sets}
                reps={card.reps}
                weight={card.weight}
                completed={card.completed}
                setExercises={setExercises}
              />
            } else {
              return <ExerciseAndNutritionCard
                key={index}
                idx={index}
                type={type}
                name={card.text}
                calorie={card.calorie}
                portion={card.portion}
                completed={card.completed}
                setNutrition={setNutrition}
              />
            }
          })}
        </div>
      </div>
    </div>
  )
}