import { useRef, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import CaloriesCard from "./CaloriesCard";
import ExerciseAndNutritionCard from "./ExerciseAndNutritionCard";


interface CaloriesCardProps {
  calorie: number,
  text: string
}

interface ExerciseAndNutritionCardProps {
  text: string,
  calorie: number
}

interface ContainerProps {
  title: string,
  type: "calories" | "exercise" | "nutrition",
  cards: Array<CaloriesCardProps> | Array<ExerciseAndNutritionCardProps>
}


export default function Container(props: ContainerProps) {
  /* const scrollRef = useRef<any>();

  const slideScroll = () => {
    console.log('Hello');
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', slideScroll)
    }
  }) */

  return (
    <div className="flex flex-col h-[35rem] w-[150rem] items-center mb-[7rem] overflow-hidden">
      <div className="bg-gray-400 flex justify-between rounded-t-3xl h-[7rem] w-[150rem] items-center text-[4rem]">
        <div className="ml-5"> {props.title} </div>
        {(props.type !== "calories") && (
          <PlusIcon className="h-16 w-16 mr-5"/>
        )}
      </div>

      <div className="bg-gray-200 flex flex-row rounded-b-3xl h-[28rem] w-[150rem] justify-between
        items-center bg-fixed overflow-x-scroll pl-[10rem] pr-[10rem]"
      >
        {props.cards.map((card, index) => {
          if (props.type === "calories") {
            return <CaloriesCard key={index} calorie={card.calorie} text={card.text} />
          } else {
            return <ExerciseAndNutritionCard key={index} name={card.text} calorie={card.calorie} />
          }
        })}
      </div>
    </div>
  )
}