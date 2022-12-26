import React, { useState } from "react";
import LineChart from "./lineChart";
import ScatterChart from "./scatterChart";

interface coord {
  x: number;
  y: number;
}

interface report {
  maxRep: number;
  type: string;
  data: coord[];
}

interface reports {
  timespan: string;
  unix: number;
  data: report[];
}

let weekData: reports = {
  timespan: "month",
  unix: 1670922000000 + 86400000 * 6,
  data: [
    {
      maxRep: 420,
      type: "deadlift",
      data: [
        { x: 1670922000000, y: 350 },
        { x: 1670922000000 + 86400000, y: 220 },
        { x: 1670922000000 + 86400000 * 2, y: 280 },
        // { x: 1670922000000 + 86400000*3,
        //   y: 250},
        { x: 1670922000000 + 86400000 * 4, y: 380 },
        { x: 1670922000000 + 86400000 * 5, y: 360 },
        // { x: 1670922000000 + 86400000*6,
        //   y: 420}
      ],
    },
    {
      maxRep: 500,
      type: "bench press",
      data: [
        { x: 1641027600000, y: 500 },
        { x: 1643706000000, y: 100 },
        { x: 1646125200000, y: 50 },
        { x: 1648800000000, y: 78 },
        { x: 1651392000000, y: 236 },
        { x: 1654070400000, y: 367 },
        { x: 1656662400000, y: 400 },
        { x: 1659340800000, y: 200 },
        { x: 1662019200000, y: 300 },
        { x: 1664611200000, y: 158 },
        { x: 1667289600000, y: 198 },
        { x: 1669885200000, y: 220 },
      ],
    },
  ],
};

export default function Charts(props: any) {
  let reportsData: report[] = weekData.data;
  return (
    <div>
      <ul className="w-full h-full overflow-auto">
        {reportsData.map((report, index) => {
          return (
            <li key={index}>
              <LineChart
                chartData={report}
                time={weekData.unix}
                timespan={props.timespan}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
