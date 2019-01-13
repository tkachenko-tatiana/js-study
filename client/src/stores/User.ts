
import { observable, computed, action } from 'mobx';
import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/Login/components/LoginForm';
import stores from '../stores';

class UserStore {
  @observable user = {
    name: '',
    email: '',
    login: '',
    token: '',
    session: null,
    courses: [],
    isRegistered: false,
  };

  @computed get isAuthenticated() {
    return !!this.user.token;
  }

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action
  public login = (values: ILoginFormValues) => {
    return UserApi.login(values)
    .then((res) => {
      return res;
    });
  }

  @action
  public register = (values: any) => {
    return UserApi
      .register(values)
      .then((res) => {
        if (res.success) {
          stores.uiStore.showNotification('Email was send to confirm your email address');
        }

        return res;
      });
  }
}

export default UserStore;
