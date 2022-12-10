import React, {useState} from 'react';
import PieChart from './pieChart';
import BarChart from './barChart';
import LineChart from './lineChart';

// interface data {
//   key: string;
//   timeSpan: string;
//   metaOne: string;
//   metaTwo: string;
//   statsOne: number[];
//   statsTwo: number[];
// };
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

export default function Charts () {
  const [chartData, setChartData] = useState({
    labels: data.map((year) => year.year),
    datasets: [
      {
        label: 'Users Gained',
        data: data.map((gained) => gained.userGain),
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
  return (
    <div>
      <LineChart chartData={chartData}/>
    </div>
  );
};