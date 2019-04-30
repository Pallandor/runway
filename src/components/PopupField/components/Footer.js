import React from 'react';
import PropTypes from 'prop-types';

import { colours, fontFamily } from '../../../theme/airways';

import Button from '../../Button';
import CrossIcon from '../../../icons/CrossIcon';

const ICON_SIZE = '32px';

/*
   <Footer
        primaryLabel="2 Passengers"
        secondaryLabel="1 Adult, 1 Infant, 1 Child"
        actionText="Confirm"
        onAction={() => onFooterAction(closeDialog)}
      />
*/

const buildLabel = (primaryLabel, secondaryLabel = null) => {
  if (primaryLabel && secondaryLabel) {
    return (
      <div>{primaryLabel} {secondaryLabel}</div>
    )
  }
  // assume just a primaryLabel
  return (
    <div>{primaryLabel} {secondaryLabel}</div>
  )
};

const Footer = ({ primaryLabel, secondaryLabel, actionText, onAction, closeAriaLabel }) => {
  return (
    <div css={{ zIndex: 1 }}>
      <div
        css={{
          fontFamily: fontFamily.bold,
          background: colours.darkerGrey,
          color: colours.white,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px' // TODO: ROGER added. Design says 15px but consistent with header is 12px
          // settle on one
        }}
      >
        <span
          css={{
            flex: 1,
            justifySelf: 'left'
          }}
        >
          {buildLabel(primaryLabel, secondaryLabel)}
        </span>
        <Button label={actionText} onClick={onAction} />
        {/* 
          <button
          aria-label={closeAriaLabel}
          onClick={onAction}
          type="button"
          css={{
            background: 'none',
            height: `65px`,
            padding: 0,
            lineHeight: 0,
            border: 'none',
            width: '52px',
            cursor: 'pointer',
            // TODO: ROGER added
            color: 'white'
          }}
        >
          {actionText}
        </button>
        */}
      </div>
    </div>
  )
};

export default Footer;
