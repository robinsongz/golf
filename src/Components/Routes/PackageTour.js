import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './PackageTour.scss';

function PackageTour() {
  return (
    <div className="packagetour">
      <div className="packagetour__header">
        <img src={require('../../Images/tour.jpg')} alt="package tour" />
      </div>
      <Tabs className="tabs">
        <TabList className="tabs__tablist">
          <Tab className="tabs__tab">胡志明市</Tab>
          <Tab className="tabs__tab">峴港市</Tab>
          <Tab className="tabs__tab">河內市</Tab>
        </TabList>

        <TabPanel className="tabs__tab-panel">
          
        </TabPanel>
        <TabPanel className="tabs__tab-panel">
        
        </TabPanel>
        <TabPanel>
          <h2>3rd City</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PackageTour;