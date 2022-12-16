/* gloabal google */
import Head from 'next/head';
import LoginCard from '../components/login/LoginCard';
import { IoIosFitness} from 'react-icons/io';
import { MdOutlineFastfood } from 'react-icons/md'

const Login = () => {

  return (
    <div>
      <Head>
        <title>My Health Coach</title>
        <meta name='login' content="My Health Coach Login, Fitness, Nutrition, Exercise" />
        <link rel='icon' href="/flavion.ico" />
      </Head>
      <main>

      <div className="fixed top-[45%] left-[20%] text-black flex flex-col items-center text-6xl ">
        <h1>My Heath Coach</h1>
        <div className="flex flex-row w-full mt-3">
          <div className="grow"></div>
          <MdOutlineFastfood className="test-2xl " />
          <div className="grow"></div>
          <IoIosFitness className="text-7xl" />
          <div className="grow"></div>
        </div>
      </div >
        <LoginCard />
      </main>
    </div>
  )
}

export default Login;

