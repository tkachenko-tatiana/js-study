import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const AlertsNotification: React.SFC<any> = ({
    isNotificationOpen,
    handleNotificationClose,
    notificationMessage,
    autoHideDuration,
  }) => (
    <Snackbar
      id="alert-notification"
      open={isNotificationOpen}
      autoHideDuration={autoHideDuration || 12000}
      onClose={handleNotificationClose}
      message={<span> {notificationMessage} </span>}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      action={(
        <IconButton color="inherit" onClick={handleNotificationClose}>
          <CloseIcon color="secondary"/>
        </IconButton>
      )}
    />
);

export default AlertsNotification;
