import axios from 'axios';
import { GRAPHQL_URL } from 'constants/api';

const request = (query) => {
  console.log(query);

  return axios({
    method: 'post',
    url: GRAPHQL_URL,
    data: { query },
    headers: { 'Content-Type': 'application/json' },
  });
};

export default request;
