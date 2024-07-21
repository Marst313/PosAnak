import doctorImage from "../../images/hampirStunting.png";

const ResultCalculate = () => {
  return (
    <div className="relative mx-2 flex max-w-4xl items-center rounded-xl bg-white p-6 shadow-lg lg:mx-auto">
      <img
        src={doctorImage}
        alt="Hampir Stunting"
        className="hidden w-1/3 lg:block"
      />
      <div className="ml-6 flex-1 text-start">
        <h2 className="text-xl font-bold text-green-600">Hasil Cek Stunting</h2>
        <h3 className="text-3xl font-bold text-yellow-500 lg:text-4xl">
          Hampir Stunting
        </h3>
        <p className="mt-2 text-justify text-sm text-gray-500 lg:mt-4 lg:text-base">
          Berdasarkan data yang Anda masukkan, anak Anda hampir menunjukkan
          tanda-tanda stunting. Ini berarti ada beberapa aspek gizi atau
          kesehatan yang perlu diperhatikan lebih serius.
        </p>
        <ul className="mt-3 space-y-4 lg:mt-6">
          <li className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
              <span className="text-xl text-green-600">🍎</span>
            </div>
            <p className="flex-1 text-sm text-green-700 lg:text-base">
              Tingkatkan asupan gizi anak dengan makanan yang kaya vitamin dan
              mineral.
            </p>
          </li>
          <li className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
              <span className="text-xl text-green-600">👩‍⚕️</span>
            </div>
            <p className="flex-1 text-sm text-green-700 lg:text-base">
              Konsultasikan dengan ahli gizi atau dokter anak untuk mendapatkan
              saran yang tepat.
            </p>
          </li>
          <li className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
              <span className="text-xl text-green-600">🛌</span>
            </div>
            <p className="flex-1 text-sm text-green-700 lg:text-base">
              Pastikan anak mendapat cukup istirahat dan aktivitas fisik yang
              memadai.
            </p>
          </li>
        </ul>
        <div className="flex w-full justify-end">
          <button
            className="mt-6 flex items-center rounded-full bg-green-600 px-6 py-2 text-white shadow-md"
            onClick={closeModalstunting}
          >
            <span className="mr-2">🛡️</span>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultCalculate;
