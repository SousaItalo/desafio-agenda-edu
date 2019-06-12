import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-test.agendaedu.com/api/"
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    setToken(response.data.token);
    return response;
  } catch (error) {
    return error.response
  }
};

export const getEvents = async (limit = 10, page = 1) => {
  try {
    const response = await api.get(`events?limit=${limit};page=${page}`);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const setToken = (token) => {
  api.defaults.headers.common = {
    token: token,
  };
}
