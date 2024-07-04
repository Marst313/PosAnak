import React from "react";
import { useSelector } from "react-redux";
import { convertDateString, convertTime } from "../utils/function";

const ScheduleRight = ({ style }) => {
  const data = useSelector((store) => store.activity);

  return (
    <div
      className={`h-fit rounded-3xl bg-white p-7 py-24 shadow-xl lg:w-96 ${style}`}
    >
      <h1 className="text-darkGreen mb-5 text-lg font-bold">Jadwal</h1>
      {/*    */}
      <ul className="flex flex-col gap-16">
        {data.dataKegiatan.map((item) => {
          return (
            <li className="relative flex items-center" key={item._id}>
              <h3 className="text-darkGreen w-52 text-sm font-light">
                {convertDateString(item.date)}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d9d9d9"
                  d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
                />
              </svg>
              <div className="bg-grey w-10/12 border border-b"></div>

              <div className="bg-lightGreen absolute mt-16 translate-x-1/2 rounded-lg px-3 py-3 lg:px-5">
                <p className="text-white">{item.title.slice(0, 20)}</p>
                <p className="font-thin text-white">
                  {convertTime(item.waktuMulai)} -
                  {convertTime(item.waktuSelesai)} WIB
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScheduleRight;
