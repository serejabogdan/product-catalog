export function pluralType(value, oneType, twoType, threeType) {
  value = Math.abs(value);
  value %= 100;
  if (value >= 5 && value <= 20) {
    return threeType;
  }
  value %= 10;
  if (value === 1) {
    return oneType;
  }
  if (value >= 2 && value <= 4) {
    return twoType;
  }
  return threeType;
}

export function formDataConvert(data) {
  const newData = data;
  newData.file = data.file[0];
  if (data.date) {
    const oneDayMs = 86400000;
    const dateInMs = Date.parse(data.date);
    newData.date = dateInMs + oneDayMs;
  }

  return newData;
}

export function getDateToday() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month > 10 ? month : `0${month}`;
  day = day > 10 ? day : `0${day}`;

  return `${year}-${month}-${day}`;
}
