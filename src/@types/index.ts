export interface IUser {
  email: string;
  token?: string;
  username: string;
  bio?: string;
  image?: string;
}

export interface RegisterPayload {
  user: { username: string; email: string; password: string };
}
export interface LoginPayload {
  user: { email: string; password: string };
}
export interface UserUpdatePayload {
  user: {
    email: string;
    username: string;
    password: string;
    bio: string;
    image: string;
  };
}
