import axios from "axios";

const instance = axios.create({
baseURL: "https://server-25.onrender.com/extensions",
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

export const upDateElement = async (_id, newState) => {
    try {
        const response = await instance.patch(`/${_id}`, {newState})

        const {data} = response

        return data
       
    } catch (error) {
         const { response } = error;

    return response.data;
    }
}
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
