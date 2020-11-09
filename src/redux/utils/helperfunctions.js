import axios from "axios";

export const base_domain =
  "https://hospital-resource-management.herokuapp.com/";

export const axios_config = (api, paramsOrData, method) => ({
  method,
  url: base_domain + api,
  [method === "post" ? "data" : "params"]: paramsOrData,
  headers: {
    "Content-Type": "application/json",
  },
});

export const async_func_data = async (
  apiUrl,
  paramsOrData,
  method,
  isTokenRequired = false
) => {
  try {
    if (isTokenRequired) {
      /* Token to RHS to be added */
      axios.defaults.headers.Authorization =
        "bearer " + localStorage.getItem("token");
    }
    const axiosConfig = axios_config(apiUrl, paramsOrData, method);
    const response = await axios(axiosConfig);

    return response;
  } catch (error) {
    return error.response;
  }
};
