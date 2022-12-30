import { useRef } from "react";

import { MdClose } from "react-icons/md";

export default function CompletedModal({ toggleCompletedModal, completeSet, setID }: any) {
  const actualRef: any = useRef();

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

         <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
            <h1 className="title text-[2rem] font-bold"> Complete Set? </h1>
         </div>

         <div className="bg-gray-500 flex flex-col rounded-2xl h-[45%] w-full justify-around items-center overflow-y-scroll no-scrollbar shadow-[inset_0_2px_5px_0_#404040]">
          <div className="flex bg-slate-200 py-5 px-5 w-10/12 rounded-2xl justify-center">
            <h2 className="font-bold mr-3"> Actual Reps Completed: </h2>
            <input className="rounded-md shadow-md" type="number" ref={actualRef}></input>
          </div>
         </div>

         <div className="flex w-full justify-between items-center mt-4 bg-gray-500 rounded-full shadow-[inset_0_2px_5px_0_#404040]">
          <button className="bg-blue-500 hover:bg-blue-400 text-slate-50 w-5/12 rounded-full px-10 py-4 font-bold my-3 ml-3 shadow-md" onClick={() => { completeSet( actualRef.current.value, setID ) }}> Confirm </button>
          <button className="bg-blue-500 hover:bg-blue-400 text-slate-50 w-5/12 rounded-full px-10 py-4 font-bold my-3 mr-3 shadow-md" onClick={toggleCompletedModal}> Cancel </button>
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
