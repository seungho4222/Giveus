import instance from '../utils/axiosInstance';
import Cookies from 'js-cookie';

const authUrl = 'auth'


export const userLogin = async (params: { id: string; password: string }) => {
  const response = await instance.post(`${authUrl}/sign-in`, params);
  return response.data;
};


export const userSignUp = async (params : { name: string; id: string; password: string }) => {
  const response = await instance.post(`${authUrl}/sign-up`, params);
  return response.data;
}