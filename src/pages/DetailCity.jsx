import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findCity } from '../actions/cityActions';
import { findItineraries } from '../actions/itineraryActions';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const DetailCity = (props) => {
  const { id } = useParams();
  console.log('ID:', id);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    props.findCity(id);
    props.findItineraries(id);
    setLoading(false);
  }, [id, showMore]);

  const handleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }

  const cityName = props.detailCity ? props.detailCity.name : '';
  const cityItineraries = props.itinerary && props.itinerary.itinerary;
  const hasMatchingItineraries = cityItineraries && cityItineraries.some((itinerary) => itinerary.cityRelated._id === id);
  console.log('cityItineraries:', cityItineraries);
  return (
    <div className="p-5 w-full h-screen flex flex-col items-center bg-center bg-cover">
      <div className="flex flex-wrap justify-center">
        <div className="card border-secondary pt-3 col-10 col-md-5 col-xl-3" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {props.detailCity && (
            <img className="card-img-top object-cover" src={props.detailCity.image} alt={`Image of ${props.detailCity.name}`} style={{ width: '800px', height: '500px' }}/>
          )}
          <div className="card-body bg-black text-white rounded-md opacity-80 text-center" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'rgba(0, 0, 0, 0.8)' }}>
            {props.detailCity && (
              <h4 style={{ fontStyle: 'italic', color: 'orange', fontSize: '24px' }} className="card-title text-orange-400">
                {props.detailCity.name}
              </h4>
            )}
            {props.detailCity && (
              <p>Country: {props.detailCity.country}</p>
            )}
            {props.detailCity && (
              <p>Description: {props.detailCity.description}</p>
            )}
            {props.detailCity && (
              <p>Currency: {props.detailCity.currency}</p>
            )}
            <Link to="/cities" style={{ fontStyle: 'italic', color: 'orange', fontSize: '24px', marginTop: '20px' }} className="btn btn-secondary col-4 align-self-center">Back</Link>
          </div>
        </div>
      </div>

      <div className="bg-black text-white rounded-md opacity-90 text-center mt-4">
        <div>
          <h2 style={{ fontStyle: 'italic', color: 'orange', fontSize: '40px' }}>Itineraries</h2>
          <div className="contenedor-itinerary">          
          {Array.isArray(cityItineraries) && cityItineraries.length > 0 ? (
            cityItineraries.map((itinerary, index) => {
              if (itinerary.cityRelated === id) {
                return (
                  <div className="itinerary-container" key={index} style={{ fontStyle: 'italic', fontSize: '24px', marginBottom: '30px' }}>
                    <div className="title" style={{ color: 'yellow', fontSize: '32px' }}>
                      <h2>{itinerary.title}</h2>
                    </div>

                    <div className="photo-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                      <img
                        className="photo-image"
                        src={itinerary.photo}
                        alt={`Image of ${itinerary.photo}`}
                        style={{
                          width: '40%',
                          height: '40%',
                          //objectFit: 'cover',
                        }}/>
                    </div>
            
                    <div className="name-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                      <img
                        className="user-image"
                        src={itinerary.autor.profilePhoto}
                        alt={`Image of ${itinerary.autor.fullName}`}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '40%',
                          objectFit: 'cover',
                        }}
                      />
                      <h3>{itinerary.autor.fullName}</h3>
                    </div>
            
                    <div className="info-container" style={{ marginBottom: '10px' }}>
                      <div className="details">
                        <div className="price-and-duration" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                          <div className="price">
                            <p className="text-orange-400">Price:</p>
                            <div className="cash-container" style={{ color: 'green' }}>
                              {Array.from({ length: itinerary.price }).map((e, i) => (
                                <FontAwesomeIcon key={i} icon={faMoneyBillWave} />
                              ))}
                            </div>
                          </div>

                          <div className="duration">
                            <p className="text-orange-400">Duration:</p>
                            <p>{itinerary.duration} Hours</p>
                          </div>
                        </div>

                        <div className="like-and-hashtags" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                          <div className="like">
                            <p className="text-orange-400">Likes:</p>
                            <label className="container">
                              <input type="checkbox" />
                              <svg id="Glyph" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z" id="XMLID_254_"></path>
                                <path d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z M5,25.5c-0.828,0-1.5-0.672-1.5-1.5c0-0.828,0.672-1.5,1.5-1.5c0.828,0,1.5,0.672,1.5,1.5C6.5,24.828,5.828,25.5,5,25.5z" id="XMLID_256_"></path>
                              </svg>
                            </label>
                            <p>{itinerary.like}</p>
                          </div>

                          <div className="hashTags">
                            <p className="text-orange-400">HashTags:</p>
                            <p>{itinerary.hashTags.join(', ')}</p>
                          </div>
                        </div>
                      </div>
            
                      <div className="comments">
                        <p className="text-orange-400">Comments:</p>
                        <p>{itinerary.comments}</p>
                      </div>
                    </div>
            
                    <button onClick={handleShowMore} className="btn btn-secondary text-orange-400 col-4 align-self-center">View More</button>
                    {showMore && (
                      <div className="bg-black text-white rounded-md opacity-80 text-center mt-4">
                        <section className='flex justify-center items-center w-full bg-center flex-row-reverse'>
                          <img className='h-80' src='/Under.png' alt="Under" />
                        </section>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })
            ) : (              
              <p>It looks like there are not any itineraries available for this city just yet. But do not worry, there are plenty of other amazing destinations to explore in the meantime! 😊</p>
            )}
          </div>
        </div>

        <div>
          <h2>Activities</h2>
        </div>
      </div>
      <div className="container mx-auto" style={{ lineHeight: '49px' }}><Footer /></div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match?.params?.id;
  return {
    detailCity: state.city.city,
    itinerary: state.itinerary,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      findCity,
      findItineraries,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailCity);

