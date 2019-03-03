const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const login = async (email, password) => {
  const res = await fetch(BACKEND_URL + "/login", {
    method: "POST",
    json: JSON.stringify({ email, password })
  });
  return res;
};

export const register = async (email, password, name) => {
  const res = await fetch(BACKEND_URL + "/register", {
    method: "POST",
    json: JSON.stringify({ email, password, name })
  });
  return res;
};

export const postMeasurement = async measurement => {
  const res = await fetch(BACKEND_URL + "/measurement", {
    method: "POST",
    json: JSON.stringify(measurement)
  });
  return res;
};

export const checkAuthenticated = async () => {
  const res = await fetch(BACKEND_URL + "authorize");
  const data = await res.json();
  return data;
};
