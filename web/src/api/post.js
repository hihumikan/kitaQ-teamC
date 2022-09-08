import axios from "axios";

const ENDPOINT_URL = "http://localhost:3001/post";

const postApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(post) {
    const result = await axios.post(ENDPOINT_URL, post);
    return result.data;
  },
  async delete(post) {
    const result = await axios.delete(ENDPOINT_URL + "/" + post.id);
    return result.data;
  },
  async patch(post) {
    const result = await axios.put(ENDPOINT_URL + "/" + post.id, post);
    return result.data;
  },
};

export default postApi;
