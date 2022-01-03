/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';


console.log('LINKS RENDERER SIGHTED!');
const styles = ({ color }) => ({
  // overwrites default styles
  link: {
    '&, &:link, &:visited': {
      fontSize: '',
      color: '',
      textDecoration: '',
    },
    '&:hover, &:active': {
      isolate: '',
      color: '',
      cursor: '',
    },
  },
});

export function LinkRenderer({ classes, children, ...props }) {
  // the code below makes sure that rsg components class is not added to links
  return (
    <a {...props} className={cx(props.className)}>
      {children}
    </a>
  );
}

LinkRenderer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
