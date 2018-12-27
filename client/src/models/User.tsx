
import { observable, computed, action } from 'mobx';

class User {
  @observable user = {
    name: '',
    email: '',
    login: '',
    isRegistered: false,
    courses: [],
  };

  @computed get isRegistered() {
    return this.user.isRegistered;
  }

  @action
  registerUser() {
    console.log('registerUser ', this.user);
    this.user.isRegistered = true;
  }
}

export default new User();
