import * as React from 'react';
import Header from './components/Header';

export default class Layout extends React.Component<any> {
  render() {
    return (
    <div>
        <Header />

        <main role="main">
          {this.props.children}
        </main>
        <footer>footer</footer>
    </div>
    );
  }
}
