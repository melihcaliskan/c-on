import { BASE_API_URL } from "@/utilities/constants";
import axios from "axios";

const axiosHeaders = {
  "accept": "application/json, text/plain, */*",
  "Content-Type": "application/json;charset=UTF-8",
}

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common = axiosHeaders;

const Http = {
  /**
   * @description HTTP POST
   * @param url
   * @param data
   * @param headers
   * @returns Promise
   */
  POST: async (url: string, data?: any): Promise<any> => {
    const result = await axios(url, {
      method: "post",
      data: data,
    });

    return result;
  },
  /**
   * @description HTTP PUT
   * @param url
   * @param data
   * @param headers
   * @returns Promise
   */
  PUT: async (url: string, data?: any): Promise<any> => {
    const result = await axios(url, {
      method: "put",
      data: data,
    });

    return result;
  },
  /**
   * @description HTTP DELETE
   * @param url
   * @param data
   * @param headers
   * @returns Promise
   */
  DELETE: async (url: string, data?: any): Promise<any> => {
    const result = await axios(url, {
      method: "delete",
      data: data,
    });

    return result;
  },
  /**
   * @description HTTP GET
   * @param url
   * @param data
   * @param headers
   * @returns Promise
   */
  GET: async (url: string, data?: any): Promise<any> => {
    const result = await axios(url, {
      method: "get",
      params: data,
    })
    return result;
  }
}

export default Http;
