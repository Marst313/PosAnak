import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '12/02/2023',
    Berat: 0,
    Tinggi: 0,
  },
  {
    date: '12/02/2023',
    Berat: 30,
    Tinggi: 140,
  },
  {
    date: '12/02/2023',
    Berat: 40,
    Tinggi: 142,
  },
  {
    date: '12/02/2023',
    Berat: 50,
    Tinggi: 142,
  },
  {
    date: '12/02/2023',
    Berat: 55,
    Tinggi: 142,
  },
  {
    date: '12/02/2023',
    Berat: 56,
    Tinggi: 143,
  },
  {
    date: '12/02/2023',
    Berat: 45,
    Tinggi: 155,
  },
];

const Charts = () => {
  return (
    <ResponsiveContainer width="75%" height="50%" className="bg-white rounded-2xl p-5 my-5 ">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Tinggi" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Berat" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Charts;
