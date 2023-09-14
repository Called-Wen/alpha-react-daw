import { Routes, Route } from 'react-router-dom'


import Home from '../pages/Home.js';
import About from '../pages/About.js'; 
import Contact from '../pages/Contacts.js';
import Services from '../pages/Services.js';



function MyRouter(){ 

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/services" element={<Services />} />


        </Routes> 

    )

}

export default MyRouter;