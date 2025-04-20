import React from 'react';
import '../styles/banner.css';

const Banner: React.FC = () => {

    return (
        <div className="banner">
            <div className='banner-innner'>
                <div className="breadcrumb">
                    <ul>
                        <li>
                            <a href="/">{`Home`}</a>
                        </li>
                        <span>/</span>
                        <li>
                            <a href="Funds">{`Funds`}</a>
                        </li>
                    </ul>
                </div>
                <h1 className="page-title">Our Funds</h1>
            </div>
        </div>
    );
};

export default Banner;