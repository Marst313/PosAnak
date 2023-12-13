export const convertUsia = (tanggalLahir) => {
  const today = new Date().toLocaleDateString('en-GB');

  const [dayBirth, monthBirth, yearBirth] = tanggalLahir.split('/');
  const [day, month, year] = today.split('/');
  let format = 'Tahun';

  let umur = +year - +yearBirth;
  if (umur < 1) {
    umur = +month - +monthBirth;
    format = 'Bulan';

    if (umur < 1) {
      umur = +day - +dayBirth;
      format = 'Hari';
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
    console.error('Error parsing JSON:', error);
  }
};

export const converDateId = (date) => {
  const formattedDate = new Date(date).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return formattedDate;
};

export const convertTime = (time) => {
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};

export const convertHoursToSecond = (waktu) => {
  const [jam, menit] = waktu.split(':').map(Number);
  // Hitung total detik
  const detik = jam * 3600 + menit * 60;

  return detik;
};
