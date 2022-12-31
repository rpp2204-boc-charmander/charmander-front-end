/* eslint-disable */
// @ts-nocheck

const MuscleGroups = ({
  muscle_groups,
  clearSearchOnClick,
}: any): JSX.Element => {
  return (
    <div className="flex flex-col justify-center py-3 lg:flex-row lg:space-x-4">
      {muscle_groups.map((item: any) => {
        return (
          <button
            className="rounded border border-gray-400 bg-white p-2 text-center text-lg font-semibold text-gray-800 shadow hover:bg-gray-100  sm:w-auto sm:overflow-auto"
            key={item.muscle_group_id}
            onClick={() => {
              clearSearchOnClick();

              try {
                document
                  .getElementById(item.muscle_group_id)
                  .scrollIntoView({ behavior: "smooth" });
              } catch {
                return null;
              }
            }}
          >
            {item.muscle_group}
          </button>
        );
      })}
    </div>
  );
};

export default MuscleGroups;
