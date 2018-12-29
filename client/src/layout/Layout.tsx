import * as React from 'react';
import Header from './components/Header';
import User from '../models/User';

import './Layout.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

export default class Layout extends React.Component<ILayoutProps> {
  render() {
    return (
      <div>
          <Header store={User} />
          <main role="main">
            {this.props.children}
          </main>
      </div>
    );
  }
}
