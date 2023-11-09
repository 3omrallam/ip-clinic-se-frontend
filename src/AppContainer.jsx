import { useEffect, Suspense, useMemo } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { appSelector, setUserData } from "./state/appSlice";
import {
  useGetUserInfoQuery,
  useLazyHeartBeatQuery,
} from "./state/services/generic";

import { useTranslation } from "react-i18next";

import { ThemeProvider, Toast } from "automation-unified-frontend";

import { langs } from "./constants/system";

// import "./utils/keycloak";
import Loader from "./components/Loader";
import ErrBoundary from "./components/ErrBoundary";
import { hideToast, toastSelector } from "./state/toastSlice";

function AppContainer({ children }) {
  const { i18n } = useTranslation("app");
  window.document.body.dir = i18n.dir();

  const dispatch = useDispatch();
  const { userData } = useSelector(appSelector);
  const { show, onClose, onDurationEnd, ...rest } = useSelector(toastSelector);
  // has hit /se
  const hasLanded = window.location.href.includes("/se/");
  useEffect(() => {
    if (hasLanded) return;

    window.location.href = window.origin + "/se/";
  }, [hasLanded]);

  // triggers an API call each interval to refresh session
  const [heartBeat] = useLazyHeartBeatQuery();
  useEffect(() => {
    if (!hasLanded) return;
    const intervalID = setInterval(() => heartBeat(), 55e3);

    return () => clearInterval(intervalID);
  }, [heartBeat, hasLanded]);

  const { data: userInfo } = useGetUserInfoQuery(undefined, {
    skip: !hasLanded,
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    if (!userInfo) return;

    dispatch(setUserData(userInfo));
  }, [dispatch, userInfo]);

  if (!hasLanded || !userData) return <Loader />;

  return (
    <ThemeProvider
      theme={{
        rtl: langs[i18n.language].dir === "rtl",
        language: i18n.language,
      }}
    >
      {show && (
        <Toast
          show={show}
          onClose={() => {
            if (typeof onClose == "function") onClose();
            dispatch(hideToast());
          }}
          onDurationEnd={() => {
            if (typeof onDurationEnd == "function") onDurationEnd();
            dispatch(hideToast());
          }}
          {...rest}
        />
      )}

      <Suspense fallback={<Loader />}>
        <ErrBoundary> {children}</ErrBoundary>
      </Suspense>
    </ThemeProvider>
  );
}

export default AppContainer;
