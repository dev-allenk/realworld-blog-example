const API_ENDPOINT = "http://localhost:3030/api";

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

const userApi = {
  signup(value: any) {
    return request(POST, "/users", BODY(value));
  },
};

export default { ...userApi };
