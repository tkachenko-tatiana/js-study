import Fetch from '../services/Fetch';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import { IUserActivationFormValues } from '../../../sdk/models/User';

export default class UserApi {
  public static fetchUserByToken = (token: string) => {
    return Fetch.get(`/api/user/activate/${token}`);
  }

  public static login = (data: ILoginFormValues) => {
    return Fetch.post('/api/user/login', data);
  }

  public static register = (data: any) => {
    return Fetch.post('/api/user/register', data);
  }

  public static activate = (token: string, data: IUserActivationFormValues) => {
    return Fetch.put(`/api/user/activate/${token}`, data);
  }

}
