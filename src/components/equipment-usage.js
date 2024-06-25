import React, { Fragment } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import NavBar from './nav-bar';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StaticEqipmentUsage = () => {
  const data = {
    labels: ['Jun 16th', 'Jun 17th', 'Jun 18th'],
    datasets: [
      {
        label: 'Capacity',
        data: [3, 2, 3],
        borderColor: 'rgba(75,192,0,1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Capacity',
        data: [18, 19, 18],
        borderColor: 'rgba(75,0,192,1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Capacity',
        data: [28, 27, 26],
        borderColor: 'rgba(0,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: '%',
        },
      },
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}%`;
          },
        },
      },
    },
  };

  return <Fragment>
    <NavBar />
    <Line data={data} options={options} />
  </Fragment>
};

export default StaticEqipmentUsage;
