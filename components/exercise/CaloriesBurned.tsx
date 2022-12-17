export default function CaloriesBurned({ caloriesBurned }: any) {
  return (
    <div className="h-4.5/6 rounded-lg bg-white shadow-inner m-3 flex flex-col justify-center items-center text-center overflow-hidden">
      <p className='text-sm'>Total Calories Burned (Estimate)</p>
      <b className='text-4xl'>{caloriesBurned}</b>
    </div>
  )
};