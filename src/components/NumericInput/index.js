import React from 'react';
import InputNumber from 'rc-input-number';
import { injectGlobal, css } from 'emotion';

import PlusMinusIcon from '../../icons/PlusMinusIcon';
import { airwaysColours } from '../../theme/airways';
// import { CSS_SELECTOR_HOVER } from '../../constants/css';

// function NumericInput(props) {
//   return <InputNumber {...props} />;
// }

/*
  // REMOVED STYLES
        .rc-input-number-handler-wrap {
      float: right;
      border-left: 1px solid #D9D9D9;
      width: 20px;
      height: 100%;
    }

      .rc-input-number-handler-up {
    border-bottom: 1px solid #D9D9D9;
    padding-top: 1px;
  }

  .rc-input-number:hover {
    border-color: #23c0fa;
  }
  .rc-input-number:hover .rc-input-number-handler-up,
  .rc-input-number:hover .rc-input-number-handler-wrap {
    border-color: #23c0fa;
  }
  .rc-input-number-disabled:hover {
    border-color: #d9d9d9;
  }
  .rc-input-number-disabled:hover .rc-input-number-handler-up,
  .rc-input-number-disabled:hover .rc-input-number-handler-wrap {
    border-color: #d9d9d9;
  }
    .rc-input-number-handler-down-disabled:hover,
  .rc-input-number-handler-up-disabled:hover {
    color: #999;
    border-color: #d9d9d9;
  }
    .rc-input-number-disabled .rc-input-number-handler:hover {
    color: #999;
    border-color: #d9d9d9;
  }

  // MODIFIED STYLES
      .rc-input-number-focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

    .rc-input-number {
    margin: 0;
    padding: 0;
    line-height: 26px;
    font-size: 12px;
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
  }

    .rc-input-number-focused {
    border-color: ${airwaysColours.bayBlue};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

    .rc-input-number-handler-active {
    background: #ddd;
  }
*/

injectGlobal(`
  .rc-input-number {
    margin: 0;
    padding: 0;
    line-height: 26px;
    font-size: 12px;
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid ${airwaysColours.grey};
    border-radius: 0px;
  }
  .rc-input-number-focused {
    border-color: ${airwaysColours.bayBlue};
  }
  .rc-input-number-handler {
    text-align: center;
    line-height: 12px;
    height: 12px;
    overflow: hidden;
    display: block;
    -ms-touch-action: none;
        touch-action: none;
  }
  .rc-input-number-handler-up-inner,
  .rc-input-number-handler-down-inner {
    color: #666666;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;
    -webkit-user-select: none;
  }
  .rc-input-number-input-wrap {
    overflow: hidden;
    height: 100%;
  }
  .rc-input-number-input {
    width: 100%;
    text-align: center;
    outline: 0;
    -moz-appearance: textfield;
    line-height: 26px;
    height: 100%;
    transition: all 0.3s ease;
    color: #666666;
    border: 0;
    border-radius: 5px;
    padding: 0;
  }
  .rc-input-number-handler-up-inner:after {
    content: '+';
  }
  .rc-input-number-handler-down-inner:after {
    content: '-';
  }
  .rc-input-number-handler-down-disabled,
  .rc-input-number-handler-up-disabled {
    opacity: 0.72;
  }
  .rc-input-number-disabled .rc-input-number-input {
    opacity: 0.72;
    cursor: not-allowed;
    background-color: #f3f3f3;
  }
  .rc-input-number-disabled .rc-input-number-handler {
    opacity: 0.72;
  }
`);

const SELECTORS = {
  RCI: {
    ROOT: {
      CORE: '.rc-input-number',
      FOCUSED: '.rc-input-number-focused',
      DISABLED: '.rc-input-number-disabled'
    },
    CONTROLS: {
      WRAPPER: 'rc-input-number-handler-wrap',
      UP: {
        CORE: '.rc-input-number-handler-up',
        DISABLED: '.rc-input-number-handler-up-disabled'
      },
      DOWN: {
        CORE: '.rc-input-number-handler-down',
        DISABLED: '.rc-input-number-handler-down-disabled'
      },
      UP_AND_DOWN: {
        CORE: '.rc-input-number-handler',
        ACTIVE: '.rc-input-number-handler-active'
      }
    },
    INPUT: {
      WRAPPER: '.rc-input-number-input-wrap',
      CORE: '.rc-input-number-input'
    }
  }
};

