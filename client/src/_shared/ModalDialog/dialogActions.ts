import { ButtonProps } from '@material-ui/core/Button';

export enum DialogAction {
  OK = 'OK',
  SAVE_CLOSE = 'SAVE_CLOSE',
  CLOSE = 'CLOSE'
}

export interface IDialogActionButtonConfig extends ButtonProps {
  title: string;
  handler?: () => void;
}

const DIALOG_ACTION_HANDLERS: {
  [DialogAction: string]: (
    onOK?: (data?: any) => void,
    disableOkHandling?: boolean,
    onClose?: () => void
  ) => IDialogActionButtonConfig[];
} = {
  [DialogAction.OK]: (onOK) => {
    return [
      {
        title: 'Ok',
        color: 'primary',
        variant: 'contained',
        handler: onOK
      }
    ];
  },

  [DialogAction.CLOSE]: (_onOK, _disableOkHandling, onClose) => {
    return [
      {
        title: 'Close',
        handler: onClose
      }
    ];
  },

  [DialogAction.SAVE_CLOSE]: (onOK, disableOkHandling, onClose) => {
    return [
      {
        title: 'Save',
        color: 'primary',
        variant: 'contained',
        handler: onOK,
        disabled: disableOkHandling
      },
      {
        title: 'Close',
        handler: onClose
      }
    ];
  }
};

export default (
  type: DialogAction,
  onOK?: (data?: any) => void,
  disableOkHandling?: boolean,
  onClose?: () => void
): IDialogActionButtonConfig[] => {
  const handler = DIALOG_ACTION_HANDLERS[type];

  return handler(onOK, disableOkHandling, onClose);
};
