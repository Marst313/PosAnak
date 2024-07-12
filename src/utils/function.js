import { jwtDecode } from "jwt-decode";

export const convertUsia = (tanggalLahir) => {
  const today = new Date().toLocaleDateString("en-GB");

  const [yearBirth, monthBirth, dayBirth] = tanggalLahir.split("-");

  const [day, month, year] = today.split("/");
  let format = "Tahun";

  let umur = +year - +yearBirth;
  if (umur < 1) {
    umur = +month - +monthBirth;
    format = "Bulan";

    if (umur < 1) {
      umur = +day - +dayBirth;
      format = "Hari";
    }
  }

  return `${umur} ${format}`;
};

export const parseStringJson = (string) => {
  try {
    const jsonString = string.replace(/'/g, '"');
    const correctedJsonString = jsonString.replace(/(\w+):/g, '"$1":');
    const result = JSON.parse(correctedJsonString);
    return result;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export const converDateId = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return formattedDate;
};

export const convertTime = (time) => {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};

export const convertHoursToSecond = (time) => {
  const [jam, menit] = time.split(":").map(Number);
  // Hitung total detik
  const detik = jam * 3600 + menit * 60;

  return detik;
};

export const countPostNewsDateCreated = (date) => {
  const today = new Date();
  const tanggalPostDate = new Date(date);

  // Hitung selisih waktu dalam milidetik
  const selisihWaktu = today - tanggalPostDate;

  // Hitung jumlah hari
  const jumlahHari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));

  // Hitung jumlah jam jika tanggalnya sama
  const jumlahJam = Math.floor(selisihWaktu / (1000 * 60 * 60)) % 24;

  const jumlahMenit = Math.floor(selisihWaktu / (1000 * 60)) % 60;

  if (jumlahHari > 0) {
    return `${jumlahHari} hari yang lalu`;
  } else if (jumlahJam > 0) {
    return `${jumlahJam} jam yang lalu`;
  } else {
    return `${jumlahMenit} menit yang lalu`;
  }
};

export const filteringData = (
  data,
  filterNamaKegiatan,
  filterKategori,
  filterWaktu,
) => {
  const filteredData = data
    ?.filter((item) => item.title.toLowerCase().includes(filterNamaKegiatan))
    ?.filter((item) => item.description.toLowerCase().includes(filterKategori))
    ?.filter((item) => item.date.toLowerCase().includes(filterWaktu));

  return filteredData;
};

export function convertDateString(dateStr) {
  const date = new Date(dateStr);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // getUTCMonth() returns month from 0-11
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
