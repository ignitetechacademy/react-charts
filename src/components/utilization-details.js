import React, { Fragment } from 'react';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Cell,
    Bar,
} from 'recharts';
import NavBar from './nav-bar';

// Sample Data
const data = [
    {
        date: '11/06/2024',
        hours: [1, 0, 1, 1], //, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        duration: 8.15,
    },
    {
        date: '12/06/2024',
        hours: [0, 1, 0, 0],  //, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
        duration: 8.37,
    },
    {
      date: '13/06/2024',
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

const colors = ['#A9A9A9', '#FFD700']; //, '#FF00FF', '#FFFF00'];

const UtilizationDetailsStatic = () => {

     alert("Loading form data ...");

    return <Fragment>
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
                label={{ value: 'Hour', position: 'insideBottomRight', offset: -20 }}
            />
            <YAxis dataKey="date" type="category" />
            <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
            <Legend />

            {data.map((entry, index) =>
                <Bar dataKey="hours" key={index} fill="#8884d8">
                    {entry.hours.map((hour, i) =>
                    <Fragment>
                        {console.log(i)}
                        <Cell
                            key={`cell-${index}-${i}`}
                            fill={colors[hour]}
                             x={(i / 23) * 1000}
                            width={1000 / 24}
                            y={(index + 2) * 45}
                            height={40}
                        />
                        </Fragment>
                    )}
                </Bar>
            )}
        </BarChart>
    </Fragment>


};

export default UtilizationDetailsStatic;



