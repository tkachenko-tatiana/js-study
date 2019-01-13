import Fetch from '../services/Fetch';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';

export default class UserApi {
  public static login = (data: ILoginFormValues) => {
    return Fetch.post('/api/user/login', data);
  }

  public static register = (data: any) => {
    return Fetch.post('/api/user/register', data);
  }

  public static activate = (data: any) => {
    return Fetch.put('/api/user/:token', data);
  }

}
