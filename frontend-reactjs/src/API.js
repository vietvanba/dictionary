import axios from "axios";
const endpoint = "https://localhost:";
export async function get(url, port) {
  return await axios.get(endpoint + port + url, {
    headers: { "Content-type": "application/json" },
  });
}
export async function getWithToken(url, port, token) {
  return await axios.get(endpoint + port + url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function post(url, port, body) {
  return await axios.post(endpoint + port + url, body);
}
export async function postWithToken(url, port, body, token) {
  return await axios.post(endpoint + port + url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
}
export async function patchWithToken(url, port, body, token) {
  return await axios.patch(endpoint + port + url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
}
export async function patch(url, port, body) {
  return await axios.patch(endpoint + port + url, body);
}
export async function put(url, port, body) {
  return await axios.put(endpoint + port + url, body);
}
export async function del(url, port, token) {
  return await axios.delete(endpoint + port + url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
