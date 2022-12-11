import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";


export default function SearchModal({ toggleAddModal }: any) {
  return <div className="bg-gray-400 p-5 absolute shadow-xl rounded-2xl w-4/6 h-4/6 max-w-xl top-40 left-80 flex-col">
    <input type="search" placeholder="Search for exercise or body part" className="shadow-lg w-5/6 h-10 rounded-lg"></input>
    <button className="mx-2"> <BsSearch size={25}/> </button>
    <button className="ml-3"onClick={toggleAddModal}><AiOutlineCloseCircle size={25}/></button>
    <div className="h-5.5/6 my-5 bg-white rounded-lg overflow-scroll"></div>
    <button className="w-11/12 mx-2 bg-white text-black hover:bg-gray-300 font-bold py-2 px-4 rounded-3xl static">Add</button>
  </div>
}