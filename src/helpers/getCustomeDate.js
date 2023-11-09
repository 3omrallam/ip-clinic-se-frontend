import { APPLICATION_DUE_DATE } from "../constants/application";

const mapInDays = {
  [APPLICATION_DUE_DATE.within1Day]: 1,
  [APPLICATION_DUE_DATE.within3Days]: 3,
  [APPLICATION_DUE_DATE.within1Week]: 7,
  [APPLICATION_DUE_DATE.within1Month]: 30,
  [APPLICATION_DUE_DATE.within2Months]: 2 * 30,
  [APPLICATION_DUE_DATE.within3Months]: 3 * 30,
};

export const getCustomDate = (duration) => {
  let toDay = new Date();
  let result = new Date(toDay);
  result.setDate(result.getDate() + mapInDays[duration]);

  if (duration === APPLICATION_DUE_DATE.allTime || duration === "") {
    return "";
  }
  if (duration === APPLICATION_DUE_DATE.expired) {
    return "EXPIRED";
  }
  if (duration === "today") {
    return toDay.toISOString().slice(0, 19);
  }

  return result.toISOString().slice(0, 19);
};

export function dateFormatter(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = `0${month}`;
  }
  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export const arabicMonths = {
  1: "يناير",
  2: "فبراير",
  3: "مارس",
  4: "ابريل",
  5: "مايو",
  6: "يونيو",
  7: "يوليو",
  8: "أغسطس",
  9: "سبتمبر",
  10: "أكتوبر",
  11: "نوفمبر",
  12: "ديسمبر",
};

export const englishMonths = {
  1: "January",
  2: "Februay",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
