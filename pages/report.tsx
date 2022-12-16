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
/*
  TODO:
  complete- make cards out of each chart component

  complete- figure out how to split data for each chart up and then work that into each individual set of chart data

  complete- look into strtotime(): have to do a makeshift version where I use the unix timestamp and round to the closest day/ start of a month/ start of a year and base the labels off of that and have my x axis be scaled by time since the start of the timeframe selected

  complete- figure out data structure based on time that works for all time spans: see charts.tsx for how labels and data will accommodate

  complete- figure out where to put the chartData hook and how to adjust that for scatter plot

  Set up a way for state to update upon prop changes in scatterChart.tsx

  figure out how to split labels properly based on time span

  complete- figure out how to map data points of scatter plot
*/