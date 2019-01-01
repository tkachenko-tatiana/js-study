
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

  @action
  login(values: ILoginFormValues) {
    return UserApi.login(values)
      .then((res) => {
        console.log(res);
        return res;
    });
  }

  @action
  registerUser() {
    this.user.isRegistered = true;
  }
}

export default new User();
