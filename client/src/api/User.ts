import Fetch from '../services/Fetch';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import { IUserActivationFormValues, IUserSession } from '../../../sdk/models/User';

export default class UserApi {
  public static fetchUserByToken = (token: string) => {
    return Fetch.get<Partial<IUserActivationFormValues>>(`/api/user/activate/${token}`);
  }

  public static login = (data: ILoginFormValues) => {
    return Fetch.post<IUserSession>('/api/user/login', data);
  }

  public static register = (data: any) => {
    return Fetch.post('/api/user/register', data);
  }

  public static activate = (token: string, data: IUserActivationFormValues) => {
    return Fetch.put<IUserSession>(`/api/user/activate/${token}`, data);
  }

}
