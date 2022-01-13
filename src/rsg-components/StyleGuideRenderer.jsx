/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

console.log('SG RENDERER SIGHTED');

export function StyleGuideRenderer({ children, toc }) {
  return (
    <div>
      <header className={'header'}>
        <nav>
          HEADER LOGO AND NAVIGATION
        </nav>
      </header>

      <main>
        <div className={'side'}>
          {toc}
        </div>
        <div className={'content'}>
          {children}
        </div>
      </main>

      <footer>
        <span>Footer {new Date().getFullYear()}. All rights reserved.</span>
      </footer>
  
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
};

export default StyleGuideRenderer;
