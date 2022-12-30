import { ChildProps } from "../components/Layout"
import { useEffect} from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function Settings({ setTitle, setIcon, setShowCalendar }: ChildProps) {

  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setTitle('Settings');
    setIcon(() => (MdOutlineSettings));
    setShowCalendar(false);
  }, [setTitle, setIcon, setShowCalendar]);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-blue-300"> Theme </button>
  );
}