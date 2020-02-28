import React from 'react';
import './Cards.scss';

function Cards() {
  return (
      <div className="card-section">
        <div className="card-section__header">
            <h1>Explore Vietnam</h1>
        </div>
        <div className="card-section__cards">
            <div className="row">
                <div class="col-sm-3">
                    <div className="card-section__card bg-dark text-white">
                        <img src={require('../Images/hotels1.jpg')} className="card-img-top" alt="hotels" />
                        <div class="card-section__card-text">
                            <h1>Hotels</h1>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card-section__card bg-dark text-white">
                        <img src={require('../Images/restaurant1.jpg')} className="card-img-top" alt="restaurants" />
                        <div class="card-section__card-text">
                            <h1>Restaurants</h1>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card-section__card bg-dark text-white">
                        <img src={require('../Images/nightlife1.jpg')} className="card-img-top" alt="Activities" />
                        <div class="card-section__card-text">
                            <h1>Activities</h1>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card-section__card bg-dark text-white">
                        <img src={require('../Images/nightlife2.jpg')} className="card-img-top" alt="Nightlife" />
                        <div class="card-section__card-text">
                            <h1>Nightlife</h1>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  );
}

export default Cards;