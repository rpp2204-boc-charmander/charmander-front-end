export default function CaloriesBurned({ calories } : any) {
  return (
    <div className="h-4.5/6 rounded-lg bg-white shadow-inner m-3 flex-col items-center">
      <p>Total Calories Burned (Estimate)</p>
      <b>{calories}</b>
    </div>
  )
};