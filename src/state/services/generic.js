import { createApi } from "@reduxjs/toolkit/query/react";
import createCustomBaseQuery from "../../state/services/createCustomBaseQuery";

const userInfoDto = ({ id, email, username, attributes: att, ...rest }) => ({
  uuid: id || "",
  email: email || "",
  username: username || "",
  personal: {
    mobile: att?.mobile?.[0] || "",
    gender: att?.gender?.[0] || "",
    nationality: att?.nationality?.[0] || "",
    arabicNationality: att?.arabicNationality?.[0] || "",
    nationalityCode: att?.nationalityCode?.[0] || "",
    arabicFirstName: att?.arabicFirstName?.[0] || "",
    arabicFatherName: att?.arabicFatherName?.[0] || "",
    arabicFamilyName: att?.arabicFamilyName?.[0] || "",
    englishFirstName: att?.englishFirstName?.[0] || "",
    englishFatherName: att?.englishFatherName?.[0] || "",
    englishFamilyName: att?.englishFamilyName?.[0] || "",
    idExpiryDateGregorian: att?.idExpiryDateGregorian?.[0] || "",
    iqamaExpiryDateGregorian: att?.iqamaExpiryDateGregorian?.[0] || "",
    cardIssueDateGregorian: att?.cardIssueDateGregorian?.[0] || "",
    countryName: att?.countryName?.[0] || "",
    issueLocationAr: "",
    issueLocationEn: "",
  },
  ...rest,
});

export const genericAPI = createApi({
  reducerPath: "genericServices",
  baseQuery: createCustomBaseQuery({ serviceName: "e-filing-bpm-service" }),

  keepUnusedDataFor: 1,

  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: `/user/info`,
      }),
      transformResponse: (response) => userInfoDto(response.payload),
    }),
    heartBeat: builder.query({
      query: () => ({
        url: `/user/health`,
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useLazyHeartBeatQuery } = genericAPI;
