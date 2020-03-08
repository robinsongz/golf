import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Components/Homepage/App';
import Hotel from './Components/Routes/Hotels';
import Restaurant from './Components/Routes/Restaurants';
import Attractions from './Components/Routes/Attractions';
import PackageTour from './Components/Routes/PackageTour';
import Activities from './Components/Routes/Activities';
import GolfCourse from './Components/Routes/GolfCourse';
import Safety from './Components/Routes/Safety';
import Contact from './Components/Routes/Contact';
import About from './Components/Routes/About';

const Routes = () => {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route path="/hotels" component={Hotel} />
      <Route path='/restaurants' component={Restaurant} />
      <Route path='/attractions' component={Attractions} />
      <Route path='/activities' component={Activities} />
      <Route path='/packagetour' component={PackageTour} />
      <Route path='/golfcourse' component={GolfCourse} />
      <Route path='/about' component={About} />
      <Route path='/safety' component={Safety} />
      <Route path='/contact' component={Contact} />
    </Switch >
  )
}

export default Routes