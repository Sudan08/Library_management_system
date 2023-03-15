export interface loginPayLoad {
    email: string;
    password: string;
    rememberMe: boolean;
    scope: string;
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

export interface registerPayLoad {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    scope: string;
}