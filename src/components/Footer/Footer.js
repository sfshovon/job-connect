import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center bottom-0 bg-sky-200 text-dark">
      <div className="my-3">
        <h1 className="text-lg font-semibold text-center"> &copy; {year} by Job Connect </h1>
      </div>
    </footer>
  );
};

export default Footer;