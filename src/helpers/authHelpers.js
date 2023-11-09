import { FEATURE_TYPES, ROLE_TYPES } from "../constants/system";

export default function getIqamaNumber(name) {
  if (name?.length === 13) {
    return name?.slice(3);
  } else {
    return name;
  }
}

const systemFeatures = {
  admin: null,
  customers: null,
  patents: null,
  trademarks: null,
  designs: null,

  publication: null,
  quality: null,
  appeal: null,
  assistiveServices: null,
  certificatesServices: null,

  tahaqqaq: null,
  inspections: null,
  complaints: null,
};
export const normalizeRoles = (roles) => {
  if (!roles) return systemFeatures;

  const hasFeature = (code, feature) => code.trim().startsWith(feature);
  const hasRole = (code, feature, role) =>
    code.trim().replace(`${feature}_`, "") === role;

  return roles.reduce((acc, item) => {
    const { code } = item;

    return hasFeature(code, FEATURE_TYPES.admin)
      ? {
          ...acc,
          admin: {
            ...acc.admin,
            isAdmin: true,
          },
        }
      : hasFeature(code, FEATURE_TYPES.customers)
      ? {
          ...acc,
          customers: {
            ...acc.customers,
            isAuthenticator: true,
          },
        }
      : hasFeature(code, FEATURE_TYPES.patents)
      ? {
          ...acc,
          patents: {
            isChecker:
              acc?.patents?.isChecker ||
              hasRole(code, FEATURE_TYPES.patents, ROLE_TYPES.checker),
            isCheckersHead:
              acc?.patents?.isCheckersHead ||
              hasRole(code, FEATURE_TYPES.patents, ROLE_TYPES.checkersHead),
            isExaminer:
              acc?.patents?.isExaminer ||
              hasRole(code, FEATURE_TYPES.patents, ROLE_TYPES.examiner),
            isExaminersHead:
              acc?.patents?.isExaminersHead ||
              hasRole(code, FEATURE_TYPES.patents, ROLE_TYPES.examinersHead),
            isClassificator:
              acc?.patents?.isClassificator ||
              hasRole(code, FEATURE_TYPES.patents, ROLE_TYPES.classificator),
          },
        }
      : hasFeature(code, FEATURE_TYPES.trademarks)
      ? {
          ...acc,
          trademarks: {
            isChecker:
              acc?.trademarks?.isChecker ||
              hasRole(code, FEATURE_TYPES.trademarks, ROLE_TYPES.checker),
            isCheckersHead:
              acc?.trademarks?.isCheckersHead ||
              hasRole(code, FEATURE_TYPES.trademarks, ROLE_TYPES.checkersHead),
            isExaminer:
              acc?.trademarks?.isExaminer ||
              hasRole(code, FEATURE_TYPES.trademarks, ROLE_TYPES.examiner),
            isExaminersHead:
              acc?.trademarks?.isExaminersHead ||
              hasRole(code, FEATURE_TYPES.trademarks, ROLE_TYPES.examinersHead),
            isClassificator:
              acc?.trademarks?.isClassificator ||
              hasRole(code, FEATURE_TYPES.trademarks, ROLE_TYPES.classificator),
          },
        }
      : hasFeature(code, FEATURE_TYPES.designs)
      ? {
          ...acc,
          designs: {
            isChecker:
              acc?.designs?.isChecker ||
              hasRole(code, FEATURE_TYPES.designs, ROLE_TYPES.checker),
            isCheckersHead:
              acc?.designs?.isCheckersHead ||
              hasRole(code, FEATURE_TYPES.designs, ROLE_TYPES.checkersHead),
            isExaminer:
              acc?.designs?.isExaminer ||
              hasRole(code, FEATURE_TYPES.designs, ROLE_TYPES.examiner),
            isExaminersHead:
              acc?.designs?.isExaminersHead ||
              hasRole(code, FEATURE_TYPES.designs, ROLE_TYPES.examinersHead),
            isClassificator:
              acc?.designs?.isClassificator ||
              hasRole(code, FEATURE_TYPES.designs, ROLE_TYPES.classificator),
          },
        }
      : hasFeature(code, FEATURE_TYPES.publication)
      ? {
          ...acc,
          publication: {
            isSpecialist:
              acc?.publication?.isSpecialist ||
              hasRole(code, FEATURE_TYPES.publication, ROLE_TYPES.specialist),
            isAuditor:
              acc?.publication?.isAuditor ||
              hasRole(code, FEATURE_TYPES.publication, ROLE_TYPES.auditor),
          },
        }
      : hasFeature(code, FEATURE_TYPES.quality)
      ? {
          ...acc,
          quality: {
            isSpecialist:
              acc?.quality?.isSpecialist ||
              hasRole(code, FEATURE_TYPES.quality, ROLE_TYPES.specialist),
            isManager:
              acc?.quality?.isManager ||
              hasRole(code, FEATURE_TYPES.quality, ROLE_TYPES.manager),
            isEvaluator:
              acc?.quality?.isEvaluator ||
              hasRole(code, FEATURE_TYPES.quality, ROLE_TYPES.evaluator),
            isExpert:
              acc?.quality?.isExpert ||
              hasRole(code, FEATURE_TYPES.quality, ROLE_TYPES.expert),
          },
        }
      : hasFeature(code, FEATURE_TYPES.appeal)
      ? {
          ...acc,
          appeal: {
            isSpecialist:
              acc?.appeal?.isSpecialist ||
              hasRole(code, FEATURE_TYPES.appeal, ROLE_TYPES.specialist),
          },
        }
      : hasFeature(code, FEATURE_TYPES.assistiveServices)
      ? {
          ...acc,
          assistiveServices: {
            isSpecialist:
              acc?.assistiveServices?.isSpecialist ||
              hasRole(
                code,
                FEATURE_TYPES.assistiveServices,
                ROLE_TYPES.specialist,
              ),
            isAgenciesChecker:
              acc?.assistiveServices?.isAgenciesChecker ||
              hasRole(
                code,
                FEATURE_TYPES.assistiveServices,
                ROLE_TYPES.agenciesChecker,
              ),
          },
        }
      : hasFeature(code, FEATURE_TYPES.certificatesServices)
      ? {
          ...acc,
          certificatesServices: {
            isSpecialist:
              acc?.certificatesServices?.isSpecialist ||
              hasRole(
                code,
                FEATURE_TYPES.certificatesServices,
                ROLE_TYPES.specialist,
              ),
          },
        }
      : hasFeature(code, FEATURE_TYPES.tahaqqaq)
      ? {
          ...acc,
          tahaqqaq: {
            isEmployee:
              acc?.tahaqqaq?.isEmployee ||
              hasRole(code, FEATURE_TYPES.tahaqqaq, ROLE_TYPES.employee),
            isSupervisor:
              acc?.tahaqqaq?.isSupervisor ||
              hasRole(code, FEATURE_TYPES.tahaqqaq, ROLE_TYPES.supervisor),
          },
        }
      : hasFeature(code, FEATURE_TYPES.inspections)
      ? {
          ...acc,
          inspections: {
            isEmployee:
              acc?.inspections?.isEmployee ||
              hasRole(code, FEATURE_TYPES.inspections, ROLE_TYPES.employee),
            isSupervisor:
              acc?.inspections?.isSupervisor ||
              hasRole(code, FEATURE_TYPES.inspections, ROLE_TYPES.supervisor),
          },
        }
      : hasFeature(code, FEATURE_TYPES.complaints)
      ? {
          ...acc,
          complaints: {
            ...acc.tahaqqaq,
          },
        }
      : acc;
  }, systemFeatures);
};
