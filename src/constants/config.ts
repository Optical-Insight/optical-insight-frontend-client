export const BFF_PATIENT_URL = process.env.NEXT_PUBLIC_BFF_PATIENT_BASE_URL;
export const BFF_ADMIN_URL = process.env.NEXT_PUBLIC_BFF_ADMIN_BASE_URL;
export const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
export const API_REPORT_URL = process.env.NEXT_PUBLIC_REPORT_URL;

export const LOGIN_USING_MOBILE_URL = `${BFF_PATIENT_URL}/api/patients/send-otp`;
export const VERIFY_USING_MOBILE_URL = `${BFF_PATIENT_URL}/api/patients/verify-otp`;

export const GET_USER_BY_ID_URL = `${AUTH_BASE_URL}/api/users/`;
export const GET_ALL_USERS_BY_TYPE_URL = `${AUTH_BASE_URL}/api/users/by-type?type=doctor`;

export const GET_REPORTS_BY_USER_ID = `${BFF_ADMIN_URL}/api/reports/`;
export const GET_REPORTS_BY_PATIENT_ID = `${API_REPORT_URL}/reports/getReportByPatient/`;
export const GET_REPORT_BY_ID = `${BFF_ADMIN_URL}/api/reports/`;
export const CREATE_REPORT = `${API_REPORT_URL}/reports/generatePdf/`;
