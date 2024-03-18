import instance from '../utils/axiosInstance';
import Cookies from 'js-cookie';

const authUrl = 'auth'


export const userLogin = async (params: { userId: string; password: string }) => {
  const response = await instance.post(`${authUrl}/sign-in`, params);
  return response.data;
};
