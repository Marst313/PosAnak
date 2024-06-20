import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ dataPertumbuhan }) => {
  const data = dataPertumbuhan || [
    {
      weight: 0,
      height: 0,
      date: '20/12/2024',
    },
    {
      weight: 50,
      height: 60,
      date: '23/12/2024',
    },
    {
      weight: 70,
      height: 80,
      date: '30/12/2024',
    },
  ];
  return (
    <div className="bg-white rounded-2xl p-5 my-5 pb-10 w-full">
      <h1 className="text-2xl text-darkGreen font-bold">Perkembangan Anak</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
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
          <Line type="monotone" dataKey="height" name="Tinggi" stroke="#FF0000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="weight" name="Berat" stroke="#0057FF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
