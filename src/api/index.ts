import { IUser, RegisterPayload, LoginPayload, TArticlePayload } from "@types";

const API_ENDPOINT = "http://localhost:5000/api";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const options = (...params: any[]) => {
  return params.reduce(
    (acc, cur) => ({
      ...acc,
      ...cur,
      headers: { ...acc.headers, ...cur.headers },
    }),
    {}
  );
};

const TOKEN = (token: string) => ({
  headers: { Authorization: `Token ${token}` },
});

const BODY = (value: any) => ({
  headers: { "Content-Type": "application/json" },
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
  updateUser(userData: IUser, token: string) {
    return request(PUT, "/user", options(BODY(userData), TOKEN(token)));
  },
  getUser(token: string) {
    return request(GET, "/user", TOKEN(token));
  },
};

const articleApi = {
  createArticle(article: TArticlePayload, token: string) {
    return request(POST, "/articles", options(BODY(article), TOKEN(token)));
  },
  getArticles() {
    return request(GET, "/articles");
  },
};

export default { ...authApi, ...userApi, ...articleApi, handleResponse };
