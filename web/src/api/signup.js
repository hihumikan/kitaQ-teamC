import axios from "axios";

const ENDPOINT_URL = "http://localhost:3001/signup";

const signupApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(user_data) {
    const result = await axios.post(ENDPOINT_URL, user_data);
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

export default signupApi;
