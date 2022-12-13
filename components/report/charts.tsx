import React, {useState} from 'react';
import PieChart from './pieChart';
import BarChart from './barChart';
import LineChart from './lineChart';
import ScatterChart from './scatterChart';

/*
  [{maxrep: 420, type: deadlift, Unix: (current days time stamp),
    timespan: week, data: [{x: unix, y: max-weight},...]}]
*/
interface coord {
  x: number;
  y: number;
};

interface report {
  maxRep: number;
  type: string;
  data: coord[];
};

interface reports {
  timespan: string;
  unix: number;
  data: report[];
}

interface userData {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

let testData: userData[] = [
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

let weekData: reports = {
  timespan: 'week',
  unix: 1670889600000,
  data: [
    {maxRep: 420,
    type: 'deadlift',
    data: [
      { x: 1670371200000,
        y: 350},
      { x: 1670457600000,
        y: 220},
      { x: 1670544000000,
        y: 280},
      { x: 1670630400000,
        y: 250},
      { x:1670716800000,
        y: 380},
      { x: 1670803200000,
        y: 360},
      { x: 1670889600000,
        y: 420},
    ]}
  ]
}

export default function Charts () {
  let reportsData: report[] = weekData.data;
  return (
    <div>
      <ul className='w-full h-full overflow-auto'>
        {reportsData.map((report, index) => {
          return (
            <li key={index}>
              <LineChart chartData={report}/>
            </li>)})}
      </ul>
    </div>
  );
};

/*
  labels: three different options, one for the past week, this month, and this year

  data: map the weight or calories and the unix time stamp
*/