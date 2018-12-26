import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  children: JSX.Element | null;
}

const portalRoot = document.getElementById('portal');

class Portal extends React.Component<IProps> {
  el: HTMLElement;

  constructor(props: IProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (portalRoot) {
      portalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (portalRoot) {
      portalRoot.removeChild(this.el);
    }
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;