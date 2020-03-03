import React from 'react';
import './Cards.scss';

import { NavLink } from 'react-router-dom';
  
function Cards() {
  return (
      <div className="card-section">
          <div className="card-section__header">
              <h1>Explore</h1>
          </div>
        <div className="card-section__cards">
            <div className="row">
                <div class="col-12 col-lg-4 col-md-6">
                    <NavLink to="/packagetour">
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/tour.jpg')} className="card-img-top" alt="package tour" />
                            <div class="card-section__card-text">
                                <h1>Package Tour</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div class="col-12 col-lg-4 col-md-6">
                    <NavLink to="/hotels">
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/hotels1.jpg')} className="card-img-top" alt="hotels" />
                            <div class="card-section__card-text">
                                <h1>Hotels</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div class="col-12 col-lg-4 col-md-6">
                    <NavLink to='/golfcourse'>
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/golf course.jpg')} className="card-img-top" alt="golf course" />
                            <div class="card-section__card-text">
                                <h1>Golf Course</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                
            </div>

            <div className="row">
                <div class="col-sm-4">
                    <NavLink to='/restaurants'>
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/restaurant1.jpg')} className="card-img-top" alt="restaurants" />
                            <div class="card-section__card-text">
                                <h1>Restaurants</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div class="col-sm-4">
                    <NavLink to='/activities'>
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/activities1.jpg')} className="card-img-top" alt="activities" />
                            <div class="card-section__card-text">
                                <h1>Activities</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div class="col-sm-4">
                    <NavLink to='/nightlife'>
                        <div className="card-section__card bg-dark text-white">
                            <img src={require('../../Images/nightlife1.jpg')} className="card-img-top" alt="nightlife" />
                            <div class="card-section__card-text">
                                <h1>Nightlife</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
           

            
        </div>
    </div>
  );
}

export default Cards;