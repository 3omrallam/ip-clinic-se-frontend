import { localesKeyMap } from "../constants/system";
import {
  gregorianFormats,
  hijriFormats,
  isDateValid,
} from "../helpers/datetime";
import { useTranslation } from "react-i18next";
import moment_hijri from "moment-hijri";
import moment from "moment";
export {
  gregorianFormats,
  hijriFormats,
  isDateValid,
} from "../helpers/datetime";

export const useDate = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const getGregorianDate = (
    date,
    options = { formatStr: gregorianFormats.dateShortSpaceSeparated },
  ) => {
    const newDate = new Date(date);
    if (!isDateValid(newDate)) return null;

    moment.locale(localesKeyMap[language]);
    const formattedDate = moment(date).format(options.formatStr);

    return formattedDate;
  };

  const getHijriDate = (
    date,
    options = { formatStr: hijriFormats.dateShortSpaceSeparated },
  ) => {
    const newDate = new Date(date);
    if (!isDateValid(newDate)) return null;
    moment_hijri.locale(localesKeyMap[language]);
    const formattedDate = moment_hijri(newDate).format(options.formatStr);

    return formattedDate;
  };

  return [getGregorianDate, getHijriDate];
};
