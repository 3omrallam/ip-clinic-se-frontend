export const APPLICATION_TYPES = {
  // applications
  patents: "PATENT",
  trademarks: "TRADEMARK",
  designs: "INDUSTRIAL_DESIGN",
  consultation: "EXAMINER_CONSULTATION",
  // customer codes
  foreignReg: "FOREIGN_REG",
  organizationReg: "ORG_REG",
  userReg: "USER_REG",
  // tahaqaq
  trademarkOwner: "TRADEMARK_OWNER",
  legalRepresent: "LEGAL_REPRESENTITVE",
  suspicious: "SUSPICIOUS_CASE",
  // assistive services
  opposition: "OPPOSITION",
  appeal: "APPEAL_REQUEST",
  abandonment: "EVICTION",
  extension: "EXTENSION",
  restore: "PETITION_RECOVERY",
  withdrawal: "RETRACTION",
  firstAmendment: "INITIAL_MODIFICATION",
  agentChange: "AGENT_SUBSTITUTION",
  extensionOfProtection: "PROTECTION_PERIOD_EXTENSION_REQUEST",
  licenseModification: "LICENSING_MODIFICATION",
  licenseRegistration: "LICENSING_REGISTRATION",
  ownershipChange: "OWNERSHIP_CHANGE",
  Annualinstallments: "ANNUAL_FEES_PAY",
  renewalFee: "RENEWAL_FEES_PAY",
  eqm: "EQM_REQUEST",
  revokeVoluntary: "VOLUNTARY_REVOKE",
  revokeByCourtOrder: "REVOKE_BY_COURT_ORDER",
  agencyRequest: "TRADEMARK_AGENCY_REQUEST",
  revokeProducts: "REVOKE_PRODUCTS",
};

export const SUPPORT_LOOKUP_MAP = {
  [APPLICATION_TYPES.abandonment]: "eviction",
  [APPLICATION_TYPES.extension]: "extension",
  [APPLICATION_TYPES.restore]: "petition-recovery",
  [APPLICATION_TYPES.withdrawal]: "retraction",
  [APPLICATION_TYPES.firstAmendment]: "initial-modification",
  [APPLICATION_TYPES.agentChange]: "agent-substitution",
  [APPLICATION_TYPES.opposition]: "opposition",
  [APPLICATION_TYPES.extensionOfProtection]: "extension-of-protection",
  [APPLICATION_TYPES.appeal]: "plaint",
  [APPLICATION_TYPES.licenseModification]: "license-modification",
  [APPLICATION_TYPES.licenseRegistration]: "license-registration",
  [APPLICATION_TYPES.ownershipChange]: "ownership-change",
  [APPLICATION_TYPES.Annualinstallments]: "annual-installments",
  [APPLICATION_TYPES.renewalFee]: "renewal-fee",
  [APPLICATION_TYPES.revokeVoluntary]: "revoke-voluntary",
  [APPLICATION_TYPES.revokeByCourtOrder]: "revoke-by-court-order",
  [APPLICATION_TYPES.revokeProducts]: "revoke-products",
};

export const ROOLS = {
  checker: "CHECKER",
  headOfDeapartment: "HEAD_OF_DEPARTMENT",
};

export const APPLICATION_DUE_DATE = {
  allTime: "AllTime",
  expired: "expired",
  within1Day: "within1Day",
  within3Days: "within3Days",
  within1Week: "within1Week",
  within1Month: "within1Month",
  within2Months: "within2Months",
  within3Months: "within3Months",
};

export const SEARCH_TABS = {
  main: "MAIN_REQUESTS",
  assistive: "ASSISTIVE_REQUESTS",
};
