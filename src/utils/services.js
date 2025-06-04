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
    const { response } = error;

    return response.data;
  }
};

export const removeItem = async (_id) => {
  try {
    const response = await instance.get(`/${_id}`);

    const { data } = response;
    
    return data.result;
  } catch (error) {
    const { response } = error;

    return response.data;
  }
};
