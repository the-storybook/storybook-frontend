import { AxiosResponse } from 'axios';
import httpClient from '../commons';
import { GetUserDto } from './dto/GetUserDTO';

const login = async () => {
    const response = await httpClient.post('/auth/login');
    return response.status;
}

const logout = async () => {
    const response = await httpClient.post('/auth/logout');
    return response.status;
}

const getLoggedInUser = async (): Promise<GetUserDto> => {
  const response = await httpClient.get('/auth/me');
  return response.data;
};