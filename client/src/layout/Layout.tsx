import * as React from 'react';
import Header from './components/Header';
import AlertNotification from '../_shared/AlertNotification';

import './Layout.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

export default class Layout extends React.Component<ILayoutProps> {
  render() {
    return (
      <div>
        <Header />
        <main role="main">
          {this.props.children}
        </main>

        <AlertNotification />
      </div>
    );
  }
}
