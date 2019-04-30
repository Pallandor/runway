import React from 'react';
import { shallow } from 'enzyme';
import DayPicker from '..';

const today = new Date(2019, 3, 21, 0, 0, 0, 0);
const end = new Date(2019, 4, 1, 0, 0, 0, 0);
const disabledBefore = new Date(2019, 3, 10, 0, 0, 0, 0);
const hiddenBefore = new Date(2019, 3, 8, 0, 0, 0, 0);
const disabledAfter = new Date(2019, 4, 21, 0, 0, 0, 0);

const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const CalendarIcon = () => <div>Calendar Icon</div>;

describe('DayPicker', () => {
  let component;

  it('renders correctly with defaults', () => {
    component = shallow(<DayPicker />);

    expect(component).toMatchSnapshot();
  });

  it('renders DayPicker with props provided', () => {
    component = shallow(
      <DayPicker
        start={today}
        end={end}
        hiddenBefore={hiddenBefore}
        disabledBefore={disabledBefore}
        disabledAfter={disabledAfter}
        onDayClick={e => e}
        setFocusElementRef={e => e}
        firstDayOfWeek={4}
        monthsToShow={6}
        label="Label"
        placeHolder="Placeholder"
        headerLabel="header label"
        startLabel="Depart"
        endLabel="Return"
        monthLabels={[
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]}
        dayLabels={['Mon', 'Tue']}
        closeAriaLabel="Close aria label"
        dialogAriaLabel="dialog aria label"
        Icon={CalendarIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  describe('renderHeader()', () => {
    it('renders correctly', () => {
      component = shallow(
        <DayPicker
          start={today}
          end={end}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          label="Label"
          placeHolder="Placeholder"
          headerLabel="header label"
          startLabel="Depart"
          endLabel="Return"
          monthLabels={monthLabels}
          dayLabels={['Mon', 'Tue']}
          closeAriaLabel="Close aria label"
          dialogAriaLabel="dialog aria label"
          Icon={CalendarIcon}
        />
      );

      const renderedHeader = shallow(
        component.instance().renderHeader({ closeDialog: () => {} })
      );

      expect(renderedHeader).toMatchSnapshot();
    });
  });

  describe('renderButtonDates()', () => {
    it('does not render if start date is not selected', () => {
      component = shallow(
        <DayPicker
          start={null}
          end={null}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          label="Label"
          placeHolder="Placeholder"
          headerLabel="header label"
          startLabel="Depart"
          endLabel="Return"
          monthLabels={monthLabels}
          dayLabels={['Mon', 'Tue']}
          closeAriaLabel="Close aria label"
          dialogAriaLabel="dialog aria label"
          Icon={CalendarIcon}
        />
      );

      expect(component.instance().renderButtonDates()).toBe(null);
    });

    it('renders correctly when start date is selected', () => {
      component = shallow(
        <DayPicker
          start={today}
          end={null}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          label="Label"
          placeHolder="Placeholder"
          headerLabel="header label"
          startLabel="Depart"
          endLabel="Return"
          monthLabels={monthLabels}
          dayLabels={['Mon', 'Tue']}
          closeAriaLabel="Close aria label"
          dialogAriaLabel="dialog aria label"
          Icon={CalendarIcon}
        />
      );

      const renderedDates = shallow(component.instance().renderButtonDates());

      expect(renderedDates).toMatchSnapshot();
    });

    it('renders correctly when start and end dates are selected', () => {
      component = shallow(
        <DayPicker
          start={today}
          end={end}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          label="Label"
          placeHolder="Placeholder"
          headerLabel="header label"
          startLabel="Depart"
          endLabel="Return"
          monthLabels={monthLabels}
          dayLabels={['Mon', 'Tue']}
          closeAriaLabel="Close aria label"
          dialogAriaLabel="dialog aria label"
          Icon={CalendarIcon}
        />
      );

      const renderedDates = shallow(component.instance().renderButtonDates());

      expect(renderedDates).toMatchSnapshot();
    });
  });
});
