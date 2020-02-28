import React from 'react';
import './Cards.scss';

function Cards() {
  return (
      <div className="card-section">
        <div className="card-section-header">
            <h1>Explore Vietnam</h1>
        </div>
        <div className="card">
            <div className="row">
                <div class="col-sm-3">
                    <div className="card bg-dark text-white">
                        <img src={require('../Images/hotels1.jpg')} class="card-img-top cardimage" alt="hotels" />
                        <div class="card-img-overlay card-container">
                            <div className="card-text">
                                <a href="#" class="btn btn-light btn-lg">Hotels</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card bg-dark text-white">
                        <img src={require('../Images/restaurant1.jpg')} class="card-img-top" alt="restaurants" />
                        <div class="card-img-overlay card-container">
                        <div className="card-text">
                                <a href="#" class="btn btn-light btn-lg">Restaurants</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card bg-dark text-white">
                        <img src={require('../Images/nightlife1.jpg')} class="card-img-top" alt="restaurants" />
                        <div class="card-img-overlay card-container">
                        <div className="card-text">
                                <a href="#" class="btn btn-light btn-lg">Nightlife</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div className="card bg-dark text-white">
                        <img src={require('../Images/nightlife2.jpg')} class="card-img-top" alt="restaurants" />
                        <div class="card-img-overlay card-container">
                        <div className="card-text">
                                <a href="#" class="btn btn-light btn-lg">Attractions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  );
}

export default Cards;