import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
  Button,
  Typography,
  NotFound as AUNotFound,
} from "automation-unified-frontend";

function NotFound() {
  const { t } = useTranslation("app");

  const navigate = useNavigate();

  return (
    <AUNotFound withImg mainContent="">
      <Typography component="h1" variant="h4" color="warning" gutterBottom>
        {t("notFoundHeader")}
      </Typography>
      <Typography component="p" variant="body1" color="grey" gutterBottom>
        {t("notFoundMessage")}
      </Typography>
      <Button onClick={() => navigate(-1)}>{t("goBack")}</Button>
    </AUNotFound>
  );
}

export default NotFound;
