import * as React from 'react';
import Header from './components/Header';

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
      </div>
    );
  }
}
