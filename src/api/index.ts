import {
  IUser,
  RegisterPayload,
  LoginPayload,
  TArticlePayload,
  TQuery,
} from "@types";

const API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://allenk-realworld-server.herokuapp.com/api";

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

const createKeyValueSet = (key: string, value: string): string | null => {
  return value ? `${key}=${value}` : null;
};

const QUERY = (query?: TQuery): string => {
  return query
    ? "?" +
        Object.keys(query)
          .map((key) => createKeyValueSet(key, query[key]))
          .filter(Boolean)
          .join("&")
    : "";
};

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
  getArticles(query?: TQuery) {
    return request(GET, `/articles${QUERY(query)}`);
  },
  getFeeds(token: string) {
    return request(GET, "/articles/feed?limit=10", TOKEN(token));
  },
  getSingleArticle(slug: string) {
    return request(GET, `/articles/${slug}`);
  },
};

export default { ...authApi, ...userApi, ...articleApi, handleResponse };
