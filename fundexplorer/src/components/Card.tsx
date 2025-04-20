import React from 'react';
import '../styles/card.css';
import { FundsOptionalId } from '../dataTypes';
import { FileText, ArrowRight } from 'react-feather';

interface CardProps {
    cardData: FundsOptionalId
}

const Card: React.FC<CardProps> = ({ cardData }) => {

    return (
        <div className="card" >
            <div className="card-header">
                <div>
                    {cardData.name}
                </div>
                <div className='card-benchmark'>
                    {cardData.benchmark}
                </div>
            </div>
            <div style={{borderLeft: `0.25rem solid var(${cardData.regionColor})` }}>
                <div className="card-body">
                    <div className="card-info">
                        <div className='card-info-inner'>
                            <span className='card-info-inner-title'>Fund Size</span>
                            <span>{cardData.size}</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <div className='card-info-inner'>
                            <span className='card-info-inner-title'>Holdings</span>
                            <span>{cardData.holdings}</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <div className='card-info-inner'>
                            <span className='card-info-inner-title'>Launch Date</span>
                            <span>{cardData.launchDate}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <span className='card-footer-left'><FileText className='card-footer-left-icon' /> Monthly sheet</span>
                    <span><ArrowRight size={16} className='card-icon' /></span>
                </div>

            </div>
        </div>
    );
};

export default Card;