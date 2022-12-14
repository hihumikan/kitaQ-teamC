import axios from "axios";

const ENDPOINT_URL = "https://api.kitaq.qqey.net/users";

const userApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(user) {
    const result = await axios.post(ENDPOINT_URL, user);
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
};

export default userApi;
