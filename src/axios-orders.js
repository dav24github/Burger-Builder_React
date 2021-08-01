import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cf900-default-rtdb.firebaseio.com/",
});

export default instance;
