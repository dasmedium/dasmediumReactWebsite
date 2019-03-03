import axios from "axios";
import { ajax } from "rxjs/ajax";
import { AxiosRequestConfig } from "axios";
import { API_URL } from "./config";

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
  },
  get(resource: string, config: AxiosRequestConfig) {
    return axios.get(`${resource}`, config).catch(error => {
      throw new Error(`Api Service ${error}`);
    });
  }
};

export const PostService = {
  get(slug: string) {
    return ajax.get(`https://wp.dasmedium.co/wp-json/wp/v2/posts?slug=${slug}`);
  }
};

export const PageService = {
  get(slug: string) {
    return ajax.get(`https://wp.dasmedium.co/wp-json/wp/v2/pages?slug=${slug}`);
  }
};

export default ApiService;
