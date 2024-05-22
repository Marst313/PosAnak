import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import logoExcel from "../images/dataanak/excel.svg";
import TableAnak from "../components/user/TableAnakUser";
import Charts from "../components/Charts";
import { parseStringJson } from "../utils/function";
import { SearchBarUser } from "../components/user";
import Loading from "../components/Loading";
const DashboardAnak = () => {
  const { dataAnak, isLoading, graphShow, singleDataAnak } = useSelector(
    (store) => store.kids
  );
  const [dataPertumbuhan, setDataPertumbuhan] = useState([]);

  useEffect(() => {
    if (graphShow && singleDataAnak?.fields?.child_growth) {
      const result = parseStringJson(singleDataAnak.fields.child_growth);

      setDataPertumbuhan(result);
    }
  }, [graphShow, singleDataAnak]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none px-4 sm:px-6 lg:px-8 mt-5 ">
      <div className="flex w-full h-fit  gap-3">
        <SearchBarUser />

        <button className="flex items-center gap-2 border-lightGreen border px-10 lg:px-8 py-2 rounded-full h-fit">
          <img src={logoExcel} alt="" />
          Excel
        </button>
      </div>

      {graphShow && <Charts dataPertumbuhan={dataPertumbuhan} />}

      <div className="mb-5">
        <TableAnak graphShow={graphShow} dataAnak={dataAnak.records} />
      </div>
    </section>
  );
};

export default DashboardAnak;
