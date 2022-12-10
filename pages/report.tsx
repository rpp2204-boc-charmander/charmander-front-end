import React from 'react';
import Head from 'next/head';
import Header from '../components/report/header';
import Charts from '../components/report/charts';
import { spawnSync } from 'child_process';

interface userData {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

let data: userData[] = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];

export default function Report() {
  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-red-300 h-screen'>
        <Header day={'Today'}/>
        <Charts/>
      </div>
    </div>
  );
}
/*
  TODO:
  make cards out of each chart component
  figure out how to split data for each chart up and then work that into each individual set of chart dataa
  look into strtotime()
  figure out data structure based on time that works for all time spans
  figure out where to put the chartData hook and how to adjust that for scatter plot
  figure out how to split labels properly based on time span
  figure out how to map data points of scatter plot
*/