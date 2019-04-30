import React from 'react';
import PropTypes from 'prop-types';

import { colours, fontFamily } from '../../../theme/airways';

import CrossIcon from '../../../icons/CrossIcon';

const ICON_SIZE = '32px';

function Header({ closeDialog, closeAriaLabel, headerLabel, HeaderIcon }) {
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
          // padding: '0 0 0 12px' // TODO: ROGER changed
          padding: '0 0 0 15px' // TODO: ROGER added. Design says 15px but consistent with header is 12px
          // settle on one
        }}
      >
        {HeaderIcon && (
          <HeaderIcon
            height={ICON_SIZE}
            width={ICON_SIZE}
            css={{ fill: colours.white, marginRight: '8px' }}
          />
        )}
        <span
          css={{
            flex: 1,
            justifySelf: 'left'
          }}
        >
          {headerLabel}
        </span>
        <button
          aria-label={closeAriaLabel}
          onClick={closeDialog}
          type="button"
          css={{
            background: 'none',
            height: `65px`,
            padding: 0,
            lineHeight: 0,
            border: 'none',
            width: '52px',
            cursor: 'pointer'
          }}
        >
          <CrossIcon
            css={{ fill: 'white' }}
            height={ICON_SIZE}
            width={ICON_SIZE}
          />
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  closeAriaLabel: PropTypes.string,
  headerLabel: PropTypes.string,
  HeaderIcon: PropTypes.func
};

Header.defaultProps = {
  closeAriaLabel: '',
  headerLabel: '',
  HeaderIcon: null
};

export default Header;
