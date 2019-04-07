import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

const Presentational = ({ children }) => (
  <div
    css={{
      outline: '1px solid red',
      display: 'block',
      height: '150px',
      width: '300px',
      backgroundColor: '#323232'
    }}
  >
    {children}
  </div>
);

const withPresentational = Component => props => (
  <Presentational>
    <Component {...props} />
  </Presentational>
);

// TODO: 3.1px is a computed value (see this.$checkedPos in https://github.com/markusenglund/react-switch/blob/141ab47744a934b32799bb4940a3a61bdfebf6eb/src/index.jsx)

// const existingTransitions = `background 0.25s ease 0s`;
const existingTransitions = `background 150ms ease 0s`;
// const offBorderColor = '#5f6060';
// const onBorderColor = '#323232';
const thickenBorder = (borderSize, checked) => ({
  '.react-switch-bg': {
    // border: `${borderSize}px solid rgb(95, 96, 96)`,
    transition: `${existingTransitions}, box-shadow 150ms ease 0s !important`,
    // boxShadow: 'inset rgb(95, 96, 96) 0px 0px 1px 2px'
    boxShadow: checked ? 'none' : 'inset #5f6060 0px 0px 1px 3px'
    // borderColor: checked ? onBorderColor : offBorderColor
  }
  // '.react-switch-handle': {
  //   top: `${3.1 + borderSize}px !important`,
  //   transform: `translateX(${3.1 + borderSize}px)`
  // }
});

const LocalStylesInjector = ({ children, borderSize, checked }) => (
  <div
    css={{
      '.react-switch': {
        verticalAlign: 'middle',
        marginLeft: '7px'
      },
      ...thickenBorder(borderSize, checked)
    }}
  >
    {children}
  </div>
);

const Text = ({ children }) => (
  <span
    css={{
      textTransform: 'uppercase',
      color: '#ffffff'
    }}
  >
    {children}
  </span>
);

class Toggled extends Component {
  state = {
    checked: false
  };

  handleChange = () => this.setState({ checked: !this.state.checked });

  render = () => {
    const { label } = this.props;
    return (
      <LocalStylesInjector borderSize={2} checked={this.state.checked}>
        <label htmlFor="small-radius-switch">
          <Text>{label}</Text>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            handleDiameter={24.8}
            offColor="#323232"
            onColor="#8de2e0"
            offHandleColor="#ffffff"
            onHandleColor="#ffffff"
            boxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.3)"
            uncheckedIcon={false}
            checkedIcon={false}
            height={31}
            width={49}
            className="react-switch"
            id="small-radius-switch"
          />
        </label>
      </LocalStylesInjector>
    );
  };
}

export default withPresentational(Toggled);
