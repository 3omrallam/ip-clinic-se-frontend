export const REQUEST_STATUSES = {
  draft: "DRAFT",
  waitingForApplicationFeePayment: "WAITING_FOR_APPLICATION_FEE_PAYMENT",
  new: "NEW",
  applicationAsNeverExists: "THE_APPLICATION_IS_AS_IF_IT_NEVER_EXISTED",
  underProcess: "UNDER_PROCESS",
  acceptanceOfRegistration: "ACCEPTANCE_OF_THE_REGISTRATION_APPLICATION",
  sendback: "SENDBACK",
  refusal: "REFUSAL",
  invitationForObjectiveCorrection: "INVITATION_FOR_OBJECTIVE_CORRECTION",
  returnToClassificationOfficer: "RETURNED_TO_THE_CLASSIFICATION_OFFICER",
  modificationFeeWaiting: "PAYMENT_OF_MODIFICATION_FEES_IS_PENDING",
  waived: "WAIVED",
  acceptance: "ACCEPTANCE",
  publicationFeePending: "PUBLICATION_FEES_ARE_PENDING",
  publishedElectronically: "PUBLISHED_ELECTRONICALLY",
  awaitingPaymentForGrievance: "AWAITING_PAYMENT_OF_THE_GRIEVANCE_FEE",
  complainantToGrievanceCommittee: "COMPLAINANT_TO_THE_GRIEVANCE_COMMITTEE",
  returnToApplicant: "RETURNED_TO_THE_APPLICANT",
  objector: "OBJECTOR",
  acceptTheObjection: "ACCEPT_THE_OBJECTION",
  rejectTheObjection: "REJECT_THE_OBJECTION",
  crossedOutMark: "CROSSED_OUT_MARK",
  invitationForFormalCorrection: "INVITATION_FOR_FORMAL_CORRECTION",
  underFormalProcess: "UNDER_FORMAL_PROCESS",
  formalRejection: "FORMAL_REJECTION",
  objectiveRejection: "OBJECTIVE_REJECTION",
  underObjectiveProcess: "UNDER_OBJECTIVE_PROCESS",
  // customer codes statuses
  approved: "APPROVED",
  rejected: "REJECTED",
  needDocuments: "NEED_DOCS",
  activated: "ACTIVATED",
  noActivated: "NOT_ACTIVATED",
  cancelled: "CANCELLED",
  inReview: "IN_REVIEW",
  inProgress: "IN_PROGRESS",
  waitingOwner: "WAITING_OWNER",
  underProcedure: "UNDER_PROCEDURE",
  completed: "COMPLETED",
};

export const REQUEST_STATUSES_COLORS = {
  [REQUEST_STATUSES.draft]: {
    color: "#666666",
    bgColor: "#E6EEED",
  },
  [REQUEST_STATUSES.waitingForApplicationFeePayment]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.new]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.applicationAsNeverExists]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.underProcess]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.acceptanceOfRegistration]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.sendback]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.refusal]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.invitationForObjectiveCorrection]: {
    color: "#B9D000",
    bgColor: "#F8FCE5",
  },
  [REQUEST_STATUSES.returnToClassificationOfficer]: {
    color: "#B9D000",
    bgColor: "#F8FCE5",
  },
  [REQUEST_STATUSES.modificationFeeWaiting]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.waived]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.acceptance]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.publicationFeePending]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.publishedElectronically]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.awaitingPaymentForGrievance]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.complainantToGrievanceCommittee]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.returnToApplicant]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.objector]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.acceptTheObjection]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.rejectTheObjection]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.crossedOutMark]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.invitationForFormalCorrection]: {
    color: "#B9D000",
    bgColor: "#F8FCE5",
  },
  //
  [REQUEST_STATUSES.underFormalProcess]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.underObjectiveProcess]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.formalRejection]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.objectiveRejection]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  // customer code statuses
  [REQUEST_STATUSES.cancelled]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.approved]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.rejected]: {
    color: "#B50644",
    bgColor: "#FBE2E8",
  },
  [REQUEST_STATUSES.needDocuments]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.activated]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
  [REQUEST_STATUSES.noActivated]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.underProcedure]: {
    color: "#ED8A00",
    bgColor: "#FDF2E0",
  },
  [REQUEST_STATUSES.completed]: {
    color: "#009F9A",
    bgColor: "#DFF2F1",
  },
};
