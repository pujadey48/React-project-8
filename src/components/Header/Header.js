import React from 'react';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="sport-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                Sports Club
                </a>
            </div>
            </nav>
        </div>
    );
};

export default Header;