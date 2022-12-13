import React, {useState} from 'react';
import 'chart.js/auto';
import {Line} from 'react-chartjs-2';

interface coords {
  x: number;
  y: number;
};

interface report {
  maxRep: number;
  type: string;
  data: coords[];
};

export default function LineChart (props: any) {
  let chartData: coords[] = props.chartData.data;
  const[DATA, setChartData] = useState({
    labels: chartData.map((coord) => coord.x),
    datasets: [
      {
        label: 'Test Chart',
        data: chartData.map((coord) => coord.y),
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
  })
  return (
    <div className='chart-container'>
      <Line
        data={DATA}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Test of Line Chart'
            },
            legend: {
              display: false
            }
          }
        }}/>
    </div>
  );
};