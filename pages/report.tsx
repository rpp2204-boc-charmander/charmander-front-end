import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/report/header';
import Charts from '../components/report/charts';

export default function Report() {
  const [timespan, setTimespan]: any = useState('week');

  function handleclick(e: any) {
    e.preventDefault();
    setTimespan(e.target.name);
  }
  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Header day={'Today'} click={handleclick} />
        <Charts timespan={timespan} />
      </div>
    </div>
  );
}
