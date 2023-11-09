import { MODS_ICONS } from "../constants/icons";

import { isProduction } from "../configs";

function makeRoutingList({ featureFlags, userRoles }) {
  const isStatistics = [
    userRoles?.patents,
    userRoles?.trademarks,
    userRoles?.designs,
    userRoles?.tahaqqaq,
    userRoles?.admin,
  ].some(
    (element) =>
      element?.isExaminer ||
      element?.isExaminersHead ||
      element?.isCheckersHead ||
      element?.isChecker ||
      element?.isSupervisor ||
      element?.isEmployee ||
      element?.isAdmin,
  );

  const isCheckerOrExaminer =
    userRoles?.patents?.isChecker ||
    userRoles?.trademarks?.isChecker ||
    userRoles?.designs?.isChecker ||
    userRoles?.patents?.isCheckersHead ||
    userRoles?.trademarks?.isCheckersHead ||
    userRoles?.designs?.isCheckersHead;

  return [
    {
      navName: "homeTap",
      navLink: "applications",
      icon: MODS_ICONS.home,
      show: true,
    },
    {
      navName: "searchEnquiry",
      navLink: "search-query",
      icon: MODS_ICONS.search,
      show: featureFlags.admin,
    },
    {
      navName: "customerCodesRequests",
      navLink: "customer-code/requests",
      icon: MODS_ICONS.requests,
      show: !isProduction && featureFlags.customers,
    },
    {
      navName: "patentsTap",
      navLink: "patents/requests",
      icon: MODS_ICONS.patents,
      show: !isProduction && featureFlags.patents,
      subItems:
        userRoles?.patents?.isExaminer ||
        userRoles?.patents?.isCheckersHead ||
        userRoles?.patents?.isExaminersHead
          ? [
              {
                navName: "substantiveExamination",
                navLink: "patents/technical-research",
                show: userRoles?.patents?.isExaminer,
              },
              {
                navName: "redirectRequests",
                navLink: "patents/redirect-requests",
                show:
                  userRoles?.patents?.isCheckersHead ||
                  userRoles?.patents?.isExaminersHead,
              },
              {
                navName: "reports_stastics",
                navLink: "patents/reports",
                show: false,
              },
            ]
          : null,
    },
    {
      navName: "trademarksTap",
      navLink: "trademarks/requests",
      icon: MODS_ICONS.trademarks,
      show: !isProduction && featureFlags.trademarks,
      subItems:
        userRoles?.trademarks?.isExaminer ||
        userRoles?.trademarks?.isCheckersHead ||
        userRoles?.trademarks?.isExaminersHead
          ? [
              {
                navName: "substantiveExamination",
                navLink: "trademarks/technical-research",
                show: userRoles?.trademarks?.isExaminer,
              },
              {
                navName: "redirectRequests",
                navLink: "trademarks/redirect-requests",
                show:
                  userRoles?.trademarks?.isCheckersHead ||
                  userRoles?.trademarks?.isExaminersHead,
              },
              {
                navName: "reports_stastics",
                navLink: "trademarks/reports",
                show: false,
              },
            ]
          : null,
    },
    {
      navName: "designsTap",
      navLink: "designs/requests",
      icon: MODS_ICONS.designs,
      show: !isProduction && featureFlags.designs,
      subItems:
        userRoles?.designs?.isExaminer ||
        userRoles?.designs?.isCheckersHead ||
        userRoles?.designs?.isExaminersHead
          ? [
              {
                navName: "substantiveExamination",
                navLink: "designs/technical-research",
                show: userRoles?.designs?.isExaminer,
              },
              {
                navName: "redirectRequests",
                navLink: "designs/redirect-requests",
                show:
                  userRoles?.designs?.isCheckersHead ||
                  userRoles?.designs?.isExaminersHead,
              },
              {
                navName: "reports_stastics",
                navLink: "designs/reports",
                show: false,
              },
            ]
          : null,
    },
    {
      navName: "publicationManagement",
      navLink: "publishment",
      icon: MODS_ICONS.patents,
      show: !isProduction && featureFlags.publication,
      subItems: [
        {
          navName: userRoles?.publication?.isSpecialist
            ? "verifications"
            : "editBatchesXML",
          navLink: "publishment/verifications",
          show: userRoles?.publication?.isSpecialist,
        },

        // Auditor Navs
        {
          navName: "editTrademarksBatchesXML",
          navLink: "publishment/auditor/trademark",
          show: userRoles?.publication?.isAuditor,
        },
        {
          navName: "editPatentsBatchesXML",
          navLink: "publishment/auditor/patent",
          show: userRoles?.publication?.isAuditor,
        },
        {
          navName: "editDesignSBatchesXML",
          navLink: "publishment/auditor/industrial_design",
          show: userRoles?.publication?.isAuditor,
        },

        {
          navName: "publicationIssuance",
          navLink: "publishment/upcoming-publications",
          show: userRoles?.publication?.isSpecialist,
        },
        {
          navName: "officialGazettePublication",
          navLink: "publishment/gazette",
          show: userRoles?.publication?.isSpecialist,
        },
        {
          navName: "publicationsPreparation",
          navLink: "publishment/schedule",
          show: userRoles?.publication?.isSpecialist,
        },
        // {
        //   navName: "automaticApprovalPreparation",
        //   navLink: "publishment/automatic-approval",
        //   show: true,
        // },
        // {
        //   navName: "objectionPeriodPreparation",
        //   navLink: "publishment/objection-period",
        //   show: true,
        // },
      ],
    },
    {
      navName: "qualityManagement",
      navLink: "eqm",
      icon: MODS_ICONS.eqm,
      show: !isProduction && featureFlags.quality,
      subItems: [
        {
          navName: "ratingList",
          navLink: "eqm/evaluation",
          show: true,
        },
        {
          navName: "oppositionList",
          navLink: "eqm/opposition",
          show: true,
        },
        {
          navName: "committeeList",
          navLink: "eqm/committee-requests",
          show:
            userRoles?.quality?.isSpecialist ||
            userRoles?.quality?.isManager ||
            userRoles?.quality?.isExpert,
        },
      ],
    },
    {
      navName: "assistiveServices",
      navLink: "assistive-services/requests",
      icon: MODS_ICONS.assistive,
      show: !isProduction && userRoles?.assistiveServices?.isSpecialist,
      subItems: [
        {
          navName: "assistiveServicesRequests",
          navLink: "assistive-services/requests",
          show: true,
        },
        {
          navName: "redirectRequests",
          navLink: "assistive-services/redirect-requests",
          show: true,
        },
      ],
    },
    {
      navName: "agenciesManagement",
      navLink: "assistive-services/agency-management",
      icon: MODS_ICONS.agencies,
      show: !isProduction && userRoles?.assistiveServices?.isAgenciesChecker,
      subItems: [
        {
          navName: "agenciesRequests",
          navLink: "assistive-services/agency-management/requests",
          show: true,
        },
        {
          navName: "agenciesPrevRequests",
          navLink: "assistive-services/agency-management/previous-requests",
          show: true,
        },
      ],
    },
    {
      navName: "managementOfCertificatesAndDocuments",
      navLink: "assistive-services/management-certificates",
      icon: MODS_ICONS.assistive,
      show: !isProduction && featureFlags.certificatesServices,
      subItems: [
        {
          navName: "managementOfCertificatesAndDocuments",
          navLink: "assistive-services/management-certificates",
          show: true,
        },
        {
          navName: "recreatedCertificates",
          navLink: "assistive-services/recreated-certificates",
          show: true,
        },
      ],
    },
    {
      navName: "annualRegistrationDepartment",
      navLink: "assistive-services/annual-registeration/SENT",
      icon: MODS_ICONS.annuel,
      show: !isProduction && isCheckerOrExaminer,
      subItems: [
        {
          navName: "annualBatchs",
          navLink: "assistive-services/annual-registeration/SENT",
          show: true,
        },
        {
          navName: "resendAnnualBatches",
          navLink: "assistive-services/annual-registeration/FAILED",
          show: true,
        },
        {
          navName: "gracePeriodsRequests",
          navLink: "assistive-services/annual-registeration/DUE_OVER",
          show: true,
        },
        {
          navName: "abandonedRequest",
          navLink: "assistive-services/annual-registeration/EXPIRED",
          show: true,
        },
      ],
    },
    {
      navName: "suspicion.title",
      navLink: "tahaqaq",
      icon: MODS_ICONS.requests,
      show: featureFlags.tahaqqaq,
      subItems: [
        {
          navName: "suspicion.cases",
          navLink: "tahaqaq/suspicion-cases",
          show: true,
        },
        {
          navName: "suspicion.redirection",
          navLink: "tahaqaq/suspicion-redirect",
          show: userRoles?.tahaqqaq?.isSupervisor,
        },
        {
          navName: "agencies.management",
          navLink: "tahaqaq/agencies",
          show: userRoles?.tahaqqaq?.isSupervisor,
        },
      ],
    },
    {
      navName: "statistics",
      navLink: "statistics",
      icon: MODS_ICONS.statistics,
      show: isStatistics,
    },
    {
      navName: "settings",
      navLink: "settings",
      icon: MODS_ICONS.settings,
      show: featureFlags.admin,
      subItems: [
        {
          navName: "rolesGroups",
          navLink: "settings/groups",
          show: true,
        },
        {
          navName: "groupsAssignation",
          navLink: "settings/assignation",
          show: true,
        },
        {
          navName: "roles",
          navLink: "settings/roles",
          show: true,
        },
        {
          navName: "units",
          navLink: "settings/units",
          show: true,
        },
        {
          navName: "configuration",
          navLink: "settings/configuration",
          show: true,
        },
      ],
    },
  ];
}

export default makeRoutingList;
