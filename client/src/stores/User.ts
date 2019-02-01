
import { observable, computed, action, runInAction } from 'mobx';
import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import stores from '../stores';
import { IUserActivationFormValues } from '../../../sdk/models/User';

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
      .then((res: any) => {
        /*
          user: {
            token: 'eyJhbGcikdQ298Dc'
            confirmPassword: "1234"
            createdAt: "2019-01-23T10:43:15.932Z"
            email: "cherenkov.yuriy111@gmail.com"
            firstName: "test"
            id: 1
            lastName: "sername"
            updatedAt: "2019-01-23T17:54:19.651Z"
          }
        */
        this.user = {
          token: res.token,
          ...res.user,
          activationData: {},
        };
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
