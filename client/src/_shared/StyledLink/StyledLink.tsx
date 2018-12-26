import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class StyledLink extends React.Component<any> {
  handleClick = (event: React.SyntheticEvent) => {
    if (this.props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  renderLink = (itemProps: any) =>
    <Link {...itemProps} to={this.props.to} onClick={this.handleClick} />;

  render() {
    const { children, className = '', disabled = false } = this.props;

    return (
      <Button component={this.renderLink} disabled={disabled} className={className}>
        {children}
      </Button>
    );
  }
}
export default StyledLink;
