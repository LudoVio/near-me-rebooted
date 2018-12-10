import axios from "axios";
import GeoService from "./GeoService";

const CLIENT_ID = "MW1BOKP4NPUGRDNQEJ5S50U30WXXCUMEDJ43VBWDERJIQX1H";
const CLIENT_SECRET = "JVVBSNLKBVZXJL4JWOXDXLDYUZUCSRXECMVQGYJHEPNHBVUV";
const API_VERSION = "20181204";

const apiClient = axios.create({
  baseURL: "https://api.foursquare.com/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  params: {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    v: API_VERSION
  }
});

function request(method, url, params, data) {
  return new Promise ((resolve, reject) => {
    GeoService.currentPosition()
      .then(position => {
        params = {...params, ll: position };

        apiClient({ method, url, params, data })
          .then(response => {
            resolve(response.data.response);
          })
          .catch(error => {
            reject(error);
          });
      });
  });
}

function get(url, params) {
  return request("get", url, params);
}

function post(url, data) {
  return request("post", url, {}, data);
}

export default { request, get, post };
