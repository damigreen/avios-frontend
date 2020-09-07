import axios from 'axios';

const baseUrl = 'http://localhost:3007/api/products';


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data;
};

const update = async (id, productObj) => {
  const response = await axios.put(`${baseUrl}/${id}`, productObj);
  return response.data;
};

const del = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};


export default { 
  getAll,
  update,
  del,
  // create,
  // setToken,
};
