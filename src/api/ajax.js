import axios from "axios";
import Config from "@/config/index";

const config = {
  baseURL: Config.baseUrl,
  timeout: 5 * 1000,
  crossDomain: true,
  validateStatus(status) {
    return status >= 200 && status < 500;
  }
};

const _axios = axios.create(config);

export function post(url, data = {}, params = {}) {
  return _axios({
    method: "post",
    url,
    data,
    params
  });
}

export function get(url, params = {}) {
  return _axios({
    method: "get",
    url,
    params
  });
}

export function put(url, data = {}, params = {}) {
  return _axios({
    method: "put",
    url,
    params,
    data
  });
}

export function _delete(url, params = {}) {
  return _axios({
    method: "delete",
    url,
    params
  });
}

export default _axios;
