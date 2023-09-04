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
    setShowMore(!showMore);
    console.log('showMore:', !showMore);
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }

  const cityName = props.detailCity ? props.detailCity.name : '';
  const cityItineraries = props.itinerary && props.itinerary.itinerary;
  const hasMatchingItineraries = cityItineraries && cityItineraries.some((itinerary) => itinerary.cityRelated._id === id);
  console.log('cityItineraries:', cityItineraries);
  return (
    <div className="p-10 w-full h-screen flex flex-col items-center bg-center bg-cover">
      <div className="flex flex-wrap justify-center">
        <div className="card w-80 border-secondary pt-3 col-10 col-md-5 col-xl-3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {props.detailCity && (
            <img className="card-img-top object-cover" src={props.detailCity.image} alt={`Image of ${props.detailCity.name}`} />
          )}
          <div className="card-body bg-black text-white rounded-md opacity-80 text-center">
            {props.detailCity && (
              <h4 className="card-title text-orange-400">{props.detailCity.name}</h4>
            )}
            {props.detailCity && (
              <p>Country: {props.detailCity.country}</p>
            )}
            <Link to="/cities" className="btn btn-secondary text-orange-400 col-4 align-self-center">Back</Link>
          </div>
        </div>
      </div>

      <div className="bg-black text-white rounded-md opacity-80 text-center mt-4">
        <div>
          <h2>Itineraries</h2>
          <div className="contenedor-itinerary">
          
          {Array.isArray(cityItineraries) && cityItineraries.length > 0 ? (
  cityItineraries.map((itinerary, index) => {
              if (itinerary.cityRelated === id) {
                return (
                  <div className="itinerary-container" key={index}>
                    <div className="title">
                      <h2>{itinerary.title}</h2>
                    </div>
            
                    <div className="name-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            
                    <div className="info-container">
                      <div className="details">
                        <div className="price">
                          <p>Price:</p>
                          <div className="cash-container">
                            {Array.from({ length: itinerary.price }).map((e, i) => (
                              <FontAwesomeIcon key={i} icon={faMoneyBillWave} />
                            ))}
                          </div>
                        </div>
            
                        <div className="duration">
                          <p>Duration:</p>
                          <p>{itinerary.duration} Hours</p>
                        </div>
                      </div>
            
                      <div className="like">
                        <p>Likes:</p>
                        <p>{itinerary.like}</p>
                      </div>
            
                      <div className="hashTags">
                        <p>HashTags:</p>
                        <p>{itinerary.hashTags.join(', ')}</p>
                      </div>
            
                      <div className="comments">
                        <p>Comments:</p>
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

