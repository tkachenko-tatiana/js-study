import * as React from 'react';

export default class Layout extends React.Component<any> {
  render() {
    return (
    <div>
        <header>header</header>

        <main role="main">
          {this.props.children}
        </main>
        <footer>footer</footer>
    </div>
    );
  }
}
