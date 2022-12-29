const MuscleGroups = ({
  muscle_groups,
  clearSearchOnClick,
}: any): JSX.Element => {
  return (
    <ul className="y-1 m-2 flex flex-row content-center space-x-4">
      {muscle_groups.map((item: any) => {
        return (
          <li
            className="w-30 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
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
          </li>
        );
      })}
    </ul>
  );
};

export default MuscleGroups;
