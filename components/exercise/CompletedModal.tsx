import { MdClose } from "react-icons/md";

export default function CompletedModal({ toggleCompletedModal }: any) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleCompletedModal}></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
      flex flex-col items-center w-[40%] h-[50%] rounded-3xl pl-10 pr-10">

         <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
          <div className="title text-[2rem] font-bold"> Complete Set? </div>
          <MdClose
            className="text-[2rem] cursor-pointer"
            onClick={toggleCompletedModal}
          />
         </div>


         <div className="w-[100%] h-[65%] bg-gray-400 flex flex-col scrollbar-hide rounded-lg justify-around items-center">

            <h3 className="font-bold"> Set 1:
              <input className="w-[130px] ml-5" placeholder="Actual Reps" type="number"></input>
            </h3>

            <h3 className="font-bold"> Set 2:
              <input className="w-[130px] ml-5" placeholder="Actual Reps" type="number"></input>
            </h3>

            <h3 className="font-bold"> Set 3:
              <input className="w-[130px] ml-5" placeholder="Actual Reps" type="number"></input>
            </h3>

            <h3 className="font-bold"> Set 4:
              <input className="w-[130px] ml-5" placeholder="Actual Reps" type="number"></input>
            </h3>

            <h3 className="font-bold"> Set 5:
              <input className="w-[130px] ml-5" placeholder="Actual Reps" type="number"></input>
            </h3>

          </div>


        <button className="bg-green-500 hover:bg-green-400 text-slate-50 rounded-full px-10 py-4 font-bold mt-4"> Mark As Complete </button>

      </div>
    </div>
  )
};