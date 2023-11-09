import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import clsx from "clsx";
import { Button, Typography } from "automation-unified-frontend";


import classes from "./ErrBoundary.module.scss";

function ErrorFallback({ isContained, error, resetErrorBoundary }) {
  const { t } = useTranslation("app");

  const location = useLocation();
  const navigate = useNavigate();

  const errLocationRef = useRef(location);
  useEffect(() => {
    if (errLocationRef.current === location) return;

    resetErrorBoundary();
  }, [resetErrorBoundary, location]);

  return (
    <div
      role="alert"
      className={clsx({
        [classes.fallbcakContainer]: !isContained,
        [classes.fallbcakContainerContained]: isContained,
      })}
    >
      <img alt="error" src={''} className={classes.fallbackImage} />

      <Typography component="h1" variant="h4" color="warning" gutterBottom>
        {t("errorHeader")}
      </Typography>
      <Typography component="p" variant="body1" color="grey" gutterBottom>
        {t("errorMessage")}
      </Typography>
      <Button onClick={() => navigate(-1)}>{t("goBack")}</Button>
    </div>
  );
}

ErrorFallback.propTypes = {
  isContained: PropTypes.bool,
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
