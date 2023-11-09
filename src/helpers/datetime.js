import { langs } from "../constants/system";
import { arSA, enUS } from "date-fns/locale";

export const localesMap = {
  [langs.en.key]: enUS,
  [langs.ar.key]: arSA,
};

export const gregorianFormats = {
  be: "YYYY-MM-DD",
  reversedBE: "DD-MM-YYYY",
  dateShort: "DD/MM/YYYY",
  dateShortSpaceSeparated: "DD MMMM YYYY",
  dateTimeShort: "DD/MM/yyyy hh:mm aaa",
  timeShort: "hh:mm aa",
  timeBE: "HH:mm",
  time: "hh:mmaaa",
  dayLong: "EEEE",
};

export const hijriFormats = {
  be: "iYYYY-iMM-iDD",
  reversedBE: "iDD-iMM-iYYYY",
  dateShort: "iDD/iMM/iYYYY",
  dateShortSpaceSeparated: "iDD iMMMM iYYYY",
  dateTimeShort: "iDD/iMM/iyyyy hh:mm aaa",
  timeShort: "hh:mm aa",
  timeBE: "HH:mm",
  time: "hh:mmaaa",
  dayLong: "EEEE",
};

export const isDateValid = (dateStr) => !isNaN(new Date(dateStr));
