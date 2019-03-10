import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface IStyledLinkProps extends ButtonProps {
  to: LinkProps['to'];
}

class StyledLink extends React.Component<IStyledLinkProps> {
  handleClick = (event: React.SyntheticEvent) => {
    if (this.props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  renderLink = (itemProps: any) =>
    <Link {...itemProps} to={this.props.to} onClick={this.handleClick} />;

  render() {
    const { children, className = '', disabled = false, ...rest } = this.props;

    return (
      <Button component={this.renderLink} disabled={disabled} className={className} {...rest}>
        {children}
      </Button>
    );
  }
}

export default StyledLink;
