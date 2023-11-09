// Envs configs
export const envName = process.env.ENV;
export const isDevelopment = process.env.ENV === "development";
export const isTest = process.env.ENV === "test";
export const isStage = process.env.ENV === "staging";
export const isProduction = process.env.ENV === "production";
export const isMigration = process.env.ENV === "iprightsmigration";
export const isLocal = process.env.IS_LOCAL;

// URLs configs
export const baseURL = process.env.API_URL;
export const mfeURL = process.env.MFE_URL;

export const logoutURL =
  isDevelopment || isTest || isMigration
    ? `https://presso.saip.gov.sa/auth/realms/saipinternal/protocol/openid-connect/logout?redirect_uri=${window.origin}`
    : isStage || isProduction
    ? `https://sso.saip.gov.sa/auth/realms/saipinternal/protocol/openid-connect/logout?redirect_uri=${window.origin}`
    : "";

// Keycloack Configs
export const kcNafathConfigs = {
  url: process.env.KC_NAFATH_URL,
  realm: process.env.KC_NAFATH_REALM,
  clientId: process.env.KC_NAFATH_CLIENT_ID,
  credentials: {
    secret: process.env.KC_NAFATH_CLIENT_SECRET,
  },
  "confidential-port": 0,
};

export const kcForeignConfigs = {
  url: process.env.KC_FOREIGN_URL,
  realm: process.env.KC_FOREIGN_REALM,
  clientId: process.env.KC_FOREIGN_CLIENT_ID,
  credentials: {
    secret: process.env.KC_FOREIGN_CLIENT_SECRET,
  },
  "confidential-port": 0,
};
