interface Props {}

const GroupSearchExercises = ({ exercises }: Props): JSX.Element => {
  return (
    <div className="ml-2 mb-2 ">
      {exercises.map((item) => {
        return (
          <div
            className="m-2 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            key={item.exercise_id}
          >
            {item.exercise}
          </div>
        );
      })}
    </div>
  );
};

export default GroupSearchExercises;
