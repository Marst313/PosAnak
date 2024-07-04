import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { setGraph } from "../features/kids/kids";

const Charts = ({ dataPertumbuhan }) => {
  const dispatch = useDispatch();
  const { singleDataAnak } = useSelector((store) => store.kids);

  const data = dataPertumbuhan || [
    {
      weight: 0,
      height: 0,
      date: "20/12/2024",
    },
    {
      weight: 50,
      height: 60,
      date: "23/12/2024",
    },
    {
      weight: 70,
      height: 80,
      date: "30/12/2024",
    },
  ];
  return (
    <div className="my-5 w-full rounded-2xl bg-white p-5 pb-10">
      <div className="my-3 flex justify-between gap-5">
        <h1 className="text-darkGreen text-2xl font-bold">
          Perkembangan Anak :
          <span className="text-stabiloGreen"> {singleDataAnak.nama} </span>
        </h1>
        <button
          type="button"
          onClick={() => dispatch(setGraph(false))}
          className="text-redPrimary border-redPrimary hover:bg-redPrimary hover:text-coldWhite flex h-8 w-8 items-center justify-center rounded-lg border bg-transparent text-sm"
        >
          <svg
            className="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
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
          <Line
            type="monotone"
            dataKey="height"
            name="Tinggi"
            stroke="#FF0000"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            name="Berat"
            stroke="#0057FF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
