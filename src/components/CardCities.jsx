import React from 'react';
import { Link } from 'react-router-dom';

const CardCities = ({ data }) => {
    const { name, country, description, image, currency } = data;

    return (
        <div className="card w-80 border-secondary pt-3 col-10 col-md-5 col-xl-3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img className="card-img-top object-cover" src={image} alt="Imagen" style={{ height: '50%' }} />          
            <div className="card-body bg-black text-white rounded-md opacity-80 text-center">
                    <h4 className="card-title text-orange-400">{name}</h4>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-text">Currency: {currency}</p>
                <Link to="/details" className="btn btn-secondary text-orange-400 col-4 align-self-center">Details</Link>
            </div>
        </div>
    );
};

export default CardCities;