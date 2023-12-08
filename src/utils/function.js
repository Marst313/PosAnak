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
