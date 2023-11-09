export const regex = {
  arabicOnly: /^[\u0621-\u064A\s]+(-|&|[0-9])*[\u0621-\u064A\s]+$/,
  englishOnly: /^[a-zA-Z\s]+(-|&|[0-9])*[a-zA-Z0-9\s]+$/,
  startWith7: /^(7)/,
  startWith7AndAcceptNums: /^(7)([0-9]{9})$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  numbersOnly: /^[0-9]*$/,
};
