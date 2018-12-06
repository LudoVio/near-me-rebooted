const DEFAULT_POSITION = "52.3616256,4.886528";

export default {
  currentPosition() {
    return new Promise ((resolve) => {
      navigator.geolocation.getCurrentPosition(position => {
        if (!position) position = DEFAULT_POSITION;
        else position = position.coords.latitude + "," + position.coords.longitude;

        resolve(position);
      });
    });
  }
};
