import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function EditModal({ toggleEditModal }: any) {
  return  <div>
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleEditModal}></div>

  <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black bg-gray-300 z-50
  flex flex-col items-center w-[30%] h-[60%] rounded-3xl pl-10 pr-10">

     <div className="w-[100%] header flex flex-row justify-between pt-4 pb-4 items-center">
      <div className="title text-[2rem] font-bold"> Edit Workout </div>
      <MdClose
        className="text-[2rem] cursor-pointer"
        onClick={toggleEditModal}
      />
     </div>

     <div className="w-[100%] h-[65%] bg-slate-50 flex flex-col scrollbar-hide rounded-lg justify-around items-center">
     </div>

    <button className="bg-green-500 hover:bg-green-400 text-slate-50 w-4/6 rounded-full px-10 py-4 font-bold mt-8"> Confirm Changes </button>

  </div>
</div>
}