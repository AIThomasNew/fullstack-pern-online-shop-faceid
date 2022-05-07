import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import { Scroll } from '../Scroll/ScrollToTop';

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      {/* <Scroll showBelow={250} /> */}

      <Footer />
    </div>
  );
};

export { Layout };
