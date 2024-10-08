// export const BFF_PATIENT_URL = process.env.BFF_PATIENT_BASE_URL;
// export const BFF_ADMIN_URL = process.env.BFF_ADMIN_BASE_URL;

// export const BFF_ADMIN_URL =
//   "https://optical-insight-bff-admin-452754564019.us-central1.run.app";

export const BFF_PATIENT_URL =
  "https://optical-insight-bff-patient-452754564019.us-central1.run.app";

export const AUTH_BASE_URL =
  "https://optical-insight-ms-auth-api-452754564019.us-central1.run.app";

export const LOGIN_USING_MOBILE_URL = `${BFF_PATIENT_URL}/api/patients/send-otp`;
export const VERIFY_USING_MOBILE_URL = `${BFF_PATIENT_URL}/api/patients/verify-otp`;

export const GET_USER_BY_ID_URL = `${AUTH_BASE_URL}/api/users/`;
export const GET_ALL_USERS_BY_TYPE_URL = `${AUTH_BASE_URL}/api/users/by-type?type=doctor`;
