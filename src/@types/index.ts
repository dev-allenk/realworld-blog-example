export interface IUser {
  email: string;
  token?: string;
  username: string;
  bio?: string;
  image?: any;
}

export interface RegisterPayload {
  user: { username: string; email: string; password: string };
}
export interface LoginPayload {
  user: { email: string; password: string };
}
