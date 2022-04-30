import React from 'react';

import {
    Header,
    AboutUs,
    Study,
    OurServices,
    OurMasters,
    Footer,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Study />
        <OurServices />
        <OurMasters />
        <Footer />
    </div>
);

export default App;
