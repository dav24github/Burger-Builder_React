import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-projects-aea7c-default-rtdb.firebaseio.com/",
});

export default instance;
