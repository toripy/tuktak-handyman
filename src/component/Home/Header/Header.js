import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
        </div>
    );
};

export default Header;