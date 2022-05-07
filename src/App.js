import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

import Home from './components/Home/Home.jsx';
import Study from './components/Study/Study.jsx';
import OurServices from './components/OurServices/OurServices.jsx';
import OurMasters from './components/OurMasters/OurMasters.jsx';

import Online from './components/Study/Online/Online.jsx';
import FullTime from './components/Study/FullTime/FullTime.jsx';
import Info from './components/Info/Info.jsx';
import { Scroll } from './components/Scroll/ScrollToTop';

const App = () => (
  <>
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="study" element={<Study />} />
          <Route path="services" element={<OurServices />} />
          <Route path="price" element={<OurMasters />} />
          {/* <Route path="shop" element={<Shop />} /> */}
          {/* <Route path="login" element={<Login />} /> */}

          <Route path="info" element={<Info />} />
          <Route path="online" element={<Online />} />
          <Route path="fulltime" element={<FullTime />} />
        </Route>
      </Routes>
      <Scroll showBelow={250} />
    </div>
  </>
);

export default App;
