import { axiosInstance } from "../utils/axios";

export const getMovies = async (query) => {
  const response = await axiosInstance.get("?s=" + query);

  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return {
    ...response.data,
  };
};
