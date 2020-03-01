import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routes from './Routes';
import Nav from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './scrollToTop';

const Root = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
            <Nav />
            <Switch>
                <Route path="/" component={Routes} />
            </Switch>

            <Footer />
        </ScrollToTop>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));