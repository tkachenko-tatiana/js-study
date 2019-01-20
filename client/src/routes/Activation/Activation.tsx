import * as React from 'react';
import { observer } from 'mobx-react';
import { injectStore } from '../../stores/StoreContext';

// import { RouteComponentProps } from 'react-router';
import ActivationForm from './components/ActivationForm';
import UserStore from '../../stores/User';

// interface IActivationProps extends
//   RouteComponentProps<{ token: string }>,
//   UserStore {}

export class Activation extends React.Component<any> {

  componentDidMount() {
    const { userStore }  = this.props;

    userStore.getActivationData(this.props.match.params.token);
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