// const styles = {
//   controls: {
//     disabled: {
//       opacity: '0.72',
//       [CSS_SELECTOR_HOVER]: {
//         color: '#999',
//         borderColor: '#d9d9d9'
//       }
//     }
//   },
// };

// const upDownSharedStyles = {

// }

// const rcInputNumberDefaulStyles = {
//   [SELECTORS.RCI.ROOT.CORE]: {
//     margin: '0px',
//     padding: '0px',
//     lineHeight: '26px',
//     fontSize: '12px',
//     height: '26px',
//     display: 'inline-block',
//     verticalAlign: 'middle',
//     border: '1px solid #D9D9D9',
//     borderRadius: '5px'
//     // [CSS_SELECTOR_HOVER]: {
//     //   borderColor: '#23c0fa',
//     //   [SELECTORS.RCI.CONTROLS.UP]: {
//     //     borderColor: '#23c0fa'
//     //   },
//     //   [SELECTORS.RCI.CONTROLS.WRAPPER]: {
//     //     borderColor: '#23c0fa'
//     //   }
//     // }
//   },
//   [SELECTORS.RCI.ROOT.FOCUSED]: {
//     borderColor: '#40a9ff',
//     boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)'
//   },
//   [SELECTORS.RCI.CONTROLS.UP_AND_DOWN.CORE]: {
//     textAlign: 'center',
//     lineHeight: '12px',
//     height: '12px',
//     overflow: 'hidden',
//     display: 'block',
//     touchAction: 'none'
//   },
//   [SELECTORS.RCI.CONTROLS.UP_AND_DOWN.ACTIVE]: {
//     background: '#ddd'
//   },
//   [`${SELECTORS.RCI.ROOT.CORE}:hover`]: {
//     borderColor: '#23c0fa',
//     [SELECTORS.RCI.CONTROLS.UP.CORE]: {
//       borderColor: '#23c0fa'
//     },
//     [SELECTORS.RCI.CONTROLS.WRAPPER]: {
//       borderColor: '#23c0fa'
//     }
//   },
//   [`${SELECTORS.RCI.ROOT.DISABLED}:hover`]: {
//     borderColor: '#d9d9d9',
//     [SELECTORS.RCI.CONTROLS.UP.CORE]: {
//       borderColor: '#d9d9d9'
//     },
//     [SELECTORS.RCI.CONTROLS.WRAPPER]: {
//       borderColor: '#d9d9d9'
//     }
//   },
//   [SELECTORS.RCI.INPUT.WRAPPER]: {
//     overflow: 'hidden',
//     height: '100%'
//   },
//   [SELECTORS.RCI.INPUT.CORE]: {
//     width: '100%',
//     textAlign: 'center',
//     outline: '0px',
//     // '-moz-appearance': textfield,
//     lineHeight: '26px',
//     height: '100%',
//     transition: 'all 0.3s ease',
//     color: '#666666',
//     border: '0px',
//     borderRadius: '5px',
//     padding: '0px'
//   },
//   [SELECTORS.RCI.CONTROLS.WRAPPER]: {
//     float: 'right',
//     borderLeft: '1px solid #D9D9D',
//     width: '20px',
//     height: '100%'
//   },
//   [SELECTORS.RCI.CONTROLS.UP.CORE]: {
//     borderBottom: '1px solid #D9D9D9',
//     paddingTop: '1px'
//   },
//   [SELECTORS.RCI.CONTROLS.DOWN.DISABLED]: {
//     opacity: '0.72'
//   },
//   [SELECTORS.RCI.CONTROLS.UP.DISABLED]: {
//     opacity: '0.72'
//   },
//   [`${[SELECTORS.RCI.CONTROLS.DOWN.DISABLED]}:hover`]: {
//     color: '#999',
//     borderColor: '#d9d9d9'
//   },
//   [`${[SELECTORS.RCI.CONTROLS.UP.DISABLED]}:hover`]: {
//     color: '#999',
//     borderColor: '#d9d9d9'
//   },
//   [SELECTORS.RCI.ROOT.DISABLED]: {
//     [SELECTORS.RCI.INPUT.CORE]: {
//       opacity: '0.72',
//       cursor: 'not-allowed',
//       backgroundColor: '#f3f3f3',
//       outline: '2px solid red'
//     },
//     [SELECTORS.RCI.CONTROLS.UP_AND_DOWN.WRAPPER]: {
//       opacity: '0.72'
//     },
//     [`${SELECTORS.RCI.CONTROLS.UP_AND_DOWN.WRAPPER}:hover`]: {
//       color: '#999',
//       borderColor: '#d9d9d9'
//     }
//   }
// };

