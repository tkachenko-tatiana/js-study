import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { injectStore } from '../../stores/StoreContext';
import { observer } from 'mobx-react';
import UIStore from '../../stores/UI';

interface IAlertsNotificationProps {
  uiStore: UIStore;
}

const AlertsNotification: React.FC<IAlertsNotificationProps> = ({ uiStore: {
    isNotificationOpen,
    handleNotificationClose,
    notificationMessage,
  }}) => {
  return (
    <Snackbar
      id="alert-notification"
      open={isNotificationOpen}
      autoHideDuration={12000}
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
};

export default injectStore('uiStore')(observer(AlertsNotification));
