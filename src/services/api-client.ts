import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe3bc2963b8b41f3bbcb95174a18fa99",
  },
});
