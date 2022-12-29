interface CaloriesCardProps {
  calorie: number;
  text: string;
  textColor?: string;
}

export default function Card({
  calorie,
  text,
  textColor = "text-black",
}: CaloriesCardProps) {
  return (
    <div
      className="m-1 flex h-[16vh] w-[30vw] cursor-pointer flex-col items-center justify-center
      rounded-3xl bg-white text-black shadow-xl hover:shadow-2xl lg:h-[11rem] lg:w-[18rem]"
    >
      <div className={`text-auto lg:text-[3rem] ${textColor} font-bold`}>
        {calorie}
      </div>

      <div className="text-auto lg:text-[1.5rem]">{text}</div>
    </div>
  );
}
