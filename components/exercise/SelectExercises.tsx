import GroupSearchExercises from "./GroupSearchExercises";

interface Props {}

const SelectExercises = ({ exercises }: Props): JSX.Element => {
  console.log("exercises in select: ", exercises);

  const groups = exercises.reduce((acc, obj) => {
    const { muscle_group, muscle_group_id } = obj;

    const key = muscle_group;
    const group = acc[key] ?? [];

    return { ...acc, [key]: [...group, obj] };
  }, {});

  return (
    <div className="h-[70%] w-full items-center overflow-auto overflow-y-scroll rounded-2xl bg-slate-50 p-2 shadow-well">
      {Object.entries(groups).map((item, index) => {
        const muscle_group_id = item[1][0].muscle_group_id;
        const muscle_group = item[1][0].muscle_group;
        const group_exercises = item[1];

        return (
          <div
            key={muscle_group_id}
            className="flex w-full flex-col justify-start"
          >
            <div className="mb-2 text-2xl font-semibold text-gray-800">
              {muscle_group}
            </div>
            <GroupSearchExercises exercises={group_exercises} />
          </div>
        );
      })}
    </div>
  );
};

export default SelectExercises;
/* Rectangle 29 */

// position: absolute;
// width: 988px;
// height: 465px;
// left: 0px;
// top: 0px;

// background: #8A8A8A;
// box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
// border-radius: 5px;
