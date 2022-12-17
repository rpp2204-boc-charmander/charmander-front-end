export default function ModalCard() {
  return (
    <div className="container flex h-[25rem] justify-between bg-gray-500">
      <div className="image bg-white h-[5rem] w-[5rem]"> place image here </div>
      <div className="name"> Bench Press</div>
      <div className="inputContainer flex flex-col h-[10rem] justify-between">
        <label>
          Weight:
          <input type="number" className="bg-white"></input>
        </label>

        <label>
          Sets:
          <input type="number" className="bg-white"></input>
        </label>

        <label>

        </label>
        <input type="number" className="bg-white"></input>
      </div>
    </div>
  )
}