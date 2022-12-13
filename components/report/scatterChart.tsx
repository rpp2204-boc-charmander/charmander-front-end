import React, {useState} from 'react';
import 'chart.js/auto';
import {Scatter} from 'react-chartjs-2';

interface userData {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

interface coord {
  x: number;
  y: number;
};

interface report {
  maxRep: number;
  type: string;
  data: coord[];
};

export default function ScatterChart (props:any) {
  let chartData: coord[] = props.chartData.data;
  const [DATA, setChartData] = useState({
    labels: chartData.map((co_ord) => co_ord.x),
    datasets: [
      {
        label: 'Users Gained',
        data: chartData,
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
  console.log(props.chartData);
  return (
    <div>
      <Scatter data={DATA}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Test of scatter chart'
            },
            legend: {
              display: false
            }
          }
        }}/>
    </div>
  )
};