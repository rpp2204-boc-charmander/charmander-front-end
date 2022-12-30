import { ChildProps } from "../components/Layout"
import { useEffect} from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { useTheme } from 'next-themes'
import UserExperience from '../components/settings/UserExperience'
import UserMetrics from '../components/settings/UserMetrics'


export default function Settings({ setTitle, setIcon, setShowCalendar }: ChildProps) {

  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setTitle('Settings');
    setIcon(() => (MdOutlineSettings));
    setShowCalendar(false);
  }, [setTitle, setIcon, setShowCalendar]);

  return (
    <div>
      <UserMetrics />
      <UserExperience />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-blue-300"> Theme </button>
    </div>
  );
}