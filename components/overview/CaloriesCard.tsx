interface CaloriesCardProps {
  calorie: number,
  text: string
  textColor?: string,
}

export default function Card( {calorie, text, textColor = "text-black" } : CaloriesCardProps) {
  return (
    <div className="bg-white flex flex-col text-black h-[11rem] w-[18rem]
      justify-center items-center rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <div className={`sm:text-auto xl:text-[3rem] ${textColor} font-bold`}>
        {calorie}
      </div>

      <div className="sm:text-auto xl:text-[1.5rem]">
        {text}
      </div>
    </div>
  )
}