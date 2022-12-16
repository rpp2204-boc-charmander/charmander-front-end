/* gloabal google */
import Head from 'next/head';
import LoginCard from '../components/login/LoginCard';
import { useState } from 'react';

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
      </div >
        <LoginCard />
      </main>
    </div>
  )
}

export default Login;

