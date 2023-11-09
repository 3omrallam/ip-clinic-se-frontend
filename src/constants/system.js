export const langs = {
  en: { name: "english", key: "en", dir: "ltr" },
  ar: { name: "arabic", key: "ar", dir: "rtl" },
};

export const localesKeyMap = {
  en: "en",
  ar: "ar_SA",
};

export const authTypes = { resident: "r", foreign: "f" };
export const baseRoutes = { resident: "kc", foreign: "ic" };
export const userBaseRouteMap = {
  [authTypes.resident]: baseRoutes.resident,
  [authTypes.foreign]: baseRoutes.foreign,
};

export const CUSTOMER_TYPES = {
  governmentAgency: "GOVERNMENT_AGENCY",
  resdientPerson: "NATURAL_PERSON_WITH_NATIONALITY",
  foreignPerson: "NATURAL_PERSON_WITH_FOREIGN_NATIONALITY",

  resdientCorp: "LEGAL_ENTITY",
  foreignCorp: "FOREIGN_CORPORATION",
  agent: "AGENT",
};

export const FEATURE_TYPES = {
  admin: "ADMINISTRATOR",

  customers: "CUSTOMER",

  patents: "PATENT",
  trademarks: "TRADEMARK",
  designs: "INDUSTRIAL_DESIGN",

  tahaqqaq: "THQQ",
  inspections: "INSPECTIONS",
  complaints: "COMPLAINT",

  publication: "PUBLICATION",

  quality: "EQM",

  appeal: "APPEAL",

  assistiveServices: "ASSISTIVE_SERVICES",
  certificatesServices: "CERTIFICATES",
};

export const ROLE_TYPES = {
  admin: "ADMINISTRATOR",

  // patents + trademarks + designs
  checker: "CHECKER",
  checkersHead: "HEAD_OF_CHECKER",
  classificator: "CLASSIFICATION_SPECIALIST",
  examiner: "EXAMINER",
  examinersHead: "HEAD_OF_EXAMINER",

  // thqq + inspections
  employee: "EMPLOYEE",
  supervisor: "SUPERVISOR",

  // publication
  specialist: "SPECIALIST", // appeal + quality + assistive services + certificates
  auditor: "AUDITOR",

  // assistive services
  agenciesChecker: "AGENCIES_CHECKER",

  // quality
  manager: "MANAGER",
  evaluator: "EVALUATOR",
  expert: "EXPERT",
};

export const TOAST_DEAFULT_SETTING = {
  title: "test",
  duration: 5000,
  position: "bottom-start",
  type: "card",
  variant: "primary",
};
