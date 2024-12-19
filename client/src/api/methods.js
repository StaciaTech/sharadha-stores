import {getValue} from '@utils/localStorage';
import {URL} from './config';
import axios from 'axios';

export const POST_API = async (api, body) => {
  const token = await getValue('token');
  const res = await axios.post(URL + '/api/' + api, body, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};

export const GET_API = async api => {
  const token = await getValue('token');
  const res = await axios.get(URL + '/api/' + api, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};

export const DELETE_API = async api => {
  const token = await getValue('token');
  const res = await axios.delete(URL + '/api/' + api, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};

export const PUT_API = async (api, body) => {
  const token = await getValue('token');
  const res = await axios.put(URL + '/api/' + api, body, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};
