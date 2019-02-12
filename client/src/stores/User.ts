
import { observable, computed, action, runInAction } from 'mobx';
import history from '../services/History';
import Routes from '../routes/Routes';

import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import stores from '../stores';
import { IUserActivationFormValues, IUserActivateResponse } from '../../../sdk/models/User';

class UserStore {
  @observable user = {
    name: '',
    email: '',
    login: '',
    token: '',
    session: null,
    courses: [],
    activationData: {},
    isRegistered: false,
  };

  @computed get isAuthenticated() {
    return !!this.user.token;
  }

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action
  public logoutUser = () => {
    return this.user.token = '';
  }

  @action
  public getActivationData = (token: string) => {
    UserApi.fetchUserByToken(token)
      .then(
        action((data) => {
          this.user.activationData = data;
        }));
  }

  @action
  public activate = (token: string, values: IUserActivationFormValues) => {
    return UserApi.activate(token, values)
      .then(
        action((res: IUserActivateResponse) => {
          stores.uiStore.showNotification('Successfully registered!');
          return res;
        }))
      .then((data: IUserActivateResponse) => {
        this.user = {
          ...this.user,
          token: data.token,
          ...data.user,
          activationData: {},
        };

      })
      .then(
        action(() => {
          history.push(Routes.Main);
        }));
  }

  @action
    public login = (values: ILoginFormValues) => {
      return UserApi.login(values)
        .then((res) => {
          // TODO: implement login
          console.log('login ', values, res);
        });
    };

  @action
    public register = (values: any) => {
      return UserApi.register(values)
        .then(() => {
          runInAction(() => stores.uiStore.showNotification('Email was send to confirm your email address'));
        });
    };
}

export default UserStore;
