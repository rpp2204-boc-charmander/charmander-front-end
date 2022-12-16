import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchModal({ toggleEditModal }: any) {
  return <div className="bg-gray-400 p-5 absolute shadow-xl rounded-2xl w-4/6 h-4/6 max-w-xl top-40 right-20 flex-col">
    <button className="right-5 top-2 absolute"onClick={toggleEditModal}><AiOutlineCloseCircle size={25}/></button>
    <div className="h-5.5/6 my-5 bg-white rounded-lg overflow-scroll">
    </div>
    <button className="w-11/12 mx-2 bg-white text-black hover:bg-green-500 font-bold py-2 px-4 rounded-3xl static">Confirm</button>
  </div>
}