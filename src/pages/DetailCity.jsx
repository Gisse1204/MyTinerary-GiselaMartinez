import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const DetailCity = () => {
  const { id } = useParams();
  const [cityDetails, setCityDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:1212/api/cities/${id}`)
      .then((response) => {
        setCityDetails(response.data.response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching city details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-10 w-full h-screen flex flex-col items-center bg-center bg-cover">
      <div className="flex flex-wrap justify-center">
        <div className="card w-80 border-secondary pt-3 col-10 col-md-5 col-xl-3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <img className="card-img-top object-cover" src={cityDetails.image} alt={`Image of ${cityDetails.name}`} />
          <div className="card-body bg-black text-white rounded-md opacity-80 text-center">
            <h4 className="card-title text-orange-400">{cityDetails.name}</h4>
            <p className="card-text">Country: {cityDetails.country}</p>
            {/* <p className="card-text">Description: {cityDetails.description}</p>
            <p className="card-text">Currency: {cityDetails.currency}</p> */}
            <Link to="/cities" className="btn btn-secondary text-orange-400 col-4 align-self-center">Back</Link>
          </div>
        </div>
      </div>
      <div className="bg-black text-white rounded-md opacity-80 text-center mt-4">
      <section className='flex justify-center items-center w-full bg-center flex-row-reverse'>
      <img className='h-80' src='/Under.png' alt="Under" />
      </section>
        <div>
          <h2>Itineraries</h2>
          {/* Add logic or content for Itineraries */}
        </div>
        <div>
          <h2>Activities</h2>
          {/* Add logic or content for Activities */}
        </div>
      </div>
      <div className="container mx-auto" style={{ lineHeight: '49px' }}><Footer/></div> 
    </div>
  );
};

export default DetailCity;