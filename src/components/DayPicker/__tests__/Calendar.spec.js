import React from 'react';
import { shallow } from 'enzyme';
import Calendar, { getDateToFocus } from '../components/Calendar';

const CalendarIcon = () => <div>Calendar Icon</div>;

const today = new Date(2019, 3, 21, 0, 0, 0, 0);
const end = new Date(2019, 3, 24, 0, 0, 0, 0);
const disabledBefore = new Date(2019, 3, 10, 0, 0, 0, 0);
const hiddenBefore = new Date(2019, 3, 8, 0, 0, 0, 0);
const disabledAfter = new Date(2019, 4, 21, 0, 0, 0, 0);
global.Date = jest.fn(() => today);

describe('Calendar', () => {
  let component;

  it('renders correctly with defaults', () => {
    component = shallow(<Calendar today={new Date()} />);

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with props provided', () => {
    component = shallow(
      <Calendar
        start={today}
        end={end}
        hiddenBefore={hiddenBefore}
        disabledBefore={disabledBefore}
        disabledAfter={disabledAfter}
        onDayClick={e => e}
        setFocusElementRef={e => e}
        firstDayOfWeek={4}
        monthsToShow={6}
        startLabel="Depart"
        endLabel="Return"
        monthLabels={['Jan', 'Feb']}
        Icon={CalendarIcon}
        rowStyles={{}}
      />
    );

    expect(component).toMatchSnapshot();
  });

  describe('renderDay()', () => {
    it('renders correctly', () => {
      const date = new Date(2019, 3, 10, 0, 0, 0, 0);
      const modifiers = { today: true };

      component = shallow(
        <Calendar
          start={today}
          end={end}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          startLabel="Depart"
          endLabel="Return"
          monthLabels={['Jan', 'Feb']}
          Icon={CalendarIcon}
          rowStyles={{}}
        />
      );

      const renderedDay = shallow(
        component.instance().renderDay(date, modifiers)
      );

      expect(renderedDay).toMatchSnapshot();
    });

    it('renders correctly when day should be hidden', () => {
      const date = new Date(2019, 3, 10, 0, 0, 0, 0);
      const modifiers = { hidden: true };

      component = shallow(
        <Calendar
          start={today}
          end={end}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          startLabel="Depart"
          endLabel="Return"
          monthLabels={['Jan', 'Feb']}
          Icon={CalendarIcon}
          rowStyles={{}}
        />
      );

      expect(component.instance().renderDay(date, modifiers)).toBe(null);
    });
  });

  describe('renderMonthCaption()', () => {
    it('renders correctly', () => {
      component = shallow(
        <Calendar
          start={today}
          end={end}
          hiddenBefore={hiddenBefore}
          disabledBefore={disabledBefore}
          disabledAfter={disabledAfter}
          onDayClick={e => e}
          setFocusElementRef={e => e}
          firstDayOfWeek={4}
          monthsToShow={6}
          startLabel="Depart"
          endLabel="Return"
          monthLabels={['Jan', 'Feb']}
          Icon={CalendarIcon}
          rowStyles={{}}
        />
      );

      const renderedMonthCaption = shallow(
        component.instance().renderMonthCaption({ date: new Date(2019, 12, 1) })
      );

      expect(renderedMonthCaption).toMatchSnapshot();
    });
  });

  describe('getDateToFocus()', () => {
    it('returns "start" if start date is selected', () => {
      expect(getDateToFocus({ start: disabledAfter, disabledBefore })).toBe(
        'start'
      );
    });

    it('returns the "disabledBefore" date if no start date is selected', () => {
      expect(getDateToFocus({ start: null, disabledBefore })).toBe(
        'disabledBefore'
      );
    });

    it('returns "today" if start date and disabledBefore date are not selected', () => {
      expect(getDateToFocus({ start: null, disabledBefore: null })).toBe(
        'today'
      );
    });
  });
});
