import React from 'react';

import './card.styles.css';

export const Card = props => (
        <div className='card-container'>
            <div className="img-container">
                <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
            </div>
            <h2> {props.monster.name} </h2>
            <p><span>Phone number:</span> { props.monster.phone } </p>
            <p> { props.monster.email } </p>
            <p><span>City:</span> { props.monster.address.city } </p>
        </div>
)