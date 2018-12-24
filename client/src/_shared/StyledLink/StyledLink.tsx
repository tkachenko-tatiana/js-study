import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class StyledLink extends React.Component<any> {
  renderLink = (itemProps: any) =>
    <Link {...itemProps} to={this.props.to} />;

  render() {
    const { text, className = {} } = this.props;

    return (
      <Button component={this.renderLink} className={className}>
        {text}
      </Button>
    );
  }
}
export default StyledLink;
