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
  userName: string;
  _userId: string;
}

export interface AddTeacher {
  firstName: string;
  password: string;
  userName: string;
  lastName: string;
  scope: string;
  email: string;
}

export interface registerPayLoad {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  scope: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  src: string;
}

export interface IBookState {
  allBooks: IBook[];
}

export interface IBook {
  _id: string;
  title: string;
  genre: string | string[];
  author: string;
  booked: boolean;
  description: string;
  src: string;
}

export interface IBookRegister {
  title: string;
  genre: string[];
  author: string;
  src: string;
  description: string;
  booked: string;
}
