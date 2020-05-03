import { IUser, RegisterPayload, LoginPayload } from "@types";

const API_ENDPOINT = "http://localhost:5000/api";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const BODY = (value: any) => ({
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(value),
});

const request = async (method: string, URI: string, options?: object) => {
  return await fetch(`${API_ENDPOINT}${URI}`, { method, ...options });
};

const handleResponse = async (response: Response) => {
  const data = await response.json();
  console.log(data);
  if (!response.ok) throw Error(data.errors);
  return data;
};

const authApi = {
  register(value: RegisterPayload) {
    return request(POST, "/users", BODY(value));
  },
  login(value: LoginPayload) {
    return request(POST, "/users/login", BODY(value));
  },
};

const userApi = {
  updateUser(userData: IUser) {
    return request(PUT, "/user", BODY(userData));
  },
};

export default { ...authApi, ...userApi, handleResponse };
