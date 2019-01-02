
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

  @computed get isAuthenticated() {
    return !!this.user.token;
  }

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action.bound
  login(values: ILoginFormValues) {
    return UserApi.login(values)
    .then((res) => {
      console.log(res);
      return res;
    });
  }

  // change to async method api
  @action.bound
  register(values: any) {
    return UserApi
      .register(values)
      .then((res) => {
        if (res.success) {
          // this.user.isRegistered = true;
        }

        return res;
      });
  }
}

export default new User();
