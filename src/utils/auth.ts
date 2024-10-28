export interface AuthContextProps {
  isAuthenticated: boolean;
  storedAuthData: AuthData;
  login: (response: AuthData) => void;
  logout: () => void;
  userData?: UserDataProps;
}

export interface UserDataProps {
  email: string;
  name: string;
  password: string;
  type: string;
  userId: string;
}

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  userType: string;
  userId: string;
}

export interface LoginDataProps {
  setStep: (step: number) => void;
  mobileNo?: string;
  setMobileNo: (mobileNo: string) => void;
}

export interface OTPDataProps {
  setStep: (step: number) => void;
  mobileNo?: string;
}
