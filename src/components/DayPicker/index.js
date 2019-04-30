import React, { Component } from 'react';
import PropTypes from 'prop-types';

import noop from '../../utils/noop';
import { fontSize } from '../../theme/airways';

import ButtonWithDialog, {
  ButtonContent,
  transitionStylesSlideUp,
  dialogStylesFullScreen
} from '../../shared/ButtonWithDialog';
import IconCalendar from '../../icons/CalendarIcon';
import Calendar from './components/Calendar';
import Header from './components/Header';

const rowStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '1px',
  marginTop: '1px'
};

const dividerStyles = {
  fontSize: fontSize.large,
  margin: '0 12px 20px 12px'
};

const getTwoDigitDate = date => `0${date.getDate()}`.slice(-2);

const getMonthAndYear = (date, monthLabels) =>
  `${monthLabels[date.getMonth()]}, ${date.getFullYear()}`;

class DayPicker extends Component {
  renderHeader = ({ closeDialog }) => {
    const { headerLabel, dayLabels, closeAriaLabel } = this.props;

    return (
      <Header
        closeDialog={closeDialog}
        headerLabel={headerLabel}
        dayLabels={dayLabels}
        closeAriaLabel={closeAriaLabel}
        rowStyles={rowStyles}
      />
    );
  };

  renderButtonDates = () => {
    const { start, end, monthLabels } = this.props;

    return start ? (
      <div
        css={{
          display: 'flex',
          overflow: 'hidden',
          maxWidth: '100%'
        }}
      >
        <ButtonContent
          largeButtonValue={getTwoDigitDate(start)}
          smallButtonValue={getMonthAndYear(start, monthLabels)}
        />
        {end && <div css={dividerStyles}>-</div>}
        {end && (
          <ButtonContent
            largeButtonValue={getTwoDigitDate(end)}
            smallButtonValue={getMonthAndYear(end, monthLabels)}
          />
        )}
      </div>
    ) : null;
  };

  render() {
    const {
      start,
      end,
      hiddenBefore,
      disabledBefore,
      disabledAfter,
      onDayClick,
      firstDayOfWeek,
      monthsToShow,
      label,
      placeHolder,
      startLabel,
      endLabel,
      monthLabels,
      closeAriaLabel,
      dialogAriaLabel,
      Icon
    } = this.props;

    return (
      <ButtonWithDialog
        buttonLabel={label}
        placeHolder={placeHolder}
        Icon={IconCalendar}
        renderHeader={this.renderHeader}
        renderButtonValue={this.renderButtonDates}
        dialogStyles={dialogStylesFullScreen}
        transitionStyles={transitionStylesSlideUp}
        contentPadding="0"
      >
        {({ closeDialog, setFocusElementRef }) => (
          <div css={{ overflow: 'auto' }}>
            <Calendar
              closeDialog={closeDialog}
              setFocusElementRef={setFocusElementRef}
              start={start}
              end={end}
              hiddenBefore={hiddenBefore}
              disabledBefore={disabledBefore}
              disabledAfter={disabledAfter}
              onDayClick={onDayClick}
              firstDayOfWeek={firstDayOfWeek}
              monthsToShow={monthsToShow}
              startLabel={startLabel}
              endLabel={endLabel}
              monthLabels={monthLabels}
              closeAriaLabel={closeAriaLabel}
              dialogAriaLabel={dialogAriaLabel}
              Icon={Icon}
              rowStyles={rowStyles}
            />
          </div>
        )}
      </ButtonWithDialog>
    );
  }
}

DayPicker.propTypes = {
  /** Start date if selected */
  start: PropTypes.instanceOf(Date),
  /** End date if selected */
  end: PropTypes.instanceOf(Date),
  /** Disable all days before this date */
  disabledBefore: PropTypes.instanceOf(Date),
  /** Hide all days before this date */
  hiddenBefore: PropTypes.instanceOf(Date),
  /** Disable all days after this date */
  disabledAfter: PropTypes.instanceOf(Date),
  /**
   * Triggered when any day is clicked
   *
   * @param {Date} day The date that was clicked
   * @param {Object} modifiers Modifiers of the day - { disabled, outside, today, start, end, selected }
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */ onDayClick: PropTypes.func,
  /** Index of they day of week to display first */
  firstDayOfWeek: PropTypes.number,
  /** Number of months to display */
  monthsToShow: PropTypes.number,
  /** Label for the field */
  label: PropTypes.string,
  /** Placeholder to be displayed if no dates selected */
  placeHolder: PropTypes.string,
  /** Label for the top bar in the header */
  headerLabel: PropTypes.string,
  /** Label for the highlighted day when start date is selected */
  startLabel: PropTypes.string,
  /** Label for the highlighted day when end date is selected */
  endLabel: PropTypes.string,
  /** Labels for each month */
  monthLabels: PropTypes.arrayOf(PropTypes.string),
  /** Labels for each day */
  dayLabels: PropTypes.arrayOf(PropTypes.string),
  /** Aria label for the close button of the dialog */
  closeAriaLabel: PropTypes.string,
  /** Aria label for the dialog once opened */
  dialogAriaLabel: PropTypes.string,
  /** Icon to display in header and in the label of highlighted days */
  Icon: PropTypes.func
};

DayPicker.defaultProps = {
  start: null,
  end: null,
  hiddenBefore: null,
  disabledBefore: null,
  disabledAfter: null,
  onDayClick: noop,
  firstDayOfWeek: 0,
  monthsToShow: 12,
  label: '',
  placeHolder: '',
  headerLabel: '',
  startLabel: '',
  endLabel: '',
  monthLabels: [],
  dayLabels: [],
  closeAriaLabel: '',
  dialogAriaLabel: '',
  Icon: null
};

export default DayPicker;
