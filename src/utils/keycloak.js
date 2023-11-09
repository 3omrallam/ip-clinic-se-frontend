import Keycloak from "keycloak-js";
import { kcNafathConfigs, kcForeignConfigs } from "../configs";

import rsa from "jsrsasign";

import { setStorageItem, getStorageItem, deleteStorageItem } from "./storage";

import { authTypes } from "../constants/system";

import { dispatch } from "./store";
import { setIsAuthing, userLoggedIn, userLoggedOut } from "../state/appSlice";

import { isLocal } from "../configs";

let kc;
let refreshIntervalID;

// HELPERS --------------------------------------------
// These helpers work by default as keycloak-js is default
// If arguements are passed, then skip keycloack-js
function decodeToken(token) {
  const data = rsa.jws.JWS.readSafeJSONString(
    rsa.b64utoutf8(token.split(".")[1]),
  );
  return data;
}
function periodicallyRefreshToken() {
  refreshIntervalID && clearInterval(refreshIntervalID);
  // refresh token each 5 mins
  refreshIntervalID = setInterval(() => {
    const authType = getStorageItem("local", "aT") || authTypes.resident;

    authType === authTypes.resident ? kc.updateToken(290) : kcRefreshToken();
  }, 3e5);
}
function registerUser(accessToken = kc.token, refreshToken = kc.refreshToken) {
  const userData = decodeToken(accessToken);
  dispatch(userLoggedIn({ userData, accessToken, refreshToken }));

  periodicallyRefreshToken();
}
function unregisterUser() {
  const authType = getStorageItem("local", "aT") || authTypes.resident;

  authType === authTypes.resident && kc.clearToken();
  dispatch(userLoggedOut());

  clearInterval(refreshIntervalID);
}
// END HELPERS -----------------------------------------

// Resident Keycloak (Default) -------------------------
function initAutoKeycloak(authType) {
  kc = new Keycloak(
    authType === authTypes.resident ? kcNafathConfigs : kcForeignConfigs,
  );
  kc.onAuthSuccess = registerUser;
  kc.onAuthError = unregisterUser;
  kc.onAuthRefreshSuccess = registerUser;
  kc.onAuthRefreshError = unregisterUser;
  kc.onAuthLogout = unregisterUser;
  kc.onTokenExpired = unregisterUser;

  dispatch(setIsAuthing(true));
  kc.init({
    onLoad: "login-required",
    pkceMethod: "S256",
    checkLoginIframe: false,
    silentCheckSsoRedirectUri: window.location.origin,
  }).then((isAuthed) => {
    isAuthed && periodicallyRefreshToken();
    dispatch(setIsAuthing(false));
  });
}
// END Resident Keycloak (Default) ---------------------

// Foreign Keycloack (Secondary) -----------------------
async function kcLoginWithCreds(username, password) {
  const response = await fetch(
    `${kcForeignConfigs.url}/realms/${kcForeignConfigs.realm}/protocol/openid-connect/token`,
    {
      method: "POST",
      body: [
        "grant_type=password",
        `client_id=${kcForeignConfigs.clientId}`,
        `client_secret=${kcForeignConfigs.credentials.secret}`,
        `username=${username}`,
        `password=${password}`,
      ].join("&"),
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    },
  );
  response.body
    .getReader()
    .read()
    .then(function (data) {
      const resString = new TextDecoder("utf-8").decode(data.value);
      const resData = JSON.parse(resString);

      registerUser(resData.access_token, resData.refresh_token);

      setStorageItem("local", "aT", authTypes.foreign);
      setStorageItem("local", "t", resData.access_token);
      setStorageItem("local", "rT", resData.refresh_token);
    });
}
async function kcRefreshToken() {
  const refreshToken = getStorageItem("local", "rT");

  const response = await fetch(
    `${kcForeignConfigs.url}/realms/${kcForeignConfigs.realm}/protocol/openid-connect/token`,
    {
      method: "POST",
      body: [
        "grant_type=refresh_token",
        `client_id=${kcForeignConfigs.clientId}`,
        `client_secret=${kcForeignConfigs.credentials.secret}`,
        `refresh_token=${refreshToken}`,
      ].join("&"),
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    },
  );

  response.body
    .getReader()
    .read()
    .then(function (data) {
      const resString = new TextDecoder("utf-8").decode(data.value);
      const resData = JSON.parse(resString);

      if (resData.error) {
        unregisterUser();
        return;
      }

      registerUser(resData.access_token, resData.refresh_token);

      setStorageItem("local", "aT", authTypes.foreign);
      setStorageItem("local", "t", resData.access_token);
      setStorageItem("local", "rT", resData.refresh_token);
    });
}
async function kcLogout() {
  const accessToken = getStorageItem("local", "t");
  const refreshToken = getStorageItem("local", "rT");

  const response = await fetch(
    `${kcForeignConfigs.url}/realms/${kcForeignConfigs.realm}/protocol/openid-connect/logout`,
    {
      method: "POST",
      body: [
        `client_id=${kcForeignConfigs.clientId}`,
        `client_secret=${kcForeignConfigs.credentials.secret}`,
        `refresh_token=${refreshToken}`,
      ].join("&"),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    },
  );
  if (response.ok) {
    unregisterUser();

    deleteStorageItem("local", "aT");
    deleteStorageItem("local", "t");
    deleteStorageItem("local", "rT");
  }
}
// END Foreign Keycloack (Secondary) -------------------

export const initKeycloack = () => {
  if (!isLocal) return;

  const authType = getStorageItem("local", "aT");
  if (!authType) return;

  initAutoKeycloak(authType);
};
export const login = (username, password) => {
  if (username && password) {
    kcLoginWithCreds(username, password);
  } else {
    kc.login();
  }
};
export const logout = () => {
  const authType = getStorageItem("local", "aT") || authTypes.resident;

  if (authType === authTypes.foreign) {
    kcLogout();
  } else {
    kc.logout();
  }

  deleteStorageItem("local", "usedCustomerCode");
};
