import React from 'react';
import Head from 'next/head';
import Header from '../components/report/header';
import Charts from '../components/report/charts';

export default function Report() {
  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='h-screen'>
        <Header day={'Today'}/>
        <Charts/>
      </div>
    </div>
  );
}