// const { RCI } = SELECTORS; // my own destructinr glol. BUT REMOVE AFTER?

// // // TODO: use this as basis of OVERRIDES. install the components standard stylesheet
// const rciInputNumberStyles = {
//   [RCI.ROOT.CORE]: {
//     outline: '1px solid red',
//     position: 'relative',
//     [RCI.CONTROLS.UP.CORE]: {
//       outline: '1px solid blue',
//       position: 'absolute',
//       right: '0px'
//     },
//     [RCI.CONTROLS.DOWN.CORE]: {
//       outline: '1px solid blue',
//       position: 'absolute',
//       left: '0px'
//     }
//   }
// };

const DEV = {
  GREEN: { outline: '2px solid green' },
  BLUE: { outline: '2px solid blue' },
  RED: { outline: '2px solid red' }
};

const whatItShouldBeGutter = '18px';

const getRcInputNumberStyles = ({ isInvalid }) => ({
  [SELECTORS.RCI.ROOT.CORE]: {
    position: 'relative',
    width: '100%',
    height: '55px', // TODO: move to theme?
    ...(isInvalid && { borderColor: '#ed710b' })
  },
  [SELECTORS.RCI.CONTROLS.UP.CORE]: {
    position: 'absolute',
    right: '0px',
    width: `calc(15px + ${whatItShouldBeGutter})`,
    height: '100%'
  },
  [SELECTORS.RCI.CONTROLS.DOWN.CORE]: {
    position: 'absolute',
    left: '0px',
    width: `calc(15px + ${whatItShouldBeGutter})`,
    height: '100%'
  },
  [SELECTORS.RCI.INPUT.CORE]: {
    width: '99%',
    borderRadius: '0px',
    display: 'block',
    fontSize: '16px', // TODO: is in theme already?
  },
  [SELECTORS.RCI.CONTROLS.DOWN.DISABLED]: {
    '.runway-numeric-input__increment_icon': {
      stroke: airwaysColours.grey
    },
    '.runway-numeric-input__decrement_icon': {
      stroke: airwaysColours.grey
    }
  },
  [SELECTORS.RCI.CONTROLS.UP.DISABLED]: {
    '.runway-numeric-input__increment_icon': {
      stroke: airwaysColours.grey
    },
    '.runway-numeric-input__decrement_icon': {
      stroke: airwaysColours.grey
    }
  }
});

const labelStyles = {
  height: '28px',
  lineHeight: '1.75',
  letterSpacing: 'normal',
  fontSize: '16px',
  fontFamily: 'Ciutadella-Rg',
  color: airwaysColours.charcoal,
};

const NumericInput = props => {
  const { label, id, isInvalid, ...rest } = props;
  const up = (
    <PlusMinusIcon
      className="runway-numeric-input__increment_icon"
      strokeWidth="10"
      height="100%"
      width="100%"
      isPlus
    />
  );
  const down = (
    <PlusMinusIcon
      className="runway-numeric-input__decrement_icon"
      strokeWidth="10"
      height="100%"
      width="100%"
      isPlus={false}
    />
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label htmlFor={id} css={labelStyles}>
      {label}
      <div css={getRcInputNumberStyles({ isInvalid })}>
        <InputNumber {...rest} id={id} upHandler={up} downHandler={down} />
      </div>
    </label>
  );
};

NumericInput.propTypes = {
  ...InputNumber.propTypes
};

export default NumericInput;
