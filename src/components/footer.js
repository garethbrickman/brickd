import React from 'react';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__item footer__copyright">
      © {new Date().getFullYear()} Suave Na Nave LLC. Built with 
      {` `}
      <a href="https://www.gatsbyjs.org"
      target="_blank" rel="noopener noreferrer">Gatsby</a>.
    </div>
  </footer>
);

export default Footer;