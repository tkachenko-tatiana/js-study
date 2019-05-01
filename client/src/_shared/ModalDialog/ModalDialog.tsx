import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import getDialogActions, { DialogAction, IDialogActionButtonConfig } from './dialogActions';
import styles from './ModalDialog.scss';

interface IModalDialog {
  isOpen: boolean;
  title?: string;
  dialogActions?: IDialogActionButtonConfig[];
  dialogType?: DialogAction;
  onClose?: () => void;
  handleOk?: (data?: any) => void;
  contentClassName?: string;
  dialogClassName?: string;
  disableOkHandling?: boolean;
}

export const ModalDialog: React.FC<IModalDialog> = (props) => {
  const {
    isOpen,
    dialogActions,
    dialogType,
    onClose,
    handleOk,
    disableOkHandling,
    contentClassName,
    dialogClassName
  } = props;

  const actions: IDialogActionButtonConfig[] | undefined = dialogType
    ? getDialogActions(dialogType, handleOk, disableOkHandling, onClose)
    : dialogActions;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={dialogClassName}
    >
      {
        props.title &&
        <DialogTitle id={`dialog-title-${props.title.toLowerCase().replace(/\s/g, '-')}`}>
          {props.title}
        </DialogTitle>
      }

      <DialogContent className={contentClassName}>
        {props.children}
      </DialogContent>

      <DialogActions>
        <div className={styles.mainActions}>
          {
            actions && actions.map(({ title, handler, ...other }) => (
              <Button
                id={`modal-button-${title.toLowerCase().replace(/\s/g, '-')}`}
                key={title}
                onClick={handler}
                {...other}
              >
                {title}
              </Button>
            ))}
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
