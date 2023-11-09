import axios from "axios";
import { envName, isLocal, isProduction } from "../configs";
import { clearCookies } from "./cookies";

const shouldReload = (statusCode) => {
  if (statusCode === 401) return true; // Session expired, requires reload
  if (statusCode >= 400 && statusCode < 600) return false; // All others will be ignored

  return true; // All not defined errors like CORS, require reload
};

const axiosUploader = async (configObject) => {
  const baseURL = `http${
    isProduction ? "s" : ""
  }://gp-iprights-e-filing-bpm-service.${envName}.internal.saip.gov.sa/`;

  const {
    setUploadProgress,
    data,
    attachmentType,
    requestId,
    appId,
    appType,
    url,
  } = configObject;

  try {
    let uploadProgress;
    const formData = new FormData();
    [...data].forEach((file) => formData.append("files", file));

    const response = await axios({
      baseURL,
      withCredentials: true,
      headers: {
        "Doc-Type-Name": attachmentType,
        "App-Type": appType,
        ...(requestId && { "request-Id": requestId }),
        ...(appId && { "application-id": appId }),
      },
      url: url,
      method: "POST",
      data: formData,
      onUploadProgress: (upload) => {
        uploadProgress = Math.round((100 * upload.loaded) / upload.total);
        setUploadProgress(uploadProgress); //progress updating function
      },
    });

    return { data: response.data };
  } catch (error) {
    if (error) {
      if (shouldReload(error.response?.status) && !isLocal) {
        clearCookies();
        window.location.reload();
      }
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  }
};

export default axiosUploader;
