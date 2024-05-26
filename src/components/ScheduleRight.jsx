import React from 'react';

const ScheduleRight = ({ style }) => {
  return (
    <div className={`rounded-3xl bg-white shadow-xl lg:w-96 h-fit  p-10 ${style}`}>
      <h1 className="text-darkGreen text-lg font-bold mb-5">Jadwal</h1>
      {/*    */}
      <ul className="flex flex-col gap-16">
        <li className="flex items-center relative">
          <h3 className="text-grey font-light text-xs">09.00</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#d9d9d9"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
            />
          </svg>
          <div className="border-b border bg-grey w-10/12"></div>

          <div className="bg-lightGreen absolute translate-x-1/2 mt-16 py-3 px-3 lg:px-5 rounded-lg ">
            <p className="text-white">Imunisasi Balita</p>
            <p className="text-white font-thin">09.00 - 10.00 WIB</p>
          </div>
        </li>

        <li className="flex items-center relative">
          <h3 className="text-grey font-light text-xs">10.00</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#d9d9d9"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
            />
          </svg>
          <div className="border-b border bg-grey w-10/12"></div>
        </li>

        <li className="flex items-center relative">
          <h3 className="text-grey font-light text-xs">11.00</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#d9d9d9"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
            />
          </svg>
          <div className="border-b border bg-grey w-10/12"></div>
        </li>

        <li className="flex items-center relative">
          <h3 className="text-grey font-light text-xs">12.00</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#d9d9d9"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
            />
          </svg>
          <div className="border-b border bg-grey w-10/12"></div>
        </li>

        <li className="flex items-center relative">
          <h3 className="text-grey font-light text-xs">13.00</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#d9d9d9"
              d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Z"
            />
          </svg>
          <div className="border-b border bg-grey w-10/12"></div>
        </li>
      </ul>
    </div>
  );
};

export default ScheduleRight;
