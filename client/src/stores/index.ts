import { create } from 'mobx-persist';

import UserStore from './User';
import CourseStore from './Course';
import UIStore from './UI';

const hydrate = create({
  storage: localStorage
});

const store = {
  userStore: new UserStore(),
  courseStore: new CourseStore(),
  uiStore: new UIStore()
};

// add persisted store
['userStore'].forEach((storeName) => {
  hydrate(storeName, store[storeName]).then(() => console.log(`${storeName} has been hydrated`));
});

export default store;
