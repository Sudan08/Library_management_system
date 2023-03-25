export interface loginPayLoad {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginResponse {
  message?: string;
  email: string;
  scope: string;
  accessToken: string;
}

export interface IAuthState {
  accessToken: string | null;
  scope: string | null;
  isAuthenticated: boolean;
}

export interface registerPayLoad {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  src: string;
}

export interface IBooks {
  id: number;
  title: string;
  genre: string[];
  author: string;
  src: string;
  description: string;
}
