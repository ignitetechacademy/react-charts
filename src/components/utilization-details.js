import React, { Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Text,
} from "recharts";
import NavBar from "./nav-bar";

const rawData = [
  {
    date: "11/06/2024",
    day: "Tue",
    hours: [
      1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    ],
    duration: 8.15,
  },
  {
    date: "12/06/2024",
    day: "Wed",
    hours: [
      0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
    ],
    duration: 8.37,
  },
  {
    date: "13/06/2024",
    day: "Thu",
    hours: [
      0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    ],
    duration: 5.12,
  },
  {
    date: "14/06/2024",
    day: "Fri",
    hours: [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    ],
    duration: 7.15,
  },
  {
    date: "15/06/2024",
    day: "Sat",
    hours: [
      0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
    ],
    duration: 3.37,
  },
  {
    date: "16/06/2024",
    day: "Sun",
    hours: [
      0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    ],
    duration: 3.12,
  },
  {
    date: "17/06/2024",
    day: "Mon",
    hours: [
      0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0,
    ],
    duration: 8.37,
  },
];

const transformData = (data) => {
  return data.map((item) => {
    const hoursData = item.hours.map((hour, index) => ({
      hour: index,
      status:
        hour === 1
          ? "working"
          : hour < 0
          ? "negative"
          : hour > 1
          ? "black"
          : "idle",
    }));

    return {
      date: `${item.date} ${item.day}`,
      duration: item.duration,
      hours: hoursData,
    };
  });
};

const transformedData = transformData(rawData);

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <Text x={x} y={y} width={140} textAnchor="end" verticalAnchor="middle">
      {payload.value}
    </Text>
  );
};

const CustomDurationTick = ({ x, y, payload }) => {
  const duration = transformedData.find(
    (item) => item.date === payload.value
  )?.duration;
  const durationString = `${Math.floor(duration)}hr ${Math.round(
    (duration % 1) * 60
  )}m`;

  return (
    <Text x={x} y={y} width={140} textAnchor="start" verticalAnchor="middle">
      {durationString}
    </Text>
  );
};

const UtilizationChart = () => {
  return (
    <>
      <NavBar />
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={transformedData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          barCategoryGap={2}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 24]}
            tickCount={25}
            orientation="top"
          />
          <YAxis
            type="category"
            dataKey="date"
            tick={<CustomYAxisTick />}
            width={100}
            yAxisId="left"
          />
          <YAxis
            type="category"
            dataKey="date"
            tick={<CustomDurationTick />}
            width={100}
            orientation="right"
            yAxisId="right"
          />
          <Tooltip />
          {Array.from({ length: 24 }, (_, index) => (
            <Fragment key={index}>
              {["working", "idle", "negative", "black"].map((status, i) => (
                <Bar
                  key={`${index}-${status}`}
                  dataKey={(entry) =>
                    entry.hours[index]?.status === status ? 1 : 0
                  }
                  name={`Hour ${index}`}
                  stackId="a"
                  fill={
                    i === 0
                      ? "#FFFF00"
                      : i === 1
                      ? "#808080"
                      : i === 2
                      ? "#FF0000"
                      : "#000000"
                  }
                  yAxisId="left"
                />
              ))}
            </Fragment>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default UtilizationChart;
