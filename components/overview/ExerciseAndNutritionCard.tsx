interface ExerciseAndNutritionCardProps {
  name: string,
  calorie: number,
  sets?: number,
  reps?: number
}

export default function Card({ name, calorie, sets, reps }: ExerciseAndNutritionCardProps) {
  return (
    <div className="bg-white flex flex-col text-black mr-[2rem] rounded-3xl h-[11rem] min-w-[18rem]
      justify-center items-center last:mr-[0rem] shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <div className="text-[2rem] font-bold">
        {name}
      </div>

      <div className="text-[1rem]">
        {sets} x {reps}
      </div>

      <div className="text-[1.5rem]">
        {calorie} calories
      </div>
    </div>
  )
}