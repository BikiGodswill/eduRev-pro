import { fetcher } from "../lib/fetcher";

export function loginApi(credentials) {
  return fetcher("/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function signupApi(data) {
  return fetcher("/users/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getUsersApi() {
  return fetcher("/users");
}

export function createUserApi(data) {
  return fetcher("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
