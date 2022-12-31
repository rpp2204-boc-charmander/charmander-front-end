import { useTheme } from 'next-themes'

export default function UserExperience() {
  const {theme, setTheme} = useTheme()

  return (
    <div className='w-full flex flex-row text-black justify-between items-center'>
      <p className='lg:text-2xl'> Dark Mode </p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[10rem]">
        {/* {theme === 'dark' ? 'On' : 'Off'} */}
        dark
      </button>
    </div>
  )
}
