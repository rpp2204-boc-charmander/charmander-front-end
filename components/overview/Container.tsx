import CaloriesCard from "./CaloriesCard";
import ExerciseAndNutritionCard from "./ExerciseAndNutritionCard";

interface CaloriesCardProps {
  calorie: number,
  text: string
}

interface ExerciseAndNutritionCardProps {
  name: string,
  calorie: number
}

interface ContainerProps {
  title: string,
  type: "calories" | "exercise" | "nutrition",
  cards: Array<CaloriesCardProps> | Array<ExerciseAndNutritionCardProps>
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex flex-col h-[35rem] w-[150rem] items-center mb-[7rem] overflow-hidden">
      <div className="bg-gray-400 flex rounded-t-3xl h-[7rem] w-[150rem] items-center text-[4rem]">
        <div> {props.title} </div>
      </div>

      <div className="bg-gray-200 flex flex-row rounded-b-3xl h-[28rem] w-[150rem] justify-between
        items-center bg-fixed overflow-x-scroll"
      >
        {props.cards.map((card, index) => {
          if (props.type === "calories") {
            return <CaloriesCard key={index} calorie={card.calorie} text={card.text} />
          } else {
            return <ExerciseAndNutritionCard key={index} name={card.name} calorie={card.calorie} />
          }
        })}
      </div>
    </div>
  )
}