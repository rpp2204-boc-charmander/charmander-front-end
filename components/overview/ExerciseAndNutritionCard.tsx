interface ExerciseAndNutritionCardProps {
  name: string,
  calorie: number
}

export default function Card(props: ExerciseAndNutritionCardProps) {
  return (
    <div className="bg-white flex flex-col text-black mr-[10rem] rounded-3xl h-[20rem] w-[30rem]
      justify-center items-center min-w-[30rem] shadow-2xl last:mr-[0rem] shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <div className="text-[3rem] font-bold">
        {props.name}
      </div>

      <div className="text-[3rem]">
        {props.calorie} calories
      </div>
    </div>
  )
}