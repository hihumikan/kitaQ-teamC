import axios from "axios";

const ENDPOINT_URL = "http://localhost:3001/login";

const authApi = {
  async get() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(user) {
    const result = await axios.get(ENDPOINT_URL);
    // const result = await axios.post(ENDPOINT_URL, user);
    return result.data;
  },
  async delete(user) {
    const result = await axios.delete(ENDPOINT_URL + "/" + user.id);
    return result.data;
  },
  async patch(user) {
    const result = await axios.put(ENDPOINT_URL + "/" + user.id, user);
    return result.data;
  },
  async check(user) {
    const result = await axios.post(ENDPOINT_URL, user);
    return result.data.user_data.success === "OK";
  },
};

export default authApi;
