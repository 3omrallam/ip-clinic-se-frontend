import { envName, isLocal, isProduction } from "../../configs";
import { clearCookies } from "../../utils/cookies";

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shouldReload = (statusCode) => {
  if (statusCode === 401) return true; // Session expired, requires reload
  if (statusCode >= 400 && statusCode < 600) return false; // All others will be ignored

  return true; // All not defined errors like CORS, require reload
};

function createCustomBaseQuery({ serviceName, excludeVersion }) {
  return async function (args, api, extraOptions) {
    const query = fetchBaseQuery({
      baseUrl: `http${
        isProduction ? "s" : ""
      }://gp-iprights-${serviceName}.${envName}.internal.saip.gov.sa/se${
        excludeVersion ? "" : "/v1"
      }`,
      prepareHeaders: (headers, { getState }) => {
        // const roles = getState().app?.userData?.roles;
        // return roles
        //   ? headers.set("X-Roles", roles.map((r) => r.code).join(","))
        //   : headers;
        return headers;
      },
      redirect: "error",
      credentials: "include",
    });

    let result = await query(args, api, extraOptions);
    const { error } = result;

    if (error) {
      if (shouldReload(error.status) && !isLocal) {
        clearCookies();
        window.location.reload();
      }
    }

    return result;
  };
}

export default createCustomBaseQuery;
