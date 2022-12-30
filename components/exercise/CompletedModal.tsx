import { MdClose } from "react-icons/md";

export default function CompletedModal({ toggleCompletedModal }: any) {
  return (
    <div>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={toggleCompletedModal}
      ></div>

      <div
        className="fixed top-[50%] left-[50%] z-50 flex h-[35%] w-[40%] translate-x-[-50%]
      translate-y-[-50%] flex-col items-center rounded-3xl bg-gray-300 pl-10 pr-10 text-black"
      >
        <div className="header flex w-[100%] flex-row items-center justify-between pt-4 pb-4">
          <h1 className="title text-[2rem] font-bold"> Complete Set? </h1>
        </div>

        <div className="no-scrollbar flex h-[45%] w-full flex-col items-center justify-around overflow-y-scroll rounded-2xl bg-gray-500 shadow-[inset_0_2px_5px_0_#404040]">
          <div className="flex w-10/12 justify-center rounded-2xl bg-slate-200 py-5 px-5">
            <h2 className="mr-3 font-bold"> Actual Reps Completed: </h2>
            <input className="rounded-md shadow-md" type="number"></input>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-between rounded-full bg-gray-500 shadow-[inset_0_2px_5px_0_#404040]">
          <button
            className="my-3 ml-3 w-5/12 rounded-full bg-blue-500 px-10 py-4 font-bold text-slate-50 shadow-md hover:bg-blue-400"
            onClick={toggleCompletedModal}
          >
            {" "}
            Confirm{" "}
          </button>
          <button
            className="my-3 mr-3 w-5/12 rounded-full bg-blue-500 px-10 py-4 font-bold text-slate-50 shadow-md hover:bg-blue-400"
            onClick={toggleCompletedModal}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
