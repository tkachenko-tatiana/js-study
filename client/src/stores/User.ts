
import { observable, computed, action, runInAction } from 'mobx';
import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import stores from '../stores';
// import { IUserActivationFormValues } from '../../../sdk/models/User';

class UserStore {
  @observable user = {
    name: '',
    email: '',
    login: '',
    token: '',
    session: null,
    courses: [],
    activationData: null,
    isRegistered: false,
  };

  @computed get isAuthenticated() {
    return !!this.user.token;
  }

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action
  public getActivationData = (token: string) => {
    UserApi.fetchUserByToken(token)
      .then((data) => {
        console.log('data', data);
        this.user.activationData = data;
      });
  }

  @action
  public activate = (token: string, values: IUserActivationFormValues) => {
    return UserApi.activate(token, values)
      .then((res: any) => {
        console.log(res);
      });
  }

  @action
  public login = (values: ILoginFormValues) => {
    return UserApi.login(values)
      .then((res) => {
        console.log('login ', values, res);
      });
  }

  @action
  public register = (values: any) => {
    return UserApi.register(values)
      .then(() => {
        runInAction(() => stores.uiStore.showNotification('Email was send to confirm your email address'));
      });
  }
}

export default UserStore;
