import { isDevelopment, isTest, isStage, isProduction } from "../configs";

export const clearCookies = () => {
  // SE staging (dev/test) envs
  if (isDevelopment || isTest) {
    document.cookie =
      "stgseoidc=; domain=.saip.gov.sa; path=/; expires=" +
      new Date(0).toUTCString();
  }

  // SE production (stag/prod) envs
  if (isStage || isProduction) {
    document.cookie =
      "prdseoidc=; domain=.saip.gov.sa; path=/; expires=" +
      new Date(0).toUTCString();
  }
};
