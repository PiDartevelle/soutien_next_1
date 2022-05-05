import React from 'react';
import '../styles/CharacterCard.css';
import { Link } from 'react-router-dom';

const CharacterCard = ({fullname, family, title, id}) => {
    return (
        
        <div className='MainWrapper'>
            <Link to={`/character/${id}`} >
            <div className='Blaze'>
            <h1>{fullname}</h1>
            <h2>{family}</h2>
            </div>
            <div className="Fam">
            <h2>{title}</h2>
            </div>
            </Link>
            </div>
        
    );
};

export default CharacterCard;