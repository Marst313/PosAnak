import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ dataPertumbuhan }) => {
  const { height: Tinggi, weight: Berat } = dataPertumbuhan;
  return (
    <ResponsiveContainer width="100%" height="50%" className={`bg-white rounded-2xl p-5 my-5 pb-10 `}>
      <h1 className="text-2xl text-darkGreen font-bold ">Perkembangan Anak</h1>
      <LineChart
        width={500}
        height={300}
        data={dataPertumbuhan}
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
  );
};

export default Charts;
