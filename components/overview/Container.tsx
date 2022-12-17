import { useRef, useEffect, useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import CaloriesCard from "./CaloriesCard";
import ExerciseAndNutritionCard from "./ExerciseAndNutritionCard";
import Modal from "./Modal";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[20rem] items-center mb-[2rem] overflow-hidden max-w-[80vw]">
      <div className="bg-gray-400 flex w-[100%] justify-between rounded-t-3xl h-[4rem] items-center text-[2rem]">
        <div className="ml-5"> {props.title} </div>
        {(props.type !== "calories") && (
          <AiOutlinePlus className="mr-5" onClick={() => setIsOpen(true)}/>
        )}
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>

      <div className="bg-gray-300 flex flex-row rounded-b-3xl h-[16rem] justify-between
        items-center bg-fixed overflow-x-scroll pl-[4rem] pr-[4rem] w-[80vw] scrollbar-hide"
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