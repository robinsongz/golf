import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Components/Homepage/App';
import Hotel from './Components/Routes/Hotels';
import Restaurant from './Components/Routes/Restaurants';
import Attractions from './Components/Routes/Attractions';
import PackageTour from './Components/Routes/PackageTour';
import Activities from './Components/Routes/Activities';
import GolfCourse from './Components/Routes/GolfCourse';

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
    </Switch >
  )
}

export default Routes