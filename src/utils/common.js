import { get, set } from "idb-keyval";

export const updateUserStore = data => {
  get("user").then(function(value) {
    return set("user", { ...value, ...data });
  });
};

export const setUserStore = data => {
  set("user", data).catch(function(err) {
    console.log(err);
  });
};

export const checkSession = () => {
  return get("user");
};

export const saveCredentials = (email, password) => {
  if (!!window.PasswordCredential) {
    var cred = new PasswordCredential({
      id: email,
      password: password
    });

    navigator.credentials.store(cred);
  }
};
