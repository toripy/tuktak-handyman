import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../OurServices/Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;