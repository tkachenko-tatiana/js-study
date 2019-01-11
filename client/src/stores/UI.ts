import { observable, action } from 'mobx';

class UIStore {
  @observable isNotificationOpen = false;
  @observable notificationMessage = '';

  @action
  handleNotificationClose = () => {
    this.isNotificationOpen = false;
    this.notificationMessage = '';
  }

  @action
  showNotification = (notificationMessage: string) => {
    console.log('!!!!!! ',  notificationMessage);
    this.isNotificationOpen = true;
    this.notificationMessage = notificationMessage;
  }
}

export default UIStore;
