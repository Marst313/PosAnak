import gambarAnak from "../../images/dashboard/gambarAnak.png";
import ruller from "../../images/dashboard/ruller.png";
import arrow from "../../images/dashboard/arrow.png";
import timbangan from "../../images/dashboard/scales.png";
import Charts from "../Charts";
import { convertDateString, convertUsia } from "../../utils/function";

const SingleDataAnak = ({ nik, nama, child_growth, tanggalLahir }) => {
  const growthData = child_growth ? JSON.parse(child_growth) : [];

  const formattedDate = convertDateString(tanggalLahir);
  const usia = convertUsia(formattedDate);

  const dataPertumbuhan = growthData?.map((data) => ({
    weight: data.weight || 0,
    height: data.height || 0,
    date: new Date(data.date).toLocaleDateString("id-ID"),
  }));

  const latestGrowth = growthData[growthData.length - 1] || {};
  const height = latestGrowth.height || 0;
  const weight = latestGrowth.weight || 0;

  return (
    <div>
      <div className="mb-5 w-full justify-between gap-5 lg:flex">
        <div className="text-darkGreen my-5 flex items-start gap-5 rounded-xl bg-white p-10 lg:my-0 lg:w-2/3">
          <img
            src={gambarAnak}
            alt="gambar anak"
            className="hidden w-72 lg:block"
          />

          <ul className="mt-5 flex flex-col justify-start gap-10">
            <li>
              <h5>NIK</h5>
              <p className="mt-3 text-3xl font-medium">{nik}</p>
            </li>

            <li>
              <h5>NAMA</h5>
              <p className="mt-3 text-3xl font-medium">{nama}</p>
            </li>

            <li>
              <h5>Umur</h5>
              <p className="mt-3 text-3xl font-medium">{usia}</p>
            </li>
          </ul>
        </div>

        <ul className="mt-5 flex h-full flex-col justify-between gap-3 lg:mt-0 lg:w-1/2">
          {/* Tinggi */}
          <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5">
            <div className="flex">
              <img src={ruller} alt="gambar penggaris" />
              <img src={arrow} alt="gambar panah" />
            </div>

            <div className="relative flex flex-col">
              <h5>Tinggi</h5>
              <h1 className="text-5xl font-semibold ordinal">
                {height}{" "}
                <span className="absolute top-7 text-sm font-medium">Cm</span>
              </h1>
            </div>
          </li>

          {/* Berat */}
          <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5 lg:mt-6">
            <div className="flex">
              <img src={timbangan} alt="gambar timbangan" />
            </div>

            <div className="relative flex flex-col">
              <h5>Berat</h5>
              <h1 className="text-5xl font-semibold">
                {weight}{" "}
                <span className="absolute top-7 text-sm font-medium">Kg</span>
              </h1>
            </div>
          </li>

          {/* Tanggal Lahir */}
          <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5 lg:mt-5">
            <div className="from-stabiloGreen to-stabiloLightGreen relative flex h-28 w-28 flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-l">
              <h1 className="text-4xl font-bold">
                {new Date(tanggalLahir).getDate()}
              </h1>
              <h5 className="text-lg font-semibold">
                {new Date(tanggalLahir).toLocaleString("default", {
                  month: "long",
                })}
              </h5>
            </div>

            <div className="relative flex flex-col">
              <h1 className="text-3xl font-semibold lg:text-4xl">Tanggal </h1>
              <h1 className="text-3xl font-semibold lg:text-5xl">Lahir </h1>
            </div>
          </li>

          {/* Chart Mobile */}
          <li>
            <div className="flex w-full lg:hidden">
              <Charts dataPertumbuhan={dataPertumbuhan} />
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-5 hidden w-full lg:flex">
        <Charts dataPertumbuhan={dataPertumbuhan} />
      </div>
    </div>
  );
};

export default SingleDataAnak;
