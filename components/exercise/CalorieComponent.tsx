import CaloriesBurned from "./CaloriesBurned";

export default function CalorieComponent({
  caloriesBurned,
  toggleAddModal,
}: any) {
  return (
    <div className="flex max-h-calories min-w-min max-w-xxs flex-col justify-self-center overflow-hidden rounded-lg bg-gray-300 shadow-lg">
      <CaloriesBurned caloriesBurned={caloriesBurned} />
      <button
        className="static mx-2 w-11/12 rounded-3xl bg-white py-2 px-4 font-bold text-black hover:bg-gray-200"
        onClick={toggleAddModal}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
