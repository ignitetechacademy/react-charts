import React, { Fragment } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
  Bar,
} from "recharts";
import NavBar from "./nav-bar";

// Sample Data
const data = [
  {
    date: "11/06/2024",
    hours: [-1, 0, 1, 2, 3, 4], //, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    duration: 8.15,
  },
  {
    date: "12/06/2024",
    hours: [0, 1, 0, 0], //, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
    duration: 8.37,
  },
  {
    date: "13/06/2024",
    hours: [0, 0, 1, 0], //, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    duration: 0.12,
  },
  // {
  //   date: '14/06/2024',
  //   hours: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  //   duration: 0.45,
  // },
  // {
  //   date: '15/06/2024',
  //   hours: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   duration: 0.13,
  // },
  // {
  //   date: '16/06/2024',
  //   hours: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   duration: 0.38,
  // },
  // {
  //   date: '17/06/2024',
  //   hours: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   duration: 1.2,
  // },
  // {
  //   date: '18/06/2024',
  //   hours: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   duration: 1.2,
  // },
];

const colors = ["#A9A9A9", "#FFD700", "#FF00FF", "#FFFF00"]; // Adding more colors
const negativeColor = "#FF0000"; // Negative color for negative values like < 0
const defaultColor = "#000000"; // Default color for invalid values like > 3

const UtilizationDetailsStatic = () => {
  return (
    <Fragment>
      <NavBar />
      <BarChart
        width={1000}
        height={400}
        data={data}
        layout="vertical"
        barCategoryGap="1%"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 24]}
          tickCount={25}
          label={{
            value: "Hour",
            position: "insideBottomRight",
            offset: -20,
          }}
        />
        <YAxis dataKey="date" type="category" />
        <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.2)" }} />
        <Legend />

        {data.map((entry, index) => (
          <Fragment key={index}>
            {entry.hours.map((hour, i) => (
              <Bar dataKey="hours" key={`cell-${index}-${i}`} fill="#8884d8">
                <Cell
                  key={`cell-${index}-${i}`}
                  fill={hour < 0 ? negativeColor : colors[hour] || defaultColor} // Use red for negative values, default color otherwise
                  x={(i / entry.hours.length) * 1000}
                  width={1000 / entry.hours.length}
                  y={(index * 2 + 1) * 45} // Adjusted y position to stagger rows
                  height={40}
                />
              </Bar>
            ))}
          </Fragment>
        ))}
      </BarChart>
    </Fragment>
  );
};

export default UtilizationDetailsStatic;
