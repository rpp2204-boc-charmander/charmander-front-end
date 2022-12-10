import React, {useState} from 'react';
import 'chart.js/auto';
import {Scatter} from 'react-chartjs-2';

interface userData {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

export default function ScatterChart (props:any) {
  let chartData: userData[] = props.chartData;
  const [DATA, setChartData] = useState({
    labels: chartData.map((year) => year.year),
    datasets: [
      {
        label: 'Users Gained',
        data: chartData.map((gained) => gained.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf01',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0'
        ],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  });
  //TODO
};