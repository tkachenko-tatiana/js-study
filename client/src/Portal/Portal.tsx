import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IPortalProps {
  children: JSX.Element | string | null;
}

const portalRoot = document.getElementById('portal');

class Portal extends React.Component<IPortalProps> {
  el: HTMLElement;

  constructor(props: IPortalProps) {
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
