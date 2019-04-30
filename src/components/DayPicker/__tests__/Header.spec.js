import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
  let component;

  it('renders correctly with defaults', () => {
    component = shallow(
      <Header
        closeDialog={() => {}}
        rowStyles={{}}
        dayLabels={['Mon', 'Tue']}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with props provided', () => {
    component = shallow(
      <Header
        headerLabel="header label"
        closeAriaLabel="close"
        closeDialog={() => {}}
        rowStyles={{}}
        dayLabels={['Mon', 'Tue', 'Wed']}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
