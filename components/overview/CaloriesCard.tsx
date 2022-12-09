interface CaloriesCardProps {
  calorie: number,
  text: string
}

export default function Card(props: CaloriesCardProps) {
  return (
    <div className="bg-white flex text-black flex-col h-[11rem] w-[18rem]
      justify-center items-center rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <div className="text-[3rem] font-bold">
        {props.calorie}
      </div>

      <div className="text-[1.5rem]">
        {props.text}
      </div>
    </div>
  )
}