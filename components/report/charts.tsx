import React, {useState} from 'react';
import PieChart from './pieChart';
import BarChart from './barChart';
import LineChart from './lineChart';

/*
  [{maxrep: 420, type: deadlift, Unix: (current days time stamp),
    timespan: week, data: [{x: unix, y: max-weight},...]}]
*/
interface coord {
  x: number;
  y: number;
};

interface data {
  maxRep: number;
  type: string;
  unix: number;
  timespan: string;
  data: coord[];
};


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

export default function Charts (props: any) {
  let reports: data[] = props.reports;
  return (
    <div>
      <ul className='w-full h-full overflow-auto'>
        {/* {reports.map((report, index) => {
          return (
            <li key={index}>
              <LineChart chartData={report}/>
            </li>)})} */}
      </ul>
    </div>
  );
};

/*
  labels: three different options, one for the past week, this month, and this year

  data: map the weight or calories and the unix time stamp
*/