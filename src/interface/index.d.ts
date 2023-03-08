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
    refreshToken: string;
}


export interface IAuthState {
    refreshToken: string | null;
    accessToken: string | null;
    scope: string | null;
    isAuthenticated: boolean;
  }