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
      <a href="https://drive.google.com/file/d/1DBe1Bw0sI9oXBHXs19-WaKcpC8P-pddo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
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
