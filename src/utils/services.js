import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5002/extensions",
});

export const getAll = async () => {
  try {
    const response = await instance.get(`/`);

    const { data } = response;

    return data.result;
  } catch (error) {
    return error.response;
  }
};
