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

export interface RegisterPayload {
  user: { username: string; email: string; password: string };
}
export interface LoginPayload {
  user: { email: string; password: string };
}
const authApi = {
  register(value: RegisterPayload) {
    return request(POST, "/users", BODY(value));
  },
  login(value: LoginPayload) {
    return request(POST, "/users/login", BODY(value));
  },
};

export default { ...authApi };
