
import { observable, computed, action } from 'mobx';
import UserApi from '../api/User';
import { ILoginFormValues } from '../routes/LoginForm/LoginForm';

class User {
  @observable user = {
    name: '',
    email: '',
    login: '',
    token: '',
    session: null,
    courses: [],
    isRegistered: false,
  };

  @observable sholdShowAlertNotification = false;

  @computed get isAuthenticated() {
    return !!this.user.token;
  }

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action
  closeAlertNotification = () => {
    this.sholdShowAlertNotification = false;
  }

  @action.bound
  login(values: ILoginFormValues) {
    return UserApi.login(values)
    .then((res) => {
      return res;
    });
  }

  @action.bound
  register(values: any) {
    return UserApi
      .register(values)
      .then((res) => {
        if (res.success) {
          this.sholdShowAlertNotification = true;
        }

        return res;
      });
  }
}

export default new User();
