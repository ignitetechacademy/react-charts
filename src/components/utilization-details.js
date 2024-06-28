import React, { Fragment } from "react";
import Chart from "react-apexcharts";
import NavBar from "./nav-bar";

const rawData = [
  {
    date: "11/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.5, action: 1 },
      { startTime: 1.5, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 1 },
      { startTime: 3.0, endTime: 4.0, action: 1 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 1 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 19.0, action: 1 },
      { startTime: 19.0, endTime: 24.0, action: 0 },
    ],
    duration: 8.15, // Duration in hours (8.15 hours)
  },
  {
    date: "12/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 1 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 1 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 20.0, action: 1 },
      { startTime: 20.0, endTime: 23.0, action: 0 },
      { startTime: 23.0, endTime: 24.0, action: 1 },
    ],
    duration: 8.37,
  },
  {
    date: "13/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 1 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 1 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 21.0, action: 1 },
      { startTime: 21.0, endTime: 24.0, action: 0 },
    ],
    duration: 0.12,
  },
  {
    date: "14/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 1 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 1 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 17.0, action: 1 },
      { startTime: 17.0, endTime: 18.0, action: 1 },
      { startTime: 18.0, endTime: 19.0, action: 0 },
      { startTime: 19.0, endTime: 20.0, action: 0 },
      { startTime: 20.0, endTime: 21.0, action: 1 },
      { startTime: 21.0, endTime: 24.0, action: 0 },
    ],
    duration: 0.45,
  },
  {
    date: "15/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 1 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 0 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 18.0, action: 1 },
      { startTime: 18.0, endTime: 22.0, action: 0 },
      { startTime: 22.0, endTime: 22.3, action: 0 },
      { startTime: 22.3, endTime: 23.3, action: 1 },
      { startTime: 23.3, endTime: 24.0, action: 0 },
    ],
    duration: 0.13,
  },
  {
    date: "16/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 1 },
      { startTime: 6.0, endTime: 7.0, action: 0 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 17.0, action: 0 },
      { startTime: 17.0, endTime: 18.0, action: 1 },
      { startTime: 18.0, endTime: 21.0, action: 1 },
      { startTime: 21.0, endTime: 24.0, action: 0 },
    ],
    duration: 0.38,
  },
  {
    date: "17/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 1 },
      { startTime: 7.0, endTime: 8.0, action: 0 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 18.0, action: 1 },
      { startTime: 18.0, endTime: 20.0, action: 0 },
      { startTime: 20.0, endTime: 22.3, action: 0 },
      { startTime: 22.3, endTime: 24.0, action: 0 },
    ],
    duration: 1.2,
  },
  {
    date: "18/06/2024",
    hours: [
      { startTime: 0.0, endTime: 1.0, action: 0 },
      { startTime: 1.0, endTime: 2.0, action: 0 },
      { startTime: 2.0, endTime: 3.0, action: 0 },
      { startTime: 3.0, endTime: 4.0, action: 0 },
      { startTime: 4.0, endTime: 5.0, action: 0 },
      { startTime: 5.0, endTime: 6.0, action: 0 },
      { startTime: 6.0, endTime: 7.0, action: 0 },
      { startTime: 7.0, endTime: 8.0, action: 1 },
      { startTime: 8.0, endTime: 9.5, action: 1 },
      { startTime: 9.5, endTime: 10.0, action: 0 },
      { startTime: 10.0, endTime: 11.0, action: 1 },
      { startTime: 11.0, endTime: 12.0, action: 1 },
      { startTime: 12.0, endTime: 13.0, action: 0 },
      { startTime: 13.0, endTime: 14.0, action: 0 },
      { startTime: 14.0, endTime: 15.0, action: 1 },
      { startTime: 15.0, endTime: 16.0, action: 0 },
      { startTime: 16.0, endTime: 16.3, action: 1 },
      { startTime: 16.3, endTime: 19.0, action: 0 },
      { startTime: 19.0, endTime: 24.0, action: 0 },
    ],
    duration: 1.2,
  },
];

// Mapping actions to descriptions and colors
const actionDescriptions = {
  1: "Start", // Yellow for Start
  0: "Off", // Gray for Off
  2: "Other", // Black for Other
  "-1": "Idle", // Red for Idle
  // Add other action descriptions as needed...
};

const actionColors = {
  1: "#FFFF00", // Yellow for Start
  0: "#808080", // Gray for Off
  2: "#000000", // Black for Other
  "-1": "#FF0000", // Red for Idle
  // Add other action colors as needed...
};

const UtilizationChart = () => {
  // Function to determine color and duration based on action value
  const getColorAndDuration = (action, startTime, endTime, duration) => {
    let color = actionColors[action] || "#000000"; // Default black color for other actions

    // Calculate hours and minutes
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    const formattedDuration = `${hours}hr ${minutes}m`;

    return { color, duration: formattedDuration };
  };

  // Prepare data for ApexCharts
  const seriesData = Object.keys(actionDescriptions).map((action) => ({
    name: actionDescriptions[action],
    data: rawData.flatMap((entry) =>
      entry.hours
        .filter((hour) => hour.action === parseInt(action))
        .map((hour) => ({
          x: entry.date,
          y: [hour.startTime, hour.endTime],
          fillColor: getColorAndDuration(
            hour.action,
            hour.startTime,
            hour.endTime,
            entry.duration
          ).color,
          action: hour.action,
          duration: getColorAndDuration(
            hour.action,
            hour.startTime,
            hour.endTime,
            entry.duration
          ).duration,
        }))
    ),
  }));

  const chartData = {
    options: {
      chart: {
        type: "rangeBar",
        height: 400,
        width: "80%", // Adjust width as needed
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          rangeBarGroupRows: true,
        },
      },
      xaxis: {
        type: "numeric",
        position: "top",
        min: 0,
        max: 24,
        labels: {
          formatter: function (val) {
            if (typeof val === "number") {
              return val.toFixed(0); // Show hours as whole numbers
            }
            return val;
          },
        },
      },
      yaxis: {
        categories: rawData.map((entry) => entry.date),
      },
      fill: {
        type: "solid",
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      colors: Object.keys(actionDescriptions).map(
        (action) => actionColors[action]
      ),
    },
    series: seriesData,
  };

  // Render the chart component
  return (
    <Fragment>
      <NavBar />
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="rangeBar"
        height={400}
      />
    </Fragment>
  );
};

export default UtilizationChart;
