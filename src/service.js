import axios from "axios";

const API_ROOT = "https://forge-finder-server.herokuapp.com/api";

const responseData = res => res.data;

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`).then(responseData),
  post: (url, payload) =>
    axios.post(`${API_ROOT}${url}`, payload).then(responseData),
  delete: url => axios.delete(`${API_ROOT}${url}`).then(responseData)
};

const dwarves = {
  all: page => requests.get(`/dwarves`),
  add: payload => requests.post(`/dwarves`, payload),
  delete: id => requests.delete(`/dwarves/${id}`)
};
export default { dwarves };
