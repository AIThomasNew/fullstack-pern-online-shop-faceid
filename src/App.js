import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import { Header, AboutUs, Study, OurServices, Footer } from './container';

import Navbar from './components/Navbar/Navbar.jsx';
// import { OurMasters } from './components/OurMasters/OurMasters.jsx';

// const App = () => (
//     <div>
//         <Routes>
//             <Route path="/" element={<Navbar />} />
//             <Route path="/header" element={<Header />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/study" element={<Study />} />
//             <Route path="/services" element={<OurServices />} />
//             <Route path="/footer" element={<Footer />} />
//         </Routes>
//     </div>
// );

// export default App;

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Study />
        <OurServices />

        {/* <Routes>
<Route path="/ourmasters" element={<OurMasters />} />
</Routes> */}

        <Footer />
    </div>
);

export default App;
