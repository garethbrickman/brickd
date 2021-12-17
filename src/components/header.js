import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_logo">
      <h1><Link to="/">brick</Link></h1>
    </div>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://docs.google.com/document/d/e/2PACX-1vTEM1kd5KiWRkFXalikAfMTve1sm4vg4PRfgvWxF8u_n01GhnbVRJio2X-W2kyulRE_B4N4ItWUN5_2/pub" target="_blank" rel="noopener noreferrer">Resume</a>
{/*       <Link to="/blog">Blog</Link> */}
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
