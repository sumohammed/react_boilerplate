import Alert from "../alert/Alert.js";

const env =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://api.hitriva.com";

export const useFetch = (url, data = null, route = null) => {
  return fetch(env + url, {
    method: "POST",
    body: data,
    credentials: "include"
  })
    .then(res => {
      if (!res.ok) throw res.statusText;
      return res.json();
    })
    .then(res => {
      if (res.status != 1 && res.message !== null) {
        Alert(res.message);
      }
      return res.data;
    })
    .catch(err => console.error(`Fetch failed ${err}`));
};
