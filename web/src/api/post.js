import axios from "axios";

const ENDPOINT_URL = "https://api.kitaq.qqey.net/post";

const postApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(post) {
    const result = await axios.post(ENDPOINT_URL, post, {
      withCredentials: true,
    });
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
