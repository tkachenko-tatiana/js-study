import * as React from 'react';

interface InjectedCounterProps {
  isOpen: boolean;
  toggle(
        event: React.MouseEvent | React.KeyboardEvent | Event | React.FormEvent<any>,
        shouldPreventEvent?: boolean,
    ): void;
}
interface IToggleProps {
  children(props: InjectedCounterProps): React.ReactNode;
}
interface IToggleState {
  isOpen: boolean;
}

class Toggle extends React.PureComponent<IToggleProps, IToggleState> {
  state = {
    isOpen: false,
  };

  toggle = (
        event: React.MouseEvent | React.KeyboardEvent,
        shouldPreventEvent = false,
    ) => {
    if (!shouldPreventEvent) {
      event.preventDefault();
    }

    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return children({
      isOpen,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
