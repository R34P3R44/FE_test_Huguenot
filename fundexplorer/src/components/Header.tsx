import React from 'react';
import '../styles/header.css';
import { User, Search, ChevronUp, ChevronDown } from 'react-feather';
import { Navbar } from '../dataTypes';
import { navbarItems } from '../constants';

const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="header-top">
                <img src="/JOH_logo.svg" alt="JO Hambro Logo" />
                <div className='nav-wrapper'>
                    <nav className="nav">
                        {navbarItems.map((navItem: Navbar) => (
                            <a key={navItem.id} href="#">
                                {navItem.value}
                                {navItem.isOpen ? <ChevronUp strokeWidth={1} size={18} className='chevron-icon'/> : <ChevronDown size={18} strokeWidth={1} className='chevron-icon'/>}
                            </a>
                        ))}
                    </nav>
                    <div className="actions">
                        <button className="profile-button">
                            <User color='#FFF' className='user-icon'/>
                            UK | Professional
                        </button>
                        <Search size={24} />                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;