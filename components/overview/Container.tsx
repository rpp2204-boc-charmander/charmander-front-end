import { useRef, useEffect, useState } from "react";
import { MdAdd } from 'react-icons/md';
import CaloriesCard from "./CaloriesCard";
import ExerciseAndNutritionCard from "./ExerciseAndNutritionCard";
import Modal from "./Modal";

interface CaloriesCardProps {
  calorie: number,
  text: string
}

interface ExerciseAndNutritionCardProps {
  text: string,
  calorie: number,
  sets?: number,
  reps?: number
}

interface ContainerProps {
  title: string,
  type: "calories" | "exercise" | "nutrition",
  cards: Array<CaloriesCardProps> | Array<ExerciseAndNutritionCardProps>,
  currrentExercises?: any,
  setCurrentExercises?: any
}

export default function Container({title, type, cards, currrentExercises, setCurrentExercises}: ContainerProps) {
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
      <div className="bg-gray-500 flex w-[100%] justify-between rounded-t-3xl h-[4rem] items-center text-[2rem]">
        <div className="ml-5"> {title} </div>
        {(type !== "calories") && (
          <MdAdd className="mr-5 cursor-pointer" onClick={() => setIsOpen(true)}/>
        )}
      </div>

      <Modal
        open={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        currrentExercises={currrentExercises}
        setCurrentExercises={setCurrentExercises}
      ></Modal>

      <div className="relative">
        <div className="bg-gray-300 flex flex-row rounded-b-3xl h-[16rem] justify-between
          items-center bg-fixed overflow-x-scroll pl-[4rem] pr-[4rem] w-[80vw] scrollbar-hide border"
        >
          {cards.map((card, index) => {
            if (type === "calories") {
              if (index === 2) {
                if (card.calorie >= 0) {
                  return <CaloriesCard textColor="text-green-500" key={index} calorie={card.calorie} text={card.text} />
                } else {
                  return <CaloriesCard textColor="text-red-500" key={index} calorie={card.calorie} text={card.text} />
                }
              } else {
                return <CaloriesCard key={index} calorie={card.calorie} text={card.text} />
              }
            } else {
              return <ExerciseAndNutritionCard key={index} name={card.text} calorie={card.calorie} sets={card.sets} reps={card.reps} />
            }
          })}
        </div>
      </div>
    </div>
  )
}