import React, { Component } from 'react';
import PropTypes from 'prop-types';

import noop from '../../utils/noop';
import { mq } from '../../theme/airways';

import ButtonWithDialog, {
  transitionStylesSlideUp,
  dialogStylesFullScreen,
  ButtonContent
} from '../../shared/ButtonWithDialog';

import Header from './components/Header';
import Footer from './components/Footer';

class PopupField extends Component {
  renderButtonValue = () => {
    const { largeButtonValue, smallButtonValue } = this.props;

    return largeButtonValue || smallButtonValue ? (
      <ButtonContent
        largeButtonValue={largeButtonValue}
        smallButtonValue={smallButtonValue}
      />
    ) : null;
  };

  renderHeader = ({ closeDialog }) => {
    const { closeAriaLabel, headerLabel, HeaderIcon } = this.props;

    return (
      <Header
        closeDialog={closeDialog}
        headerLabel={headerLabel}
        HeaderIcon={HeaderIcon}
        closeAriaLabel={closeAriaLabel}
      />
    );
  };


  /*
    <PopupField
       onFooterAction={closeDialog => { 
         // do things
         // can close too
       }}
    />
  */
  // TODO: ROGER added - working on this bit now
  renderFooter = ({ closeDialog, onFooterAction }) => {
    // TODO: support
      // label e.g. 1 adult or stacked ontop each other '2 passengers /n 1 adult 1 child
      // action button e.g. Confirm (can hand op and then close (dont think it does anythign other than this))
    const { closeAriaLabel, footerLabelPrimary, footerLabelSecondary } = this.props;

    // or just labels={{ main: '1 Adult' }}
    return (
      <Footer
        primaryLabel="2 Passengers"
        secondaryLabel="1 Adult, 1 Infant, 1 Child"
        actionText="Confirm"
        onAction={() => onFooterAction(closeDialog)}
        closeAriaLabel={closeAriaLabel}
      />

      // <Header
      //   closeDialog={closeDialog}
      //   headerLabel={headerLabel}
      //   HeaderIcon={HeaderIcon}
      //   closeAriaLabel={closeAriaLabel}
      // />
    );
  };

  // TODO: ROGER added
  hasDialogDimensions = () => {
    const { dialogDimensions } = this.props;
    return (
      dialogDimensions && dialogDimensions.height && dialogDimensions.width
    );
  };

  // TODO: ROGER added
  buildDialogStyles = () => {
    const { dialogDimensions } = this.props;
    return {
      ...dialogStylesFullScreen,
      ...(this.hasDialogDimensions() && {
        [mq.tablet]: {
          position: 'absolute',
          height: dialogDimensions.height,
          width: dialogDimensions.width
        }
      })
    };
  };

  render() {
    const {
      children,
      onBlur,
      onClose,
      buttonLabel,
      closeAriaLabel,
      dialogAriaLabel,
      placeHolder,
      Icon,
      iconLabelButtonValue,
      // TODO: ROGER added
      disableHeader, // so opt out. fine for now
      disableFooter
    } = this.props;
    return (
      <ButtonWithDialog
        onBlur={onBlur}
        onClose={onClose}
        buttonLabel={buttonLabel}
        placeHolder={placeHolder}
        closeAriaLabel={closeAriaLabel}
        dialogAriaLabel={dialogAriaLabel}
        Icon={Icon}
        renderHeader={disableHeader ? noop : this.renderHeader}
        renderFooter={disableFooter ? noop : this.renderFooter}
        renderButtonValue={this.renderButtonValue}
        iconLabelButtonValue={iconLabelButtonValue}
        dialogStyles={this.buildDialogStyles()}
        hasDialogDimensions={this.hasDialogDimensions()}
        transitionStyles={transitionStylesSlideUp}
      >
        {children}
      </ButtonWithDialog>
    );
  }
}

PopupField.propTypes = {
  /** Children will be rendered as the content of the dialog */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Triggered when the dialog closes */
  onClose: PropTypes.func,
  /** Triggered on the blur event of the field button */
  onBlur: PropTypes.func,
  /** Large font size value of the field button */
  largeButtonValue: PropTypes.string,
  /** Small font size value of the field button */
  smallButtonValue: PropTypes.string,
  /** Label for the field  */
  buttonLabel: PropTypes.string,
  /** Aria label for the close button of the dialog */
  closeAriaLabel: PropTypes.string,
  /** Aria label for the dialog once opened */
  dialogAriaLabel: PropTypes.string,
  /** Custom dimensions to apply to dialog when viewing on a non-mobile device */
  dialogDimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string
  }),
  /** Placeholder to be displayed if no large or small values are provided */
  placeHolder: PropTypes.string,
  /** Icon displayed in the field button */
  Icon: PropTypes.func,
  /** Label displayed in the dialog header */
  headerLabel: PropTypes.string,
  /** Icon displayed in the dialog header */
  HeaderIcon: PropTypes.func,
  /** Custom Label and Icon for the field button. When provided, this signals to
   * PopupField to render special icon/label pairing layout for the button */
  iconLabelButtonValue: PropTypes.shape({
    icon: PropTypes.any,
    label: PropTypes.string
  })
};

PopupField.defaultProps = {
  children: null,
  onClose: noop,
  onBlur: noop,
  largeButtonValue: '',
  smallButtonValue: '',
  buttonLabel: null,
  closeAriaLabel: 'Close dialog',
  dialogAriaLabel: '',
  placeHolder: '',
  Icon: null,
  headerLabel: '',
  HeaderIcon: null,
  dialogDimensions: null,
  iconLabelButtonValue: null
};

export default PopupField;
