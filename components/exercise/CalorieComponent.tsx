import CaloriesBurned from './CaloriesBurned';

export default function CalorieComponent({ total, toggleAddModal }:any) {
  return (
    <div className="max-w-xxs max-h-calories overflow-hidden rounded-lg shadow-lg bg-gray-300 mt-4 mx-6 flex-col">
      <CaloriesBurned calories={total}/>
      <button className="w-11/12 mx-2 bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded-3xl static"
              onClick={toggleAddModal}>
      Add Exercise
      </button>
    </div>
  )
}