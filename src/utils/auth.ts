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
  loginLabel: string;
  setLoginLabel: (label: string) => void;
  setStep: (step: number) => void;
  email?: string;
  setEmail: (email: string) => void;
  mobileNo?: string;
  setMobileNo: (mobileNo: string) => void;
}

export interface OTPDataProps {
  loginLabel: string;
  setStep: (step: number) => void;
  email?: string;
  mobileNo?: string;
}
