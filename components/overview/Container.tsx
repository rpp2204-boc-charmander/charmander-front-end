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
  //cards: Array<CaloriesCardProps> | Array<ExerciseObjProps> | Array<NutritionObjProps>,
  cards: any,
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
  let numberOfCompleted = 0;
  cards.map((card: any) => {
    if (card.completed === true) {
      numberOfCompleted++;
    }
  })

  return (
    <div className="bg-black flex flex-col items-center mb-[2rem] overflow-hidden h-[25vh] lg:rounded-3xl lg:h-[20rem] w-full lg:w-[80vw] max-w-[75rem]">
      <div className="bg-gray-500 flex flex-row h-[3rem] lg:h-[4rem] items-center text-white justify-between w-full">
        <div className="ml-5 text-base sm:text-[2rem]"> {title} </div>
        {(type === "calories") && (
          <div className="text-xs lg:text-base italic mr-5"> Recommended daily consumption: {Math.round(bmr)} </div>
        )}
        {(type !== "calories") && (
          <div className="flex flex-row grow items-center justify-between">
            <div className="text-xs lg:text-base italic ml-5"> {numberOfCompleted} of {cards.length} items completed </div>
            <MdAdd className="mr-5 cursor-pointer" onClick={() => setIsOpen(true)}/>
          </div>
        )}
      </div>

      <Modal
        open={isOpen}
        setIsOpen={setIsOpen}
        cards={cards}
        setExercises={setExercises}
        setNutrition={setNutrition}
      ></Modal>

      <div className="relative w-full h-full">
        <div className="bg-gray-300 flex flex-row min-h-full lg:h-[16rem] justify-between
          items-center bg-fixed overflow-x-scroll pl-2 pr-2 lg:pl-[4rem] lg:pr-[4rem] scrollbar-hide border w-full"
        >
          {cards.length === 0 && type === "exercise" && (
            <div className="flex w-full justify-center">
              <div className="text-white text-2xl flex justify-center">
                No workout has been added
              </div>
            </div>
          )}

          {cards.length === 0 && type === "nutrition" && (
            <div className="flex w-full justify-center">
              <div className="text-white text-2xl flex justify-center">
                No meal has been added
              </div>
            </div>
          )}

          {cards.length !== 0 && cards.map((card: any, index: any) => {
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