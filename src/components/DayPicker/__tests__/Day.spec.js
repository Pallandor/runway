import React from 'react';
import { shallow } from 'enzyme';
import Day, { SelectionLabel } from '../components/Day';

const DummyIcon = () => <div>Icon</div>;

describe('SelectionLabel', () => {
  let component;

  it('renders correctly with defaults', () => {
    component = shallow(<SelectionLabel />);

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with props provided', () => {
    component = shallow(
      <SelectionLabel isStartDate={false} label="Depart" Icon={DummyIcon} />
    );

    expect(component).toMatchSnapshot();
  });
});

describe('Day', () => {
  let component;

  it('renders correctly with defaults', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{}}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with props provided', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{}}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for start date', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{ start: true }}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for end date', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{ end: true }}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for outside date', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{ outside: true }}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for selected date', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{ selected: true }}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for disabled date', () => {
    component = shallow(
      <Day
        setFocusElementRef={e => e}
        day={new Date(2019, 3, 20, 0, 0, 0)}
        modifiers={{ disabed: true }}
        startLabel="Depart"
        endLabel="Return"
        Icon={DummyIcon}
      />
    );

    expect(component).toMatchSnapshot();
  });

  describe('setFocusElementRef()', () => {
    const setFocusElementRefMock = jest.fn();

    afterEach(() => {
      setFocusElementRefMock.mockReset();
    });

    it('does not call this.props.setFocusElement when parentElement does not exist', () => {
      component = shallow(
        <Day
          setFocusElementRef={setFocusElementRefMock}
          day={new Date(2019, 3, 20, 0, 0, 0)}
          modifiers={{ disabed: true }}
          startLabel="Depart"
          endLabel="Return"
          Icon={DummyIcon}
        />
      );
      component.instance().setFocusElementRef({}, { focusElement: true });
      expect(setFocusElementRefMock.mock.calls.length).toBe(0);
    });

    it('does not call this.props.setFocusElement when focusElement modifier is false', () => {
      component = shallow(
        <Day
          setFocusElementRef={setFocusElementRefMock}
          day={new Date(2019, 3, 20, 0, 0, 0)}
          modifiers={{ disabed: true }}
          startLabel="Depart"
          endLabel="Return"
          Icon={DummyIcon}
        />
      );
      component
        .instance()
        .setFocusElementRef({ parentElement: {} }, { focusElement: false });
      expect(setFocusElementRefMock.mock.calls.length).toBe(0);
    });

    it('calls this.props.setFocusElement when parentElement exists and focusElement modifier is true', () => {
      component = shallow(
        <Day
          setFocusElementRef={setFocusElementRefMock}
          day={new Date(2019, 3, 20, 0, 0, 0)}
          modifiers={{ disabed: true }}
          startLabel="Depart"
          endLabel="Return"
          Icon={DummyIcon}
        />
      );
      component
        .instance()
        .setFocusElementRef({ parentElement: {} }, { focusElement: true });
      expect(setFocusElementRefMock.mock.calls.length).toBe(1);
    });
  });
});
