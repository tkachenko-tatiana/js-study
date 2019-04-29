
import { observable, computed, action, runInAction } from 'mobx';
import { persist } from 'mobx-persist';

import history from '../services/History';
import Routes from '../routes/Routes';

import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import stores from '../stores';
import { IUserActivationFormValues, IUserSession, IShortUser } from '../../../sdk/models/User';

class UserStore {
  @persist @observable  token: null | string = null;
  @persist('object') @observable user: null | IShortUser = null;
  @observable activationData: null | Partial<IUserActivationFormValues> = null;

  @computed get isAuthenticated() {
    return !!this.token;
  }

  @action
  public logoutUser = () => {
    this.token = null;
    this.user = null;
  }

  @action
  public getActivationData = (token: string) => {
    UserApi.fetchUserByToken(token)
      .then(action((data: Partial<IUserActivationFormValues>) => {
        this.activationData = data;
      }));
  }

  @action
  public activate = (token: string, values: IUserActivationFormValues) => {
    return UserApi.activate(token, values)
      .then(action((res: IUserSession) => {
        stores.uiStore.showNotification('Successfully registered!');
        this.loginUser(res);
      }));
  }

  @action
  public login = (values: ILoginFormValues) => {
    return UserApi.login(values)
      .then(action((res) => { this.loginUser(res); }));
  };

  @action
  public register = (values: any) => {
    return UserApi.register(values)
      .then(() => {
        runInAction(() => stores.uiStore.showNotification('Email was send to confirm your email address'));
      });
  };

  private loginUser = (data: any) => {
    this.token = data.token;
    this.user = data.user;
    history.push(Routes.Main);
  }
}

export default UserStore;
