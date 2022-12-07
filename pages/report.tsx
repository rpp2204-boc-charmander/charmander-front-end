import React from 'react';
import Head from 'next/head';
import Header from '../components/report/header';

export default function Report() {
  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className=''>
          Sidebar
        </div>

        <Header/>
      </div>
    </div>
  );
}