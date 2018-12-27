import * as React from 'react';
import Header from './components/Header';
import User from '../models/User';

interface IProps {
  children: JSX.Element | null;
}

export default class Layout extends React.Component<IProps> {
  render() {
    return (
    <div>
        <Header store={User} />

        <main role="main">
          {this.props.children}
        </main>
        <footer>footer</footer>
    </div>
    );
  }
}
