import axios from "axios";

const CLIENT_ID = "MW1BOKP4NPUGRDNQEJ5S50U30WXXCUMEDJ43VBWDERJIQX1H";
const CLIENT_SECRET = "JVVBSNLKBVZXJL4JWOXDXLDYUZUCSRXECMVQGYJHEPNHBVUV";
const API_VERSION = "20181204";
const DEFAULT_POSITION = "52.3616256,4.886528";

const apiClient = axios.create({
  baseURL: "https://api.foursquare.com/v2/venues",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getVenues(cbSuccess, cbError) {
    navigator.geolocation.getCurrentPosition(position => {
      if (!position) position = DEFAULT_POSITION;
      else position = position.coords.latitude + "," + position.coords.longitude;

      apiClient.get("/explore", {
        params: {
          ll: position,
          client_id: CLIENT_ID, 
          client_secret: CLIENT_SECRET,
          v: API_VERSION
        }
      })
        .then(response => {
          cbSuccess(response.data.response.groups[0].items.map(item => item.venue));
        })
        .catch(error => {
          cbError(error.response.data.meta.errorDetail);
        });
    });
  },
};
