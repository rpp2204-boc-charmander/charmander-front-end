interface CaloriesCardProps {
  calorie: number,
  text: string
}

export default function Card(props: CaloriesCardProps) {
  return (
    <div className="bg-white flex text-black flex-col h-[20rem] w-[30rem]
      justify-center items-center rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <div className="text-[6rem] font-bold">
        {props.calorie}
      </div>

      <div className="text-[3rem]">
        {props.text}
      </div>
    </div>
  )
}