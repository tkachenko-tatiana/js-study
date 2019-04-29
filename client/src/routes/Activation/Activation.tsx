import * as React from 'react';
import { observer } from 'mobx-react';
import { injectStore } from '../../stores/StoreContext';

import { RouteComponentProps } from 'react-router';
import ActivationForm from './components/ActivationForm';
import UserStore from '../../stores/User';

interface IUserStore extends RouteComponentProps<{ token: string }> { userStore: UserStore; }

export class Activation extends React.Component<IUserStore> {

  componentDidMount() {
    const { userStore, match }  = this.props;
    userStore.getActivationData(match.params.token);
  }

  render() {
    const { userStore, match } = this.props;

    return (
      <ActivationForm
        activate={userStore.activate}
        token={match.params.token}
        initialData={userStore.activationData}
      />
    );
  }
}

export default injectStore('userStore')(observer(Activation));